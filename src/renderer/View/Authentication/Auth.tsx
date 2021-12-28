// import path from 'path';
import { Col, Row } from 'react-bootstrap';
import {
  Route,
  MemoryRouter as Router,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';
import { AppLogo, AuthBackPic } from '../../Constant/Images';
import { Register, SignIn, ForgotPassword } from './';
import React from 'react';
import { useSelector } from 'react-redux';
import { AUTH } from 'Types/User.types';
import Loader from 'renderer/Components/Loader/Loader';

export default function Auth() {
  const user = useSelector(({ auth }: AUTH) => {
    return auth.user;
  });
  const isChecking = useSelector(({ auth }: AUTH) => {
    return auth.login?.isChecking;
  });
  const isCheckingR = useSelector(({ auth }: AUTH) => {
    return auth.register?.isChecking;
  });
  const history = useHistory();
  if (isChecking || isCheckingR) {
    return (
      <div className="Container">
        <Loader />
      </div>
    );
  }
  if (user) {
    return <Redirect to="/dashboard" />;
  }
  // if(user?.joinedOrganization){
  //   return <Redirect to="/addmembers" />;
  // }
  return (
    <div className="Container">
      <Row className="row">
        {/* Img Tag */}
        <Col className="col-5 col1 LeftSide">
          <img src={AppLogo} className="AppLogoAuth" alt="background" />
          <img className="LeftSidePic" src={AuthBackPic} alt="back" />
          <div className="copyRightText">&copy;2021, Made by Dream Lab. </div>
        </Col>
        {/* Auth Routing  */}
        <Col className="col col1">
          <Router>
            <Switch>
              <Route component={SignIn} path="/" exact />
              <Route component={Register} path="/Register" />
              <Route component={ForgotPassword} path="/ForgotPassword" />
            </Switch>
          </Router>
        </Col>
      </Row>
    </div>
  );
}
