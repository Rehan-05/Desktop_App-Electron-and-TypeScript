import getData from '../../Api/auth.api';
import {IFormInput} from '../../../Types/User.types'

const signin=(Data:IFormInput)=> (dispatch: any)=>{

  dispatch({type:"AUTH_LOGIN_INIT"})

   getData.SignIn({
    username: Data.userName,
    password: Data.password,
  }).then(data=>{

    dispatch({type:"AUTH_LOGIN_SUCCESS",user:{...data.data,status:data.status,isLoggedIn: true, }})
    localStorage.setItem('User',JSON.stringify({...data.data,status:data.status,isLoggedIn: true, }))
    return data;
  })
  .catch((err)=>
    {

  dispatch({type:"AUTH_LOGIN_ERROR",error:err.response.data})
  return err.response.data;
})

}

const register=(Data:IFormInput)=> (dispatch: any)=>{

  dispatch({type:"AUTH_REGISTER_INIT"})

   getData.Register({
    username: Data.userName,
    password: Data.password,
    email:Data.email,
    name:Data.name,
    phone:Data.phone,
    company:Data.company,
  }).then(data=>{
        dispatch({type:"AUTH_REGISTER_SUCCESS"})
    dispatch(signin(Data))
    return data;
  })
  .catch((err)=>
    {

  dispatch({type:"AUTH_REGISTER_ERROR",error:err.response.data})})
}

const logout=()=> (dispatch: any)=>{

  localStorage.removeItem('User');
    dispatch({type:"AUTH_LOGOUT_SUCCESS"})
  }


export {
  signin,
  register,
  logout
}
