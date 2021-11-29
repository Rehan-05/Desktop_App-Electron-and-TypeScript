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
<<<<<<< HEAD
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
=======
  const user=useSelector(({auth}:AUTH)=>{ return auth.user})
  const isChecking=useSelector(({auth}:AUTH)=>{return (auth.login?.isChecking)})
  const isCheckingR=useSelector(({auth}:AUTH)=>{return (auth.register?.isChecking)})

  if(isChecking||isCheckingR) {
    return (<div className="Container">
      <Loader />
    </div>)
>>>>>>> 32b2eca9c2190dc9ce3c7ea7192beaa000e04582
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
