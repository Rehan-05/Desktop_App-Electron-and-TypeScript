import { useState } from "react";
import Icon from 'react-web-vector-icons';

function Dropdown(props:any) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Rehan", "Azeem", "Irtaza"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {props.selected}
        <Icon  name='down' font='AntDesign'  color='#B0C3CC'  size={25} // style={{}}
        />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option,index) => (
            <div
            key={index+"-"}
              onClick={(e) => {
                props.setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
