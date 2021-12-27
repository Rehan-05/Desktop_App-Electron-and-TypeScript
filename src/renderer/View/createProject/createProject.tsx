import { useDispatch } from "react-redux";
import { logout } from "../../Store/Actions/auth.action";


export default function CreateProject() {
const dispatch = useDispatch();
  return (
  <div
  style={{ height:'100vh',width:'100%'}}
  >
    <button
    onClick={()=>{
      dispatch(logout())
    }}

    >
Logout
    </button>
  </div>
  )
}

