import React, { useEffect, useRef,useState } from 'react';
import Icon from 'react-web-vector-icons';
import DropDownMenuSelect from 'renderer/Components/DropDownMenue';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import AvatarGroup from 'react-avatar-group';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom';

import {links,option} from './SideBarButtonsSetails'
import TimeLine from './gantt';
import Board from './Board';


function Projects({ sideBar = 'flex',...props }) {
  const [selLink,setSelLink] = useState("/board");

  const {state} = useLocation<any>();
  const {item}:any = state;
  useEffect(() => {

  },[])
  return (
    <Router>
    <div className="main-container-sub">
      {/* Project TopBar or TAbs */}
      <div className="project-topbar row-view" style={{justifyContent: 'space-between'}}>
        {/* project titl and and links would be avalible here */}
        <div className="project-title-links-bar" style={{marginLeft: sideBar == 'flex' ? 20 : 60,justifyContent: 'flex-end'}}>
          <div className="row-view jc ai" style={{marginLeft:-30}}>
            {/* Project icone , name  , status , add faviorite , list down to setup project settings */}
            <div className="project-logo">
              {/*  Project Icon */}
              <Icon font="FontAwesome" name="tasks" size={25} color="#FFFFFF" />
            </div>
            <div className="Project-title">{item.projectTitle}</div>
            <DropDownMenuSelect
              values={option}
              handleOnClick={() => {
                console.log('drop down');
              }}
            />

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Project Detail</Tooltip>}
            >
              <div
                style={{ marginLeft: 5, cursor: 'pointer' }}
                onClick={() => {}}
              >
                <Icon
                  name="exclamation"
                  font="EvilIcons"
                  color="rgb(175, 173, 173)"
                  size={20}
                />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Project Status</Tooltip>}
            >
              <div
                style={{
                  marginLeft: 5,
                  cursor: 'pointer',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
                onClick={() => {}}
              >
                <Icon name="dot-single" font="Entypo" color="green" size={25} />
                On Track
              </div>
            </OverlayTrigger>
          </div>
          {/* links */}
          <div className="row-view" style={{marginLeft: 10 }}>
            {links.map((item, index) => {
              return (
                <Link
                  to={item.to}
                  key={index * Math.random()}
                  className="btn"
                  style={{
                    color: 'black',
                    fontFamily: 'Manrope',
                    fontSize: 14,
                    borderBottomWidth: 4,
                    outline:'none',
                    borderBottomColor: 'black',
                    borderStyle: item.to==selLink ? 'solid' : 'none',
                  }}
                  onClick={()=>setSelLink(item.to)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="row-view ai jc" style={{marginRight:30}}>
            <AvatarGroup
              avatars={["James", "Amy", "Will" /* or IAvatar objects */]}
              initialCharacters={1}
              max={1}
              size={30}
              displayAllOnHover={false}
              shadow={2}
              style={{marginLeft:70}}
            />

            <div className="btn" style={{marginLeft:10,height:30,width:80,marginRight:10,alignSelf:'center',justifyContent: 'center',alignItems: 'center',display: 'flex',border:"1px solid rgb(175, 173, 173)",color:"rgb(175, 173, 173)",outline:'none'}}>
              <Icon name="plus" font="AntDesign" color="rgb(175, 173, 173)" size={20} />
              Invites
            </div>

            <div className="row-view js ai" style={{border: "1px solid rgb(175, 173, 173)",height:35,alignSelf:'center',borderRadius:10,padding:1.5}} >
              <Icon name="search" font="EvilIcons" color="rgb(175, 173, 173)" size={20} />
            <input type="text" id="" placeholder="Search" style={{borderStyle: "none",outline:"none"}} />
            </div>
            <AvatarGroup
              avatars={["James"]}
              initialCharacters={1}
              max={1}
              backgroundColor="#a12ee1"
              size={40}
              displayAllOnHover={false}
              shadow={2}

            />
         </div>
      </div>

      <div className="seprator" style={{ marginTop: 0 }} />
      <div className="main-container-project-management">
      <Switch>


        <Route  exact path="/overview">
          <h1>over View</h1>
        </Route>
        <Route path='/list' exact>
          <h1>List</h1>
        </Route>
        <Route path='/board' exact>
          <Board />
        </Route>
        <Route path='/timeline' exact>
          <TimeLine />
        </Route>
        <Route path='/clander' exact>
          <h1>CLander</h1>
        </Route>
        <Route exact render={()=>(<Redirect to="/board" />)} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default Projects;


