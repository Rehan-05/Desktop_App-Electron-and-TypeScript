import { Link } from 'react-router-dom';
import Icon from 'react-web-vector-icons';
export default function NeedAccount({
  to = '/Register',
  text1 = 'New User?',
  text2 = ' Need An Account',
  onClick = () => {},
  iconName="dots-three-horizontal",
  font="Entypo",
  color="#C0BDCC",
  size=15,
}: TagType) {
  return (
    <div className="RegisterTag">
      {text1}
      <Link to={to} className="RegisterLink">
        {text2}
      </Link>
      <button className="btnCircle" onClick={onClick}>
        <Icon
          name={iconName}
          color={color}
          size={size}
          font={font}

          // style={{}}
        />
      </button>
    </div>
  );
}


interface TagType{
  to?:string,
  text1?:string,
  text2?:string,
  onClick?: () => void,
  iconName?:string,
  font?:string,
  color?:string,
  size?:number,
}
