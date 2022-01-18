// import './createOrganization.scss';
import axios from 'axios';
import { CardActionArea } from '@mui/material';
import { Mark, line } from '../../Constant/Images';
import { Col, Row, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Button from 'renderer/Components/Button';
import InputButton from 'renderer/Components/InputButton';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { AUTH, auth, OrgIFormInput } from '../../../Types/User.types';
import React from 'react';
import { CreateOrganization } from 'renderer/Store/Actions/Organization.action';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'renderer/Store/Actions/auth.action';
import { useHistory } from 'react-router-dom';

interface org {
  organization: any;
  error: any;
  isChecking: boolean;
}

function CreateOrgCom() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<OrgIFormInput>({ criteriaMode: 'all' });
  const User = useSelector(({ auth }: AUTH) => auth.user);
  const Organization = useSelector(({ organization }: org) => {
    return organization.organization;
  });
  const onSubmit: SubmitHandler<OrgIFormInput> = (Data) => {
    dispatch(CreateOrganization(Data, User.accessToken));
  };
  React.useEffect(() => {
    if (Organization && Organization?.Members.length == 0) {
      history.replace('/createOrganization/addmembers');
    }
  }, [Organization]);

  if (User?.joinedOrganization) {
    history.replace('/createOrganization/addmembers');
  }
  return (
    <Container className="AuthContainer">
      {/* Headind Div */}
      <div className="Heading-Dev">
        <div className="main-heading">Create a new Organization </div>
        <div className="main-smallHeading">
          Please Enter your Organization Detail{' '}
        </div>
      </div>

      {/*Select Project Div */}

      <form className="form-1" onSubmit={handleSubmit(onSubmit)}>
        {/***1st***/}
        <Row className="LabelStyle">
          <Col className="LabelInput">Organization Name</Col>
        </Row>
        <Row>
          <Col>
            <input
              type="text"
              id="OrganzationNamr"
              className="inputStyle"
              placeholder=" @xyz"
              {...register('organizationName', {
                required: 'Organization Name Is Required',
                pattern: {
                  value: /\w{3,}/,
                  message: 'UserName contain alphabate and numbers only.',
                },
              })}
            />
          </Col>
        </Row>

        {/***2nd***/}
        <Row className="LabelStyle">
          <Col className="LabelInput">Organization Address</Col>
        </Row>
        <Row>
          <Col>
            <input
              type="text"
              id="address"
              className="inputStyle"
              placeholder=" Islamabad,F6x.20"
              {...register('address')}
            />
          </Col>
        </Row>

        {/***3rd***/}
        {/* <Row className="LabelStyle">
                   <Col className="LabelInput">Upload Logo</Col>
                </Row>
                <Row style={{ marginTop: 5 }}>
                  <Col>
                     <input type="file" id="logo" className="inputStyle"  placeholder="Des..."
                     {...register("logo")}
                     />
                  </Col>
                </Row> */}

        {/***4th***/}
        <Row className="LabelStyle">
          <Col className="LabelInput">Organization Description</Col>
        </Row>
        <Row style={{ marginTop: 5 }}>
          <Col>
            <textarea
              id="Org_Des"
              className="inputStyle "
              placeholder="Des..."
              {...register('description')}
            />
          </Col>
        </Row>

        {/***Button Field***/}
        <Row>
          <Col>
            <InputButton
              className="Create-Button"
              buttonStyle={{
                backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
                boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
                color: '#FFFFFF',
                width: 300,
                marginTop: 30,
              }}
              title=" Create"
            />
          </Col>
        </Row>
      </form>
      <button
        onClick={() => {
          debugger;
          dispatch(logout());
        }}
      >
        logout
      </button>
    </Container>
  );
}

export default CreateOrgCom;
