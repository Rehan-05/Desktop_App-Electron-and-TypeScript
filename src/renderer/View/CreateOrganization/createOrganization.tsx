import './createOrganization.scss';
import { CardActionArea } from '@mui/material';
import { Mark,line } from '../../Constant/Images';
import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Button from 'renderer/Components/Button';
import InputButton from 'renderer/Components/InputButton';
import { useForm ,Controller,SubmitHandler} from "react-hook-form";
import {IFormInput,
  AUTH
} from '../../../Types/User.types';
import React from 'react';


function App() {
  const [ErrorMessage,SetErrorMessage]=React.useState<string>('');
  const { register,formState: { errors }, handleSubmit }=useForm<IFormInput>({criteriaMode:'all'});
  const onSubmit: SubmitHandler<IFormInput> = (Data) => {
  //   debugger
  //  dispatch(signin(Data))
     console.log(Data);
  };
  return (
    <div className="App">
       <div className="App-Left">

             {/* Headind Div */}
            <div className="Heading-Dev">
                <div className="main-heading1"> <text className="main-heading">Create a new project </text></div>
                <div className="main-Line1"> <img className="main-Line" src={line} alt="Line" /></div>
                <div className="main-smallHeading1"> <text className="main-smallHeading">Please Enter your Organization Detail </text></div>
            </div>

            {/*Select Project Div */}
            <div className="Select-Project-Div">

              <form onSubmit={handleSubmit(onSubmit)}>

      {/* *********1st field**********/}
                <Row className="LabelStyle">
                    <Col className="LabelInput">Organization Name</Col>
                </Row>

                <Row>
                    <Col>
                      <input type="text" id="email" className="input_Style" placeholder=" @xyz"
                        onFocus={()=>SetErrorMessage('')}
                        {...register("userName", {
                          required: "This input is required.",
                          pattern: {
                            value: /\w+/,
                            message: "UserName contain alphabate and numbers only.",

                          }

                      })}
                      />
                    </Col>
                  </Row>

      {/**********2nd field**********/}
                  <Row className="LabelStyle2">
                    <Col className="LabelInput">Organization Description</Col>
                </Row>

                <Row style={{ marginTop: 5 }}>
                    <Col>
                      <input type="text" id="email" className="input_Style1" placeholder="Des..."
                        onFocus={()=>SetErrorMessage('')}
                        {...register("userName", {
                          required: "This input is required.",
                          pattern: {
                            value: /\w+/,
                            message: "UserName contain alphabate and numbers only."
                          }
                      })}
                      />
                    </Col>
                  </Row>

       {/**********3rd field**********/}
               <Row className="LabelStyle3">
                    <Col className="LabelInput">Upload Logo</Col>
                </Row>

                <Row style={{ marginTop: 5 }}>
                    <Col>
                      <input type="file" id="email" className="input_Style3"  placeholder="Des..."
                        onFocus={()=>SetErrorMessage('')}
                        {...register("userName", {
                          required: "This input is required.",
                          pattern: {
                            value: /\w+/,
                            message: "UserName contain alphabate and numbers only."
                          }
                      })}
                      />
                    </Col>
                  </Row>
               </form>

            </div>

             <div className="button-Style">
              <InputButton
                  className="Create-Button"
                  buttonStyle={{
                    backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
                    boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
                    color: '#FFFFFF',
                    width:300,marginTop:30
                  }}
                  title=" Create"
                />
             </div>

             {/* <div className="Account-Name">
                <text className="Already-Account">Already Have an Organization </text>
             </div> */}


        </div>


        <div className="App-Right">
          <div className="main-Right"> <img className="main-Right-pic" src={Mark} alt="Mark" /></div>
        </div>
    </div>
  );
}

export default App;
