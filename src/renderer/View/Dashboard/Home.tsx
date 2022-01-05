import React, { useState,Component } from 'react';
// import {  TextField, IconButton } from '@material-ui/core';
import SearchBar from 'renderer/Components/SearchBar';
// import Dropdown from 'renderer/Components/DropDown';
import Icon from 'react-web-vector-icons';
import AccountCircle from '@material-ui/icons/AccountCircle'




 const Home = (props:any) => {

  const [selected, setSelected] = useState("Rehan");

  return (

       <div className="Container">
         <div style={{display:'flex',justifyContent:'space-between',flex:'10px'}}>

           <div style={{width:'10%'}}>
              <h4 style={{color:'#5A67BA',fontSize:30,fontFamily:'AntDesign'}}>Home</h4>
           </div>

           <div style={{width:'65%'}}>
              <SearchBar />
           </div>

           <div style={{width:'25%',}}>

               <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                  <div style={{}}>
                    {/* <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton> */}
                  </div>
                      {/* <Dropdown selected={selected} setSelected={setSelected} /> */}
                  <div style={{}}>
                      <Icon  name='bell' font='EvilIcons'  color='#B0C3CC'  size={32} // style={{}}
                        />
                   </div>

                 </div>
           </div>

         </div>

         <div className="sepratorRight" />
        </div>

  );
}

export default Home;
