import React, { useState } from 'react'

const TodoItem = ({ title, completed, removeTodo, editTodo }) => {

    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [isEditing, setIsEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            editTodo({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    }

    const handleInputChange = (e) => {
        setTempValue(e.target.value);
    }

    const handleButtonClick = () => {
        setIsCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodo({ isCompleted: newState });
            return newState;
        });
    }

    return (
        < div className="row"  >
            {isEditing ?
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input onKeyDown={handleInputKeyDown}
                            onChange={handleInputChange}
                            autoFocus={true}
                            value={tempValue} />
                    </div>
                </div> :
                <>
                    <div className="column five wide">
                        <h2 onDoubleClick={handleDivDoubleClick}
                            className={"ui header " + (isCompleted && " green")}>
                            {value}</h2>
                    </div>
                    <div className="column one wide">
                        <button className={"ui button circular icon " + (isCompleted ? " blue" : " green")}
                            onClick={handleButtonClick}
                        >
                            <i className="check icon white"></i>
                        </button>
                    </div>
                    <div className="column one wide">
                        <button className="ui button circular icon red"
                            onClick={removeTodo}>
                            <i className="remove icon white"></i>
                        </button>
                    </div >
                </>
            }
        </div>
    )
}

export default TodoItem
