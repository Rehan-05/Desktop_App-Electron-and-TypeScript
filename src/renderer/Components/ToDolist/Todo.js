import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
      <>
          <div className="ADD_Task_Heading_Row">

          {/* <div className="Left_Side_Input"> */}
          <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                            {todo.text}
                        </div>
                        <div className='icons'>
                            <RiCloseCircleLine
                                onClick={() => removeTodo(todo.id)}
                                className='delete-icon'
                            />
                            <TiEdit
                                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                                className='edit-icon'
                            />
                        </div>
            </div>

           {/* </div> */}

          <div className="Right_Side_Heading">

              <div style={{borderLeft:'2px solid',borderColor:'grey'}} className="todo-row-Date">
                  <div style={{marginTop:'0.7rem',marginLeft:10}}>
                  <input
                      className="add-task__content"
                      // aria-label="Enter your task"
                      // data-testid="add-task-content"
                      type="Date"
                      placeholder="Enter your task"
                      // value={todo.text}
                      // onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
              </div>

            <div style={{marginRight:'4rem',borderLeft:'2px solid',borderColor:'grey'}}>
                <div style={{marginTop:'0.7rem',marginLeft:20}}>
                  <input type="text" placeholder="Rehan12" style={{width:'5rem'}} className="add-task__content" />
                </div>
            </div>

          </div>
          </div>

        </>
    ));
};

export default Todo;




