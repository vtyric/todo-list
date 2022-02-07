import React from 'react';
import './todo-item-add-panel.css';

const TodoItemAddPanel = () => {
    return (
        <div className="todo-label d-flex">
            <input placeholder="todo label" type="text" className="form-control"/>
            <button type="button" className="btn btn-outline-secondary">add todo</button>
        </div>
    );
};

export default TodoItemAddPanel;