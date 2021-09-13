import React from 'react';
import TodoItem from './TodoItem';

const List = ({ list, removeTodo, editTodo }) => {
    const renderedList = list.map((item) =>
        <TodoItem title={item.title}
            key={item._id}
            completed={item.isCompleted}
            editTodo={(updatedItem) => editTodo(item._id, updatedItem)}
            removeTodo={(e) => removeTodo(item._id)} />
    );

    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};

export default List
