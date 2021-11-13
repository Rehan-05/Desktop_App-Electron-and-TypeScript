import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './View/Authentication/Auth';
require('react-web-vector-icons/fonts');


export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Auth} exact={true} />
      </Switch>
    </Router>
  );
}
