import { flexbox } from '@mui/system';
import React,{useState} from 'react';
import InputButton from 'renderer/Components/InputButton';
import Popup from './Popup';
import {projectDataModel} from './DataModel';
import {useSelector} from "react-redux";
import Api from "renderer/Api/auth.api"

function AddProjectForm({isOpen,setIsOpen}:any) {


  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const user = useSelector(({auth}:any)=>auth.user);
  const [dataModel,setDataModel] = useState(projectDataModel);
  const onTitileChangeHandle=(event:any)=>{
    setDataModel({...dataModel,"ProjectTitle":event.target.value});
  }
  const onDescriptionChangeHandle=(event:any)=>{
    setDataModel({...dataModel,"projectDescription":event.target.value});
  }
  const onStartDateChangeHandle=(event:any)=>{
    setDataModel({...dataModel,"startDate":event.target.value});
  }
  const onEndDateChangeHandle=(event:any)=>{
    setDataModel({...dataModel,"endDate":event.target.value});
  }
  return (<>{isOpen && <Popup handleClose={togglePopup}

      content={<>
        <div style={{display:'flex',justifyContent:'center'}}><b>Create New Project Form</b></div>
        <form>
          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <div>
              <p>Project Title</p>
              <input onChange={onTitileChangeHandle} value={dataModel.ProjectTitle} type="text" placeholder="Project Title"name="ProjectTitle"/>
              </div>
              <div>
              <p>Project Description</p>
              <input onChange={onDescriptionChangeHandle} value={dataModel.projectDescription} type="text" placeholder="Project Description"name="projectDescription"/>
              </div>
              <div>
              <p>Start Date</p>
              <input onChange={onStartDateChangeHandle} value={dataModel.startDate} type="date" placeholder="Start Date"name="startDate"/>
              </div>
              <div>
              <p>End Date</p>
              <input onChange={onEndDateChangeHandle} value={dataModel.endDate}  type="date" placeholder="End Date"name="endDate"/>
              </div>

          </div>
        </form>
        <div className="View-Profile-Button" style={{display:'flex',justifyContent:'center'}}>
            {/* <button>Submit</button> */}
            <InputButton
              onClick={()=>{
                const dataa={
                  "ProjectTitle":dataModel.ProjectTitle,
                  "projectDescription":dataModel.projectDescription,
                  "status":"On Track",


                  "company":user.company,


              }
                // setDataModel({...dataModel,"company":user.company});
                Api.CreateProject(dataa,user.accessToken).then(res=>{
                  debugger;
                  if(res.data.status==200){
                    alert(res.data.message);
                    setIsOpen(!isOpen);
                  }
                  else{
                    alert(res.data.message);
                  }
                }
              ).catch(err=>{
                debugger;
                  alert(err.response.data.message);
              })

            }}
                    className="View-Button"
                    buttonStyle={{margin:20}}
                    title="Create Project"
                  />

        </div>


      </>}

    />}</>
 )
}

export default AddProjectForm;
