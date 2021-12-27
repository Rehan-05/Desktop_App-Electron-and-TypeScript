
import './index.scss';
import logo from '../../../../assets/PA.png';

import Icon from 'react-web-vector-icons'
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import Home from './Home';
import {useDispatch } from 'react-redux';
import {logout} from 'renderer/Store/Actions/auth.action';
import MyTask from './MyTask';


export default function index() {
  const dispatch = useDispatch();
  return (
    <div className="row-view">
      <Router>
      {/* side Bar start */}
  <div className="side-left">
    <div className="row-view" style={{justifyContent: 'space-between'}}>
      {/* logo and Text */}
      <div className="row-view" style={{alignItems: 'center'}}>
       <div style={{borderRadius:"50%",background:'#5A67BA',justifyContent:'center',alignItems: 'center',height:40,width:40,display:'flex'}}>
          <img src={logo} style={{height:25,width:25}} />
        </div>

          <div className="pa-logo">
            Project Alliance
          </div>

      </div>
      {/* Sidebar closing and opening button */}
      <button style={{borderWidth:0}}>
        <Icon font="FontAwesome" name="bars" size={25} color="#5A67BA" />
      </button>

    </div>
{/* sisde Bar end  */}
<div className="seprator" />


{/* ADD LINKS TO DIFFERENT COMPONENT */}

<Link to="/home"> Home </Link>
<Link to="/mytask"> mytask </Link>
<button onClick={()=>{dispatch(logout())}}>logout</button>
  </div>


  <div className="main-container">
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route path="/mytask" component={MyTask} />

    </Switch>
  </div>
  </Router>
</div>
  )
}
