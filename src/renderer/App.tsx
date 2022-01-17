import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AUTH, auth } from 'Types/User.types';
import './App.css';
import Auth from './View/Authentication/Auth';
import CreateOrganization from './View/CreateOrganization/createOrganization';
import CreateProject from './View/createProject/createProject';
require('react-web-vector-icons/fonts');
import Dashboard from 'renderer/View/Dashboard'
import { logout } from './Store/Actions/auth.action';

function AuthRoute({ children, ...rest }: any) {
  const user = useSelector(({ auth }: AUTH) => auth.user);
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
export default function App() {


  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        {/* <AuthRoute path="/createProject">
          <CreateProject />
        </AuthRoute> */}
        <AuthRoute path="/addmembers">
          <CreateOrganization />
        </AuthRoute>
        <AuthRoute path="/createProject">
          <CreateProject />
        </AuthRoute>
        <AuthRoute path="/dashboard">
          <Dashboard />
        </AuthRoute>
      </Switch>
    </Router>
  );
}
