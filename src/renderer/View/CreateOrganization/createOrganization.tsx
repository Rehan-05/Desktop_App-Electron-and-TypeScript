import React from 'react';
import './createOrganization.scss';
import { CardActionArea } from '@mui/material';
import {
  Route,
  MemoryRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Mark,line } from '../../Constant/Images';
import { Col, Row } from 'react-bootstrap';
import CreateOrganizationCom from '../../../../src/renderer/Components/CreateOrganizationCom';


function App() {


  return (
        <div className="Container">
            <Row className="row">

               <Col className="col-7 col1 App-Left">
                <Router>
                    <Switch>
                      <Route component={CreateOrganizationCom} path="/" exact />
                    </Switch>
                  </Router>
               </Col>

               <Col className="col col1 App-Right">
                   <img className="RightSidePic" src={Mark} alt="back" />
              </Col>

            </Row>
        </div>

  );
}

export default App;
