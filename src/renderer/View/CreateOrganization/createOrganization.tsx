import react from 'react';
import './createOrganization.scss';
import { CardActionArea } from '@mui/material';
import { Mark,line } from '../../Constant/Images';
// import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Button from 'renderer/Components/Button';
// import InputButton from 'renderer/Components/InputButton';
// import { useForm ,SubmitHandler} from "react-hook-form";
// import {IFormInput,
//   AUTH
// } from '../../../Types/User.types';


function App() {
  // const [ErrorMessage,SetErrorMessage]=React.useState<string>('');
  return (
    <div className="App">
       <div className="App-Left">
           {/* Headind Div */}

            <div className="Heading-Dev">
                <div className="main-heading-dev"> <text className="main-heading">Create a new project </text></div>
                <div className="main-heading-dev"> <img className="main-Line" src={line} alt="Line" /></div>
                <div className="main-heading-dev"> <text className="main-smallHeading">Please Enter your Organization Detail </text></div>
            </div>

          {/* Select Project Div */}

          {/* <form onSubmit={handleSubmit(onSubmit)}>
          <Row style={{ marginTop: 10 }}>
              <Col className="LabelInput">UserName</Col>
              <Col className="LabelInput">Password</Col>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Col>
                <input type="text" id="email" className="inputStyle"
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
                <Col>
                  <input type="password"  id="Password" className="inputStyle"
                  onFocus={()=>SetErrorMessage('')}
                  {...register("Password",
                  {
                    required: "This input is required.",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message: "Password contain 1 alphabate and 1 numbers and minimum 8 Charcter."
                    }
                  }
                  )}
                  />
                </Col>
              </Row>

              <div style={{color:'red',fontSize:14,fontFamily:'Manrope',marginTop:5}}>
                {ErrorMessage}
              </div>

        <div style={{ alignItems: 'center', display: 'flex', marginTop: 25 }}>
            <input
              className="CheckBox mr-1"
              type="checkbox"
              {...register("rememberme")}
              id="flexCheckDefault"
            />
              <label
                className="form-check-label ml-1"
                style={{ marginLeft: 10, fontSize: 14, color: '#7A86A1',fontFamily:'Manrope' }}
                htmlFor="flexCheckDefault"
              >
            Remember me
              </label>
              <Link
                to="/ForgotPassword"
                className="ml-1 RegisterLink"
                style={{ marginLeft: 10 }}
              >
              Forgot password?
            </Link>
              </div>
              <InputButton

                buttonStyle={{
                  backgroundImage: ` linear-gradient(to right, #B543F1 0%, #BF3EC9 47%, #EE4086 100%)`,
                  boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
                  color: '#FFFFFF',
                  width:300,marginTop:30
                }}
                title=" Sign In"

              />
            </form> */}


        </div>


        <div>
          <div > <img className="main-left-pic" src={Mark} alt="Mark" /></div>
        </div>
    </div>
  );
}

export default App;
