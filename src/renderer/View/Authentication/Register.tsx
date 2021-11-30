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


import {register as REGISTER} from '../../Store/Actions/auth.action'




export default function Register() {
  const dispatch = useDispatch();
  const { register,formState: { errors }, handleSubmit }=useForm<IFormInput>({criteriaMode:'all'});
  const onSubmit: SubmitHandler<IFormInput> = data => {
    debugger
    // console.log(data)
    dispatch(REGISTER(data))
  };

  const [isAgree,setIsAgree]=React.useState<boolean>(false)
  const [ErrorMessage,SetErrorMessage]=React.useState<string>('');
  const ServerErrorLogin=useSelector(({auth}:AUTH)=>{return auth.login.error})
  const ServerErrorRegister=useSelector(({auth}:AUTH)=>{return auth.register.error})
 React.useEffect(()=>{
   if(ServerErrorLogin){
      SetErrorMessage(ServerErrorLogin.message)
   }
   else if(ServerErrorRegister){
     debugger
     SetErrorMessage(ServerErrorRegister.message)
   }
   else if(errors.userName){
     SetErrorMessage(errors?.userName?.message||'')
   }
   else if(errors.Password){
      SetErrorMessage(errors?.Password?.message||'')
   }
 },[errors])

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

        <Button
        icon={true}
        iconName="google"
        font="MaterialCommunityIcons"
          className="CusomtButtonTitle"
          buttonStyle={{
            backgroundImage: `linear-gradient(to right, #F9B035 0%, #F98C4E 53%, #F96767 100%)`,
            boxShadow: `3.994px 22.651px 57px  rgba(249, 103, 103, 0.259)`,
            color: '#FFFFFF',
          }}
          title=" Sign Up with Google"
          color="#FFFFFF"
        />

        <Button
        icon={true}
          buttonStyle={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#EBEBEB',
          }}
          size={20}
          iconName="sc-facebook"
          font="EvilIcons"
          className="CusomtButtonTitle"
          title="with Facebook"
        />

        <div className="textgray">Or sign up using your email address</div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <Row style={{ marginTop: 10 }}>
          <Col className="LabelInput">Name</Col>
          <Col className="LabelInput">UserName</Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col>
            <input type="text" id="name" className="inputStyle"
            placeholder="e.g:- John"
            {...register("name",
            {
              required: "This input is required.",
              pattern: {
                value: /[a-zA-Z]{3,}/,
                message: "Name contain only alphabate."
              }
            }
            )}
            />
          </Col>
          <Col>
            <input type="text" id="userName" className="inputStyle"
            placeholder="as12"
            {...register("userName",

            {
              required: "This input is required.",
              pattern: {
                value: /\w{3,}/,
                message: "UserName contain alphabate and numbers only."
              }
            }
            )}
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
           {...register("Email",
           {
            required: "This input is required.",
            pattern: {
              value: /^[\w]{3,}@[a-z]*\.[a-zA-Z]*/,
              message: "Please use Correct Formate of email address"
            }
          }
           )}
            />
          </Col>
          <Col>
            <input type="password" id="Password" className="inputStyle"
            placeholder="*****"
            {...register("Password",
            {
              required: "This input is required.",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: "Password contain 1 alphabate and 1 numbers."
              }
            }
            )}
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
          buttonStyle={{
            backgroundImage: ` linear-gradient(to right, #B543F1 0%, #BF3EC9 47%, #EE4086 100%)`,
            boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
            color: '#FFFFFF',
            width:300,marginTop:30,
            backgroundColor:isAgree?null:"gray"
          }}
          title=" Sign Up"

        />
        </form>


      </div>
    </div>
  );
}




