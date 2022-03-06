import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        console.log(input);

        setInput('');

    };

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update your item"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />z
                    <button onClick={handleSubmit} className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                <div>
                    <div className="ADD_Task_Heading_Row">

                    <div className="Left_Side_Button">
                      <div style={{marginTop:'0.6rem',}}>
                          <h5>Tasks Name</h5>
                      </div>
                    </div>

                    <div className="Right_Side_Heading">

                      <div style={{marginRight:'4rem',borderLeft:'2px solid',borderColor:'grey'}}>
                          <div style={{marginTop:'0.8rem',marginLeft:20}}>
                            <h5>Due Date</h5>
                          </div>
                      </div>

                      <div style={{marginRight:'4rem',borderLeft:'2px solid',borderColor:'grey'}}>
                          <div style={{marginTop:'0.8rem',marginLeft:20}}>
                          <h5>Assign To</h5>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{marginLeft:'2rem',marginTop:'1rem'}}>
                    <input
                        type="text"
                        placeholder="Add a todo"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button">Add todo</button>
               </div>
                </>
            )}
        </form >
    )
}

export default TodoForm;
