
import React,{Suspense} from 'react'
const  Icon = React.lazy(()=>import('react-web-vector-icons'));
export default function Button({
  onClick = () => {},
  iconName="google",
  font="AntDesign",
  color="#000",
  size=15,
  buttonStyle={},
  className="",
  title=" Sign with Google",
  icon=false
}: TagType) {
  return (
      <button className={`btn ButtonStyle ${className}`} style={{...buttonStyle}} onClick={onClick}>
        <span style={{marginRight: 10}}>
        {icon&&<Suspense fallback={<div>Loading...</div>}> <Icon
          name={iconName}
          color={color}
          size={size}
          font={font}
        /></Suspense>}

        </span>
       {title}

      </button>

  );
}


interface TagType{
  onClick?: () => void,
  iconName?:string,
  font?:string,
  color?:string,
  size?:number,
  buttonStyle?:any,
  className?:string,
  title?:string,
  icon:boolean
}
