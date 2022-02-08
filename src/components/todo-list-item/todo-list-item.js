import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important, done, onDelete, onToggleDone, onToggleImportant}) => {
    let className = "todo-list-item";
    className += done ? " done" : "";
    className += important ? " important" : "";

    return (
        <span className={className}>

                <span
                    className={"todo-list-item-label"}
                    onClick={onToggleDone}>
                      {label}
                 </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={onToggleImportant}>
                 <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDelete}>
                  <i className="fa fa-trash-o"/>
                </button>

            </span>
    );
};

export default TodoListItem;


