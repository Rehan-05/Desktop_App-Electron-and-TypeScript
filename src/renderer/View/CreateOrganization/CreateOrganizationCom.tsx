// import './createOrganization.scss';
import axios from "axios";
import { CardActionArea } from '@mui/material';
import { Mark,line } from '../../Constant/Images';
import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Button from 'renderer/Components/Button';
import InputButton from 'renderer/Components/InputButton';
import { useForm ,Controller,SubmitHandler} from "react-hook-form";
import {IFormInput,AUTH,OrgIFormInput
} from '../../../Types/User.types';
import React from 'react';
import { CreateOrganization } from 'renderer/Store/Actions/Organization.action';
import {useDispatch,useSelector} from 'react-redux';

function CreateOrgCom() {
  const dispatch = useDispatch();
  const [ErrorMessage,SetErrorMessage]=React.useState<string>('');
  const {register, formState: { errors }, handleSubmit }=useForm<OrgIFormInput>({criteriaMode:'all'});
  const User = useSelector(({auth}:AUTH)=>auth.user);
  const onSubmit: SubmitHandler<OrgIFormInput> = (Data) => {
    debugger
    let data={
      "organizationName":"XYZ",
      "description" :"xyz is our organization",
      "owner":"Rehan",
      "logo":"project",
      "address":"Islamabad"
    }
    try{
      debugger
      console.log( dispatch(CreateOrganization(data,User.accessToken)) );
     }
    catch(e){
      console.log(e);
    }
  };
  return (
    <div className="App">
       <div className="App-Left">

        {/* Headind Div */}
         <div className="Heading-Dev">
                <div className="main-heading1"> <div className="main-heading">Create a new Organization </div></div>
                <div className="main-smallHeading1"> <div className="main-smallHeading">Please Enter your Organization Detail </div></div>
         </div>

        {/*Select Project Div */}
       <div className="Select-Project-Div">
         <form onSubmit={handleSubmit(onSubmit)}>
             {/***1st***/}
              <Row className="LabelStyle">
                  <Col className="LabelInput">Organization Name</Col>
              </Row>
              <Row>
                  <Col>
                  <input type="text" id="name" className="input_Style" placeholder=" @xyz" />
                   </Col>
              </Row>

            {/***2nd***/}
              <Row className="LabelStyle4">
                <Col className="LabelInput">Organization Address</Col>
              </Row>
              <Row>
                 <Col>
                   <input type="text" id="address" className="input_Style" placeholder=" Islamabad,F6x.20" />
                 </Col>
              </Row>

             {/***3rd***/}
                <Row className="LabelStyle3">
                   <Col className="LabelInput">Upload Logo</Col>
                </Row>
                <Row style={{ marginTop: 5 }}>
                  <Col>
                     <input type="file" id="logo" className="input_Style3"  placeholder="Des..." />
                  </Col>
                </Row>

             {/***4th***/}
                <Row className="LabelStyle2">
                   <Col className="LabelInput">Organization Description</Col>
                </Row>
                <Row style={{ marginTop: 5 }}>
                   <Col>
                     <textarea  id="textbox" className="input_Style1" placeholder="Des..."    />
                    </Col>
                </Row>

              {/***Button Field***/}
                 <div className="button-Style">
                    <InputButton
                     className="Create-Button"
                     buttonStyle={{
                     backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
                     boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
                     color: '#FFFFFF',
                     width:300,marginTop:30  }}
                     title=" Create"  />
                  </div>
         </form>
       </div>
     </div>
   </div>
  );
}

export default CreateOrgCom;
