import React, {Component} from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css';

export default class TodoList extends Component {
    render() {
        const {data, onDelete, onToggleDone, onToggleImportant} = this.props;

        const elements = data.map(({id, ...itemProps}) => {
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleDone={() => onToggleDone(id)}
                        onToggleImportant={() => onToggleImportant(id)}/>
                </li>
            );
        });

        return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
        );
    }
}