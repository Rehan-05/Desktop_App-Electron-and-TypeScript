import React, { useState } from "react";
// import InputButton from "renderer/Components/InputButton";
// import Icon from 'react-web-vector-icons';
// import AddTask  from 'renderer/Components/Add_Task_Schedule/Add_Task';
// import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import TodoList from 'renderer/Components/TodoList/TodoList';
  const  MyTask = ({
    showAddTaskMain = true,
    shouldShowMain = false,
  }) => {
    const [task, setTask] = useState('');

    const [showMain, setShowMain] = useState(shouldShowMain);
    // const [showProjectOverlay, setShowProjectOverlay] = useState(false);

  return (
       <div className="Main_Task_List">

        {/* <div className="ADD_Task_Row">
          { showAddTaskMain && (
            <div className="Left_Side_Button" onClick={() => setShowMain(!showMain)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowMain(!showMain);
                }}
                tabIndex={0}
                aria-label="Add Task"
                role="button">
                <InputButton
                 className="Add_Task_Button"
                 buttonStyle={{

                  // backgroundImage: ` linear-gradient(to right, #B543F1 0%, #BF3EC9 47%, #EE4086 100%)`,
                  backgroundColor : 'blue',
                  boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
                  color: '#FFFFFF',
                  width: 130,
                  height:30,
                }}
                title="Add Task"

              />
            </div>
          )}
            <div className="Right_Side_Button">
              <div style={{marginTop:'0.6rem',marginRight:'0.5rem'}}>
                  <Icon
                  name="checkcircleo"
                  color="blue"
                  size={20}
                  font="AntDesign"
                  />
              </div>
               <div style={{marginTop:'1rem'}}>
                  <h6>All Task</h6>
              </div>
            </div>
        </div> */}

 {/* Tasks Heading Line */}

         {/* <div className="ADD_Task_Heading_Row">

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
          </div> */}

{/* Project Name Heading  */}
              {/* <div style={{margin:'20px 0px 20px 50px'}}>
                <h6 style={{fontWeight:'bold'}}>Intelligent Project Allaince</h6>
              </div> */}

 {/* Tasks Heading Line */}

      {/* <div>
       {(showMain  && (

        <div className="ADD_Task_Heading_Row">

        <div className="Left_Side_Input">
            <div style={{marginTop:'0.6rem',}} >
                <input
                  className="add-task__content"
                  // aria-label="Enter your task"
                  // data-testid="add-task-content"
                  type="text"
                  placeholder="Enter your task"
                  // value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div style={{marginTop:'0.5rem',}} >
              <span
                      className="add-task__cancel-x"
                      data-testid="add-task-quick-cancel"
                      aria-label="Cancel adding task"
                      onClick={() => {
                        setShowMain(false);
                        // setShowProjectOverlay(false);
                        // setShowQuickAddTask(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setShowMain(false);
                          // setShowProjectOverlay(false);
                          // setShowQuickAddTask(false);
                        }
                      }}
                      tabIndex={0}
                      role="button">
                        <div style={{marginLeft:'20rem'}}>
                            <Icon
                              name="close"
                              color="red"
                              size={20}
                              font="AntDesign"
                              />
                        </div>
                  </span>
            </div>
        </div>

        <div className="Right_Side_Heading">

          <div style={{borderLeft:'2px solid',borderColor:'grey'}}>
              <div style={{marginTop:'0.7rem',marginLeft:10}}>
               <input
                  className="add-task__content"
                  aria-label="Enter your task"
                  data-testid="add-task-content"
                  type="Date"
                  placeholder="Enter your task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
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

        ))}
     </div> */}
     <TodoList />
  </div>
  );
}

export default MyTask;
