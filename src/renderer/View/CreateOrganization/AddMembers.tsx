import { Col, Row, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Button from 'renderer/Components/Button';
import InputButton from 'renderer/Components/InputButton';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { auth, OrgIFormInput,IFormInput, AUTH } from '../../../Types/User.types';
import React from 'react';
import { CreateOrganization } from 'renderer/Store/Actions/Organization.action';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'renderer/Store/Actions/auth.action';
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import CustomButton from 'renderer/Components/Button';
import Icon from 'react-web-vector-icons'
// import Genrator from 'generate-password'

interface org {
  organization: any;
  error: any;
  isChecking: boolean;
}

const AddMembers = withRouter(function ({ history, ParentHistory }: any) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ criteriaMode: 'all' });
  const User = useSelector(({ auth }: AUTH) => auth.user);
  const Organization = useSelector(({ organization }: org) => {
    return organization.organization;
  });
  const onSubmit= (Data:IFormInput)=> {
    dispatch(CreateOrganization(Data, User.accessToken));
  };

  const [inputData,setInputdata] = React.useState({name:'',Email:'',userName:'',Password:''});
  const RedirectToDashBoard=()=>{
    ParentHistory.push('/dashboard');
  }
  const handleChange = (event:any) =>{
    const {name,value} = event.target;
    let data = {...inputData,
    [name]:value,
    }
    setInputdata(data)
  }
  const genrateRandomPassword=() =>{
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }


    setInputdata({...inputData,Password:randomstring})
  }
  const [passwordShown, setPasswordShown] = React.useState(false);
  return (
    <Container className="AuthContainer">
      {/* Headind Div */}

        <div className="main-heading">Add Members</div>



      {/* <div className="main-smallHeading">

          Please Enter your Organization Detail{' '}
        </div> */}
      {/*Select Project Div */}
      <form className="form-1" onSubmit={()=>onSubmit(inputData)}>
        {/***1st***/}
        <Row className="LabelStyle">

          <Col className="LabelInput">Member Name</Col>

        </Row>
        <Row>
          <Col>
            <input
              type="text"

              id="Name"
              value={inputData?.name}
              className="inputStyle"
              placeholder="Name"
             name="name"
              onChange={handleChange}

            />
          </Col>
        </Row>

        {/***2nd***/}
        <Row className="LabelStyle">

          <Col className="LabelInput">UserName</Col>

        </Row>
        <Row>
          <Col>
            <input
              type="text"

              id="userName"
              className="inputStyle"
              placeholder="userName"
              value={inputData?.userName}
              name="userName"
              onChange={handleChange}

            />
          </Col>
        </Row>

        {/***3rd***/}
        <Row className="LabelStyle">

                   <Col className="LabelInput">Email</Col>
                </Row>
                <Row style={{ marginTop: 5 }}>
                  <Col>
                     <input type="text" id="logo" className="inputStyle"  placeholder="Email" value={inputData?.Email} name="Email" onChange={handleChange}/>
                  </Col>

        </Row>

        {/***4th***/}
        <Row className="LabelStyle">
          <Col className="LabelInput">Password</Col>
        </Row>
        <Row style={{ marginTop: 5 }}>
          <Col>

         <div>
         <input
              id="Password"

              type={ 'text'}
              className="inputStyle "
              placeholder="Password"
              name="Password"
              value={inputData?.Password}
              onChange={handleChange}

            />
            <button style={{height:30,width:30,justifyContent:'center',alignItems: 'center',background:"#fff",borderWidth:0,position:'relative',right:35}} className="eye-icon" type="button"
            onClick={() => genrateRandomPassword()}
            >
              <Icon name="ios-refresh" font="Ionicons" size={20} color="#000"  />
            </button>

         </div>
          </Col>
        </Row>

        {/***Button Field***/}
        <Row className="button-Style">
        <Col>
                    <InputButton

                     className="Create-Button"
                     buttonStyle={{
                     backgroundImage: `linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
                     boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
                     color: '#FFFFFF',
                     width:200,marginTop:30  }}
                     title="Add Members"  />
                    </Col>
                    <Col>
                    <CustomButton
                    onClick={() => RedirectToDashBoard()}
                    icon={false}
                     className="Create-Button"
                     buttonStyle={{
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: '#EBEBEB',
                     color: '#000000',
                     width:200,
                     marginTop:30  }}
                     title=" Skip"  />
                    </Col>
                  </Row>

      </form>
    </Container>
  );
});

export default AddMembers;
