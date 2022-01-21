import { flexbox } from '@mui/system';
import React,{useState} from 'react';
import InputButton from 'renderer/Components/InputButton';
import Popup from './Popup';

function AddProjectForm({isOpen,setIsOpen}:any) {
  

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    {/* <input
      type="button"
      value="Create Project"
      onClick={togglePopup}
    /> */}
  
    {isOpen && <Popup
      content={<>
        <div style={{display:'flex',justifyContent:'center'}}><b>Create New Project Form</b></div>
        <form>
          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <div>
              <p>Project Title</p>
              <input name="Project Title"/>
              </div>
              <div>
              <p>Project Description</p>
              <input name="Project Description"/>
              </div>
              <div>
              <p>Start Date</p>
              <input name="Start Date"/>
              </div>
              <div>
              <p>End Date</p>
              <input name="End Date"/>
              </div>

          </div>
        </form>
        <div className="View-Profile-Button" style={{display:'flex',justifyContent:'center'}}>
            {/* <button>Submit</button> */}
            <InputButton
                    className="View-Button"
                    buttonStyle={{}}
                    title=" View Profile"
                  />

        </div>
       
                 
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default AddProjectForm;
