// import path from 'path';
import { Col, Row } from 'react-bootstrap';

import {
  Route,
  MemoryRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { AppLogo, AuthBackPic } from '../../Constant/Images';
import { Register, SignIn, ForgotPassword } from '.';
import React from 'react';
import { useSelector } from 'react-redux';
import { AUTH } from 'Types/User.types';
import Loader from 'renderer/Components/Loader';

export default function Auth() {
  const user = useSelector(({ auth }: AUTH) => {
    return auth.user;
  });
  const isChecking = useSelector(({ auth }: AUTH) => {
    return auth.login?.isChecking || auth.register?.isChecking;
  });

  React.useEffect(() => {
    console.log('error' + isChecking);
  }, [isChecking]);
  if (isChecking) {
    return (
      <div className="Container">
        <Loader />
      </div>
    );
  }

  if (user) {
    return <Redirect to="/createProject" />;
  }
  return (
    <div className="Container">
      <Row className="row">
        {/* Img Tag */}
        <Col className="col-5 col1 LeftSide">
          <img src={AppLogo} className="AppLogoAuth" />
          <img className="LeftSidePic" src={AuthBackPic} />
          <div className="copyRightText">&copy;2021, Made by Dream Lab. </div>
        </Col>
        {/* Auth Routing  */}
        <Col className="col col1 right-col">
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
