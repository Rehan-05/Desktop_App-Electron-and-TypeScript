import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Button from 'renderer/Components/Button';
import NeedAccount from 'renderer/Components/NeedAccount';
import { useForm ,SubmitHandler} from "react-hook-form";
import InputButton from 'renderer/Components/InputButton';
import { ErrorMessage } from '@hookform/error-message';
import { AUTH, IFormInput } from 'Types/User.types';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { inputModel,validateModel } from './DataModel';



import {register as REGISTER} from '../../Store/Actions/auth.action'
import Icon from 'react-web-vector-icons';




export default function Register() {
  const dispatch = useDispatch();

  const [isAgree,setIsAgree]=React.useState<boolean>(false)
  const [ErrorMessage,SetErrorMessage]=React.useState<any>("");
  const [isvalid,setIsValid]=React.useState(validateModel);
  const ServerErrorLogin=useSelector(({auth}:AUTH)=>{return auth.login?.error})
  const ServerErrorRegister=useSelector(({auth}:AUTH)=>{return auth.register?.error})
  const [model,setModel] = React.useState(inputModel);

  React.useEffect(()=>{
    if(ServerErrorLogin){
      SetErrorMessage(ServerErrorLogin.message)
    }
    else if(ServerErrorRegister){
      SetErrorMessage(ServerErrorRegister.message)
  }

  },[ServerErrorLogin,ServerErrorRegister])
  const handleNameChange= (e:any) => {
    const re = /^[A-Za-z]+$/;
    if (e.target.value === "" || re.test(e.target.value))
    {
      setModel({ ...model,"name": e.target.value });
    }
    if(e.target.value.length>=3){
      setIsValid({...isvalid,"name":{message:"Name must be less than 3 characters",isvalid:true}})
    }
  };
  const handleUserNameChange=(e:any)=>{
    const re = /^\w*$/;
    if (e.target.value === "" || re.test(e.target.value))
    {
      setModel({ ...model,"userName": e.target.value });
    }
  }
  const handleCompanyNameChange=(e:any)=>{
    const re=/^[A-Za-z]+$/;
    if (e.target.value === "" || re.test(e.target.value))
    {
      setModel({ ...model,"company": e.target.value })
    }
    // also check avaliability
  }
  const ValidateModel = ()=>{
    if(model.name.length<=0)
    {
      SetErrorMessage("Name is required")
      return false;
    }else
    if(!/^[A-Za-z]{3,}/.test(model.name))
    {
      SetErrorMessage("Name must be at least  3 characters")
      return false;
    }else if(model.company.length<=0)
    {
      SetErrorMessage("Company Name is required")
      return false;
    }
    else if(!/^[A-Za-z]{3,}/.test(model.company))
    {
      SetErrorMessage("company Name must be at least  3 characters and valid")
      return false;
    }
    else if (!/^\w{3,}/.test(model.userName))
    {
      SetErrorMessage("User Name must be at least  3 characters and valid")
      return false;
    }
    else if(!/^[\w]{3,}@[a-z]*\.[a-zA-Z]*/.test(model.email))
    {
      SetErrorMessage("Email must be valid")
      return false;
    }
    else if(model.password.length<8)
    {
      SetErrorMessage("Password must be at least 8 characters")
      return false;
    }
    else if(model.phone.length<=2)
    {

        SetErrorMessage("Phone is not empty")
        return false;
    }
    else {
      SetErrorMessage("")
    }
    return true;
  }
  const onSubmit = (data:any) => {

    console.log(data)
    if(ValidateModel()){

      dispatch(REGISTER(data))
    }

  };

  return (
    <div className="AuthContainer">
      {/* Cretae Accoutn Tag */}
      <NeedAccount
      to = '/'
      text1 = 'Already a member?'
      text2 = ' Sign In'
      />
      <div>
        <div className="form-heading">Create Your Account</div>
        <Row style={{ marginTop: 10 }}>
          <Col className="LabelInput">Name</Col>
          <Col className="LabelInput">UserName</Col>
        </Row>

        <Row style={{ marginTop: 10,}}>
          <Col>

           <input type="text" id="name" className="inputStyle"
            placeholder="e.g:- John"
            name="name"
            required
            value={model.name}
            onChange={handleNameChange}
            onFocus={()=>SetErrorMessage("")}
                // value: /[a-zA-Z]{3,}/,
                // message: "Name contain only alphabate."
            />


          </Col>
          <Col>
            <input type="text" id="userName" className="inputStyle"
            placeholder="as12"
            name="userName"
            required
            value={model.userName}
            onChange={handleUserNameChange}
            onFocus={()=>SetErrorMessage("")}

                // value: /\w{3,}/,
                // message: "UserName contain alphabate and numbers only."
            />
          </Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col className="LabelInput">Company</Col>
          <Col className="LabelInput">Phone</Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col>
            <input type="text" id="name" className="inputStyle"
            placeholder="e.g:- John"
            name="company"
            value={model.company}
            onChange={handleCompanyNameChange}
                // value: /[a-zA-Z]{3,}/,
                // message: "company name contain only alphabate."

            />
          </Col>
          <Col>
          <PhoneInput
             country={'us'}
             value={model.phone}
             onChange={phone => setModel({ ...model, "phone": phone })}
             containerClass="inputStyle"
             inputStyle={{border:'none',width:220,borderStyle:'none'}}
             buttonStyle={{border:'none'}}

            />
          </Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col className="LabelInput">Email</Col>
          <Col className="LabelInput">Password</Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col>
            <input type="text" id="email" className="inputStyle"
            placeholder="irtza@gmail.com"
            name="email"
            value={model.email}
            onChange={e =>{
               setModel({ ...model, "email": e.target.value })
              const re = /^[\w]{3,}@[a-z]*\.[a-zA-Z]*/;
              if (e.target.value.length >= 5  && !re.test(e.target.value)){
                SetErrorMessage("Please use Correct Formate of email address");
              }else{
                SetErrorMessage("")
              }
              }}

            />
          </Col>
          <Col>
            <input type="password" id="Password" className="inputStyle"
            placeholder="*****"
            name="password"
            value={model.password}
            onChange={e => {
              setModel({ ...model, "password": e.target.value })
            const re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if(e.target.value.length >= 4  && !re.test(e.target.value)){
              SetErrorMessage("Password must contain at least 8 characters, \nincluding UPPER/lowercase and numbers.");
            }
            else{
              SetErrorMessage("")
            }
            }}
                // value: ,
                // message: "Password contain 1 alphabate and 1 numbers."
            />
          </Col>
        </Row>
{/* Error showing in below Div */}
        <div style={{color:'red',fontSize:14,fontFamily:'Manrope',marginTop:5}}>
          {ErrorMessage}
        </div>

        <div style={{ alignItems: 'center', display: 'flex', marginTop: 25 }}>
          <input
            className="CheckBox mr-1"
            type="checkbox"
            id="flexCheckDefault"
            checked={isAgree}
            onChange={()=>setIsAgree(!isAgree)}
          />
          <label
            className="form-check-label ml-1"
            style={{ marginLeft: 10, fontSize: 14, color: '#7A86A1',fontFamily:'Manrope' }}
            htmlFor="flexCheckDefault"
          >
            I accept the
          </label>
          <a

            className="ml-1 RegisterLink"
            style={{ marginLeft: 10 }}
          >
            Terms and Conditions
          </a>
        </div>

        <InputButton
        disabled={!isAgree}
        onClick={()=>onSubmit(model)}
          buttonStyle={{
            backgroundImage: ` linear-gradient(to right, #B543F1 0%, #BF3EC9 47%, #EE4086 100%)`,
            boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
            color: '#FFFFFF',
            width:300,marginTop:30,
            backgroundColor:isAgree?null:"gray"

          }}
          title=" Sign Up"

        />



      </div>
    </div>
  );
}




