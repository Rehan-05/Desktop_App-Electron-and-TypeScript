import { useDispatch } from 'react-redux';
import { logout } from '../../Store/Actions/auth.action';

export default function CreateProject() {
  const dispatch = useDispatch();
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}


// import { CardActionArea } from '@mui/material';
// import { IoIosAdd } from "react-icons/io";
// import { IoMdRocket } from "react-icons/io";
// import { BsFillFileEarmarkTextFill } from "react-icons/bs";

// function CreateProject() {
//   return (
//     <div className="App">
//        <div className="App-header">
//            {/* Headind Div */}

//             <div className="Heading-Dev">
//                 <div className="main-heading-dev"> <text className="main-heading">Create a new project </text></div>
//                 <div> <text className="main-heading-text">How would you like to start?</text></div>
//             </div>

//           {/* Select Project Div */}

//             <div className="Select-Div">

//                 <div className="Select-Div-Heading">
//                      <CardActionArea  style={{borderRadius: "15px",borderStyle: "solid", }}>
//                         <div className="Card-Style">
//                           <IoIosAdd  color="white" size="45" style={{marginTop:"45px"}} />
//                         </div>
//                       </CardActionArea>
//                       <div style={{marginTop:"10px"}}><text style={{fontWeight:'bold',color:"white"}}>Blank Project</text></div>
//                       <div style={{marginTop:"1px"}}><text style={{color:" #717D7E",fontSize:15}}>Start from scratch</text></div>
//                 </div>

//                 <div className="Select-Div-Heading">
//                      <CardActionArea  style={{borderRadius: "15px",borderStyle: "solid", }}>
//                         <div className="Card-Style1">
//                         <IoMdRocket  color="white" size="45" style={{marginTop:"45px"}} />
//                         </div>
//                       </CardActionArea>
//                       <div style={{marginTop:"10px"}}><text style={{fontWeight:'bold',color:"white"}}>Use a template</text></div>
//                       <div style={{marginTop:"1px"}}><text style={{color:" #717D7E",fontSize:15}}>Choose from library</text></div>
//                 </div>

//                 <div className="Select-Div-Heading">
//                      <CardActionArea style={{borderRadius: "15px",borderStyle: "solid", }}>
//                         <div className="Card-Style1">
//                           <BsFillFileEarmarkTextFill  color="white" size="45" style={{marginTop:"45px"}} />
//                         </div>
//                       </CardActionArea>
//                       <div style={{marginTop:"10px"}}><text style={{fontWeight:'bold',color:"white"}}>Import Spreedsheet</text></div>
//                       <div style={{marginTop:"1px"}}><text style={{color:" #717D7E",fontSize:15}}>Add from another tool</text></div>
//                 </div>

//             </div>

//         </div>
//     </div>
//   );
// }

// export default CreateProject;

