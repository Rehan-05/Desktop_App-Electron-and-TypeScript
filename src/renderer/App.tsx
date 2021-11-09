import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './View/Authentication/SignIn';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignIn} />
      </Switch>
    </Router>
  );
}
