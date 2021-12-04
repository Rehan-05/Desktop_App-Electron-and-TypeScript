import React from 'react';
import './createOrganization.scss';
import { CardActionArea } from '@mui/material';
import {
  Route,
  MemoryRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Mark } from '../../Constant/Images';
import { Col, Row } from 'react-bootstrap';

import CreateOrganizationCom from 'renderer/View/CreateOrganization/CreateOrganizationCom';
import  AddMembers  from './AddMembers';





function App() {



  return (
        <div className="Container">
            <Row className="row">

               <Col className="col col1">
                <Router>
                    <Switch>
                      <Route component={CreateOrganizationCom} path="/" exact />
                    </Switch>
                    <Switch>
                      <Route component={AddMembers} path="/addmembers" exact />
                    </Switch>
                  </Router>
               </Col>

               <Col className="col-5 col1 LeftSide">
                   <img className="RightSidePic" src={Mark} alt="back" />
              </Col>

            </Row>
        </div>

  );
}

export default App;
