import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Button from 'renderer/Components/Button';
import NeedAccount from 'renderer/Components/NeedAccount';
import { useForm ,SubmitHandler} from "react-hook-form";
import InputButton from 'renderer/Components/InputButton';


interface IFormInput {
  Email: string;
  Password: string;
  userName: string;
  name: string;
}


export default function Register() {
  const { register, handleSubmit }=useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="AuthContainer">
      {/* Cretae Accoutn Tag */}
      <NeedAccount
      to = '/'
      text1 = 'Already a member?'
      text2 = ' Sign In'
      />
      <div>
        <div className="SignText">Create Your Account</div>

        <Button
        icon={true}
          iconName="social-google"
          font="SimpleLineIcons"
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
          iconName="facebook"
          font="Feather"
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
            {...register("name",{required:true,pattern:/^[A-Za-z]+$/})}
            />
          </Col>
          <Col>
            <input type="text" id="userName" className="inputStyle"
            {...register("userName",{required:true,pattern:/^[\w]$/})}
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
           {...register("Email",{pattern:/^[\w]{3,}@[a-z]*\.[a-zA-Z]*/,required:true})}
            />
          </Col>
          <Col>
            <input type="password" id="Password" className="inputStyle"
            {...register("Password",{pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,required:true})}
            />
          </Col>
        </Row>

        <div style={{ alignItems: 'center', display: 'flex', marginTop: 25 }}>
          <input
            className="CheckBox mr-1"
            type="checkbox"
            id="flexCheckDefault"
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
          buttonStyle={{
            backgroundImage: ` linear-gradient(to right, #B543F1 0%, #BF3EC9 47%, #EE4086 100%)`,
            boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
            color: '#FFFFFF',
            width:300,marginTop:30
          }}
          title=" Sign Up"

        />
        </form>


      </div>
    </div>
  );
}




