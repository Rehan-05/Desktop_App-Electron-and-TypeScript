import Api from "renderer/Api/auth.api";
import {useSelector} from "react-redux"
import { AUTH } from "Types/User.types";

const getProjects=(company:string,accessToken:string) =>(dispatch:any)=>{
      dispatch({type:"GET_PROJECTS_INIT"})

      Api.GetProjects(company,accessToken).then(data=>{
        if(data?.data?.status==200)
        {
          dispatch({type:"GET_PROJECTS_SUCCESS",projects:data.data})
        }
        else{
          dispatch({type:"GET_PROJECTS_ERROR",error:data?.data})
        }
      })
      .catch(error=>{
        dispatch({type:"GET_PROJECTS_ERROR",error:error.response?.data})
      })
}

const CreateProjects=(Data:any,accessToken:string)=>(dispatch: any)=>{
    dispatch({type:"ADD_PROJECT_INIT"})

    Api.CreateProject(Data,accessToken).then(data=>{
      if(data?.data?.status==200)
      {
        dispatch({type:"ADD_PROJECT_SUCCESS"})
      }
      else{
        dispatch({type:"ADD_PROJECT_ERROR",error:data?.data})
      }
    }).catch(error=>{
      dispatch({type:"ADD_PROJECT_ERROR",error:error.response?.data})
    })
}

export {
  getProjects,
  CreateProjects
}
