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
import CreateOrganizationCom from 'renderer/View/CreateOrganization/CreateOrganizationCom';
import {IFormInput,
  AUTH
} from '../../../Types/User.types';
import { useSelector } from 'react-redux';
import Loader from 'renderer/Components/Loader/Loader';




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
