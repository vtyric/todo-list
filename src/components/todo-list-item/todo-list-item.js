import React from 'react';

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span style={style}>
           {label}
        </span>
    );
};

export default TodoListItem;