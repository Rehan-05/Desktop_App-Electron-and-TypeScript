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
// import { Link } from 'react-router-dom';
// import Button from 'renderer/Components/Button';
import InputButton from 'renderer/Components/InputButton';
import {useHistory} from 'react-router-dom';
import { useForm ,Controller,SubmitHandler} from "react-hook-form";
import {IFormInput,
  AUTH
} from '../../../Types/User.types';



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
