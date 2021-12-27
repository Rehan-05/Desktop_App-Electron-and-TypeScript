
import React,{Suspense, useState} from 'react'
import { Link } from 'react-router-dom';
const  Icon = React.lazy(()=>import('react-web-vector-icons'));
export default function SideBarButton({
  to = "/",
  iconName="home",
  font="AntDesign",
  color="#000",
  size=20,
  buttonStyle={},
  className="",
  title="Home",
  icon=false, IconStyle={},
  btnName="",
  onClick=()=>{},

}: TagType) {
  return (
      <Link onClick={onClick}  className={`side-bar-btn side-bar-btn-text ${className}`} style={{...buttonStyle}} to={to}>
        <span style={{marginRight: 10}}>
        {icon&&<Suspense fallback={<div>Loading...</div>}> <Icon
          name={iconName}
          color={btnName==to?color:'#000000'}
          size={size}
          font={font}
          style={IconStyle}

        /></Suspense>}

        </span>
       {title}

      </Link>

  );
}


interface TagType{
  to:string,
  iconName?:string,
  font?:string,
  color?:string,
  size?:number,
  buttonStyle?:any,
  className?:string,
  title?:string,
  icon:boolean
  IconStyle?:{}
  onClick?:()=>void,

  btnName:string
}
