import React, { useState, Component } from 'react';
import { TextField, IconButton } from '@mui/material';
// import SearchBar from 'renderer/Components/SearchBar';
import Dropdown from 'renderer/Components/DropDown';
import Icon from 'react-web-vector-icons';
import AccountCircle from '@mui/material/Icon';
import { relative } from 'path/posix';
import AvatarGroup from 'react-avatar-group';
import { Profile } from '../../Constant/Images';
import InputButton from 'renderer/Components/InputButton';
import DropDownMenuSelect from 'renderer/Components/DropDownMenue';
import { option } from './SideBarButtonsSetails';
// import SearchBar from 'renderer/Components/SearchBar';
import { projects } from './SideBarButtonsSetails';
import { useHistory } from 'react-router-dom';
import {ProjectCollabrator} from './SideBarButtonsSetails'

const Home = (props: any) => {
  const [selected, setSelected] = useState('Rehan');
  let history = useHistory();

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <div className="main-container-sub-Home">
        {/*  Top Header  */}
        <div
          className="Home-topbar"
          style={{
            display: 'flex',
            marginLeft: props?.sideBar == 'flex' ? 20 : 60,
            justifyContent: 'space-between',
          }}
        >
          <div className="Home-title">
            <h4
              style={{
                color: '#5A67BA',
                fontSize: 30,
                fontFamily: 'AntDesign',
              }}
            >
              Home
            </h4>
          </div>
          <div style={{ width: '50%', marginTop: '22px' }}>
            {/* <SearchBar /> */}
          </div>
          <div style={{ width: '40%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '7px',
              }}
            >
              <div style={{ marginLeft: 30, marginTop: '7px' }}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div style={{ marginTop: '5px' }}>
                <Dropdown selected={selected} setSelected={setSelected} />
              </div>

              <div
                style={{
                  marginTop: '5px',
                  marginLeft: '10px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div className="Bell-icon">
                  <Icon
                    name="bell"
                    font="EvilIcons"
                    color="#B0C3CC"
                    size={32}
                  />
                </div>
                <div
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: 4,
                    backgroundColor: 'red',
                    marginTop: 12,
                    position: 'relative',
                    marginLeft: '17px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Used for separate Upper Header  */}
        <div className="sepratorRight" />
        {/* Middile Headings  */}
        <div className="Top-Heading">
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '24px',
              fontStyle: 'normal',
            }}
          >
            <h4>Sunday, December 26</h4>
          </div>
          <div
            style={{
              fontFamily: 'Poppins',
              fontSize: '36px',
              fontStyle: 'medium',
              marginTop: '10px',
            }}
          >
            <h1>Good Evening Rehan</h1>
          </div>

          <div className="Top-Team_Detail">
            <div
              style={{ width: '30%', display: 'flex', flexDirection: 'row' }}
            >
              <div style={{ fontFamily: 'inherit', fontStyle: 'normal' }}>
                This Week
              </div>
              <div style={{ marginLeft: '45px' }}>
                <DropDownMenuSelect
                  values={option}
                  handleOnClick={() => {
                    console.log('drop down');
                  }}
                />
              </div>
            </div>

            <div className="sepratorNew" />

            <div
              style={{ width: '38%', display: 'flex', flexDirection: 'row' }}
            >
              <div style={{ marginLeft: '7px' }}>
                <Icon name="check" font="FontAwesome" color="black" size={25} />
              </div>
              <div
                style={{
                  marginLeft: '7px',
                  fontSize: '16px',
                  marginTop: '6px',
                }}
              >
                12 Task Completed
              </div>
            </div>

            <div className="sepratorNew" />

            <div
              style={{
                width: '32%',
                display: 'flex',
                flexDirection: 'row',
                marginTop: '6px',
              }}
            >
              <div style={{ marginLeft: '7px' }}>
                <Icon
                  name="person-outline"
                  font="MaterialIcons"
                  color="black"
                  size={25}
                />
              </div>
              <div
                style={{
                  marginLeft: '7px',
                  fontSize: '16px',
                  marginTop: '8px',
                }}
              >
                10 Collaborators
              </div>
            </div>
          </div>
        </div>

        {/* Left Phase User Info  */}

        <div className="Project-Phase">
          <div className="Divide-Phase">
            <div className="Top-Divide-Phase">
              <div className="Avatar-Div">
                <AvatarGroup
                  avatars={['Rehan']}
                  initialCharacters={1}
                  max={1}
                  backgroundColor="#a12ee1"
                  size={40}
                  displayAllOnHover={false}
                  shadow={2}
                />
              </div>
              <div className="Avatar-Name-Icon">
                <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                  <h6 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Rehan Asghar
                  </h6>
                </div>
                <div style={{ marginLeft: '10px', marginTop: '8px' }}>
                  <Icon name="user" font="Entypo" color="black" size={18} />
                </div>
              </div>
            </div>
          </div>
          {/* Right Phase Create Project Phase  */}
          <div className="Divide-Phase">
            <div className="Top-Left-Divide-Phase">
              <div style={{ marginTop: 15, marginLeft: '25px' }}>
                <h4 style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  Projects
                </h4>
              </div>
              <div
                style={{
                  marginLeft: '25px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div>
                  <h4
                    style={{
                      marginTop: 20,
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: '#B5B2B2',
                    }}
                  >
                    Recent
                  </h4>
                </div>
                <div style={{ marginTop: 16, marginLeft: '15px' }}>
                  <DropDownMenuSelect
                    values={option}
                    handleOnClick={() => {
                      console.log('drop down');
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="sepratorRight" />
            {/* Projects List */}
            <div
              style={{
                height: '300px',
                width: '100%',
                overflow: 'hidden',
                overflowY: 'scroll',
                paddingBottom: 50,
              }}
            >
              <button
                onClick={() => {
                  props.ParentHistory.push('/createOrganization');
                }}
                className="Create-Project-Div"
              >
                <div className="Left-Create-Project">
                  <Icon
                    name="plus"
                    font="AntDesign"
                    color="#898686"
                    size={25}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '20px',
                  }}
                >
                  <h4 style={{ fontSize: '20px', color: '#898686' }}>
                    Create Project
                  </h4>
                </div>
              </button>
              {/* list */}
              {projects.map((item, index) => {
                return (
                  <button
                    key={item.projectTitle + ' ' + index}
                    className="Create-Project-Div"
                    onClick={()=>{
                      // alert("ok")
                      debugger;
                      console.log("clicked")
                      history.push({pathname:'/Projects',state:{item}});
                    }}
                  >
                    <div className="Left-Create-Project">
                      <Icon
                        name={item.pIconName}
                        font="AntDesign"
                        color="#898686"
                        size={25}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '20px',
                      }}
                    >
                      <h4 style={{ fontSize: '20px', color: '#898686' }}>
                        {item.projectTitle}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="People-project-Div">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                margin: '20px 0px  0px 40px',
                fontSize: '25px',
                fontWeight: 'bold',
              }}
            >
              People
            </div>

            <div
              style={{
                marginLeft: '25px',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div>
                <h4
                  style={{
                    marginTop: 33,
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#B5B2B2',
                  }}
                >
                  Frequent Collaborator
                </h4>
              </div>
              <div style={{ marginTop: 27, marginLeft: '15px' }}>
                <DropDownMenuSelect
                  values={option}
                  handleOnClick={() => {
                    console.log('drop down');
                  }}
                />
              </div>
            </div>
          </div>

          <div className="People-project">
            <div className="people-div">
              <div className="people-inner-div">
              <div style={{ marginBottom: '10px',textAlign:'center'}} className="Profile-Image-icon" >
                <Icon name="addusergroup" font="AntDesign" size={25} color="#000" />
                </div>
                <div
                  style={{
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                  }}
                >
                  Invites
                </div>
                <div style={{ fontSize: '14px', fontFamily: 'Poppins',textAlign: 'center' }}>
                  Invites your team Members and add them into project.
                </div>

                <div className="View-Profile-Button">
                  <InputButton
                    className="View-Button"
                    buttonStyle={{}}
                    onClick={()=>{props.ParentHistory.push('/addmembers')}}
                    title=" Add Members"
                  />
                </div>
              </div>
            </div>

            {ProjectCollabrator.map((item,index)=>{
              return(
              <div key={index+""+item.name} className="people-div">
              <div className="people-inner-div">
                <div style={{ marginBottom: '10px' }}>
                  <img className="Profile-Image" src={Profile} alt="back" />
                </div>
                <div
                  style={{
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                  }}
                >
                  {item.name}
                </div>
                <div style={{ fontSize: '14px', fontFamily: 'Poppins' }}>
                  {item.description}
                </div>

                <div className="View-Profile-Button">
                  <InputButton
                    className="View-Button"
                    buttonStyle={{}}
                    title=" View Profile"
                  />
                </div>
              </div>
            </div>)
            })}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
