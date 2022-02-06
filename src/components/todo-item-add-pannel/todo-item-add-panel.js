import React from 'react';
import './todo-item-add-panel.css';

const TodoItemAddPanel = () => {
    return (
        <div>
            <input placeholder="todo label"/>
            <button type="button">add todo</button>
        </div>
    );
};

export default TodoItemAddPanel;