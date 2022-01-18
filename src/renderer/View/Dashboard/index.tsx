import './index.scss';
import logo from '../../../../assets/PA.png';

import Icon from 'react-web-vector-icons';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useParams,
} from 'react-router-dom';
import Home from './Home';
import { useDispatch } from 'react-redux';
import { logout } from 'renderer/Store/Actions/auth.action';
import MyTask from './MyTask';
import SideBarButton from 'renderer/Components/SideBarButton';
import { useEffect, useRef, useState } from 'react';
import Projects from './Projects';
import { useWindowSize  } from 'renderer/Util/useWindowSize';
import {sideBarButtons} from './SideBarButtonsSetails'


export default function index() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [color, setColor] = useState('#000');
  const [btnName, setBtnName] = useState('/');
  const [displaySlide, setDisplaySlide] = useState('flex');
  const [width, height] = useWindowSize();

  const ref = useRef();

  const handleSlide = () => {if (displaySlide == 'flex') {setDisplaySlide('none');} else {setDisplaySlide('flex')}};
  useEffect(() => {width<=1200?setDisplaySlide('none'):setDisplaySlide('flex')} , [width]);

  return (
    <div  className="row-view">
      <Router>
        {/* side Bar start */}

        {displaySlide == 'none' && (
          <button
            style={{
              borderWidth: 0,
              position: 'absolute',
              top: 25,
              left: 20,
              backgroundColor: 'transparent',
              outline: 'none',
              zIndex:100,
            }}
            onClick={handleSlide}
          >
            <Icon font="FontAwesome" name="bars" size={25} color="#5A67BA" />
          </button>
        )}
        <div style={{display: displaySlide}}    className="side-left">
          <div
            className="row-view pr-5 pl-5"
            style={{ justifyContent: 'space-between' }}
          >
            {/* logo and Text */}
            <div className="row-view " style={{ alignItems: 'center' }}>
              <div
                style={{
                  borderRadius: '50%',
                  background: '#5A67BA',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  display: 'flex',
                }}
              >
                <img src={logo} style={{ height: 25, width: 25 }} />
              </div>

              <div className="pa-logo">Project Alliance</div>
            </div>
            {/* Sidebar closing and opening button */}
            <button style={{ borderWidth: 0 }} onClick={handleSlide}>
              <Icon font="FontAwesome" name="bars" size={25} color="#5A67BA" />
            </button>
          </div>
          {/* sisde Bar end  */}
          <div className="seprator" />

          {/* ADD LINKS TO DIFFERENT COMPONENT */}
          {sideBarButtons.map((item, index) => {
           return (<>
           <SideBarButton
            icon={true}
            key={index+"__"+item.title}
            title={item.title}
            font={item.font}
            iconName={item.iconName}
            onClick={() => {
              setBtnName(item.to);
            }}
            color={btnName ==  item.to ? '#fff' : '#000'}
            btnName={btnName}
            className={btnName == item.to ? 'active-btn active-color-text' : ''}
            to={item.to}
          />
          {item?.seprator && <><h6 style={{ paddingLeft: 10 }}>others</h6>
          <div className="seprator" style={{ marginTop: -5 }} /></>}
          </>)
          })}


          <button
            onClick={() => {
              dispatch(logout());
            }}>
            logout
          </button>
        </div>

        <div className="main-container" style={{width:displaySlide=="none"?"100%":"75%"}}>
          <Switch>

            <Route path="/mytask" component={MyTask}  />
            <Route path="/Projects"  >
              <Projects ParentHistory={history} sideBar={displaySlide} />
              </Route>

            <Route  exact>
            <Home ParentHistory={history} sideBar={displaySlide} />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}
