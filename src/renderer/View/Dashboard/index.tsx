
import './index.scss';
import logo from '../../../../assets/PA.png';

import Icon from 'react-web-vector-icons'
import { BrowserRouter as Router,Link,Route,Switch,useHistory,useParams } from 'react-router-dom';
import Home from './Home';
import {useDispatch } from 'react-redux';
import {logout} from 'renderer/Store/Actions/auth.action';
import MyTask from './MyTask';
import SideBarButton from 'renderer/Components/SideBarButton';
import { useState } from 'react';
import Projects from './Projects';


export default function index() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [color,setColor] = useState('#000');
  const [btnName,setBtnName] = useState('/home');
  const [displaySlide,setDisplaySlide] = useState('flex');

  const handleSlide=()=>{
    if(displaySlide=='flex'){
      setDisplaySlide('none');
    }else{
      setDisplaySlide('flex');
    }
  }


  return (
    <div className="row-view">
      <Router>
      {/* side Bar start */}
      {displaySlide=="none"&&<button style={{borderWidth:0 , position:'absolute',top:10,left:20,backgroundColor:"transparent"}}  onClick={handleSlide}>
        <Icon font="FontAwesome" name="bars" size={25} color="#5A67BA"  />
      </button>}
  <div className="side-left" style={{display: displaySlide}}>
    <div className="row-view pr-5 pl-5" style={{justifyContent: 'space-between'}}>
      {/* logo and Text */}
      <div className="row-view " style={{alignItems: 'center'}}>
       <div style={{borderRadius:"50%",background:'#5A67BA',justifyContent:'center',alignItems: 'center',height:40,width:40,display:'flex'}}>
          <img src={logo} style={{height:25,width:25}} />
        </div>

          <div className="pa-logo">
            Project Alliance
          </div>

      </div>
      {/* Sidebar closing and opening button */}
      <button style={{borderWidth:0}} onClick={handleSlide}>
        <Icon font="FontAwesome" name="bars" size={25} color="#5A67BA"  />
      </button>

    </div>
{/* sisde Bar end  */}
<div className="seprator" />


{/* ADD LINKS TO DIFFERENT COMPONENT */}

<SideBarButton icon={true} title="Home" font="AntDesign" iconName="home"
onClick={()=>{setBtnName('/home')}}
color={btnName=='/home'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/home'?'active-btn active-color-text':''}
 to="/home"
 />
<SideBarButton icon={true} title="My Task" font="FontAwesome" iconName="tasks"
onClick={()=>{setBtnName('/mytask')}}
color={btnName=='/mytask'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/mytask'?'active-btn active-color-text':''}
 to="/mytask"
 />
 <SideBarButton icon={true} title="Reporting" font="Entypo" iconName="line-graph"
onClick={()=>{setBtnName('/reporting')}}
color={btnName=='/reporting'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/reporting'?'active-btn active-color-text':''}
 to="/reporting"
 />
 <SideBarButton icon={true} title="Inbox" font="AntDesign" iconName="message1"
onClick={()=>{setBtnName('/inbox')}}
color={btnName=='/inbox'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/inbox'?'active-btn active-color-text':''}
 to="/inbox"
 />
 <SideBarButton icon={true} title="Goals" font="Entypo" iconName="bar-graph"
onClick={()=>{setBtnName('/goals')}}
color={btnName=='/goals'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/goals'?'active-btn active-color-text':''}
 to="/goals"
 />

 <h6 style={{paddingLeft:10}}>
   others
 </h6>
 <div className="seprator" style={{marginTop:-5}}/>


 <SideBarButton icon={true} title="Account" font="MaterialCommunityIcons" iconName="account-outline"
onClick={()=>{setBtnName('/account')}}
color={btnName=='/account'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/account'?'active-btn active-color-text':''}
 to="/account"
 />


<SideBarButton icon={true} title="Invite Teammates" font="AntDesign" iconName="addusergroup"
onClick={()=>{setBtnName('/invites')}}
color={btnName=='/invites'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/invites'?'active-btn active-color-text':''}
 to="/invites"
 />


<SideBarButton icon={true} title="Settings" font="AntDesign" iconName="setting"
onClick={()=>{setBtnName('/settings')}}
color={btnName=='/settings'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/settings'?'active-btn active-color-text':''}
to="/settings"
/>

<SideBarButton icon={true} title="Help" font="Ionicons" iconName="ios-help-circle-outline"
onClick={()=>{setBtnName('/help')}}
color={btnName=='/help'?'#fff':'#000'}
btnName={btnName}
className={btnName=='/help'?'active-btn active-color-text':''}
to="/help"
/>




<button onClick={()=>{dispatch(logout())}}>logout</button>
  </div>


  <div className="main-container">
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route path="/mytask" component={MyTask} />
      <Route path="/inbox" component={Projects} />
    </Switch>
  </div>
  </Router>
</div>
  )
}
