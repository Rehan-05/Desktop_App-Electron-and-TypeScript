import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from 'react-web-vector-icons';

import NeedAccount from 'renderer/Components/NeedAccount';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputButton from 'renderer/Components/InputButton';
interface IFormInput {
  Email: string;
}
export default function FogotPassword() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="AuthContainer">
      {/* Cretae Accoutn Tag */}
      <NeedAccount />
      <div>
        <div className="form-heading">Forgot password?</div>

        <div className="textgray">
          Enter the email address you used when you joined and we'll
          <br /> send you instructions to reset your password.
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row style={{ marginTop: 10 }}>
            <Col className="LabelInput">Your email</Col>
          </Row>

          <Row style={{ marginTop: 10 }}>
            <Col>
              <input
                type="text"
                id="email"
                className="inputStyle"
                placeholder="rehan@gmail.com"
            {...register("Email",{pattern:/^[\w]{3,}@[a-z]*\.[a-zA-Z]*/,required:true})}


              />
            </Col>
          </Row>

          <InputButton
            buttonStyle={{
              backgroundImage: ` linear-gradient(to right, #B543F1 0%, #BF3EC9 47%, #EE4086 100%)`,
              boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
              color: '#FFFFFF',
              width: 300,
              marginTop: 30,
            }}
            title="Submit"
          />
        </form>

        <div style={{ alignItems: 'center', display: 'flex', marginTop: 25 }}>
          <Link to="/" className="ml-1 RegisterLink" style={{ marginLeft: 10 }}>
            <Icon
              name="chevron-small-left"
              color="#B543F1"
              size={20}
              font="Entypo"
            />{' '}
            Back to sig in
          </Link>
        </div>
      </div>
    </div>
  );
}
