export default function InputButton({
  buttonStyle = {},
  className = '',
  title = ' Sign with Google',
  type = 'submit',
  disabled=false,
  onClick=()=>{},
}: TagType) {
  return (
    <input
    onClick={onClick}
      type={type}
      disabled={disabled}
      className={`btn ButtonStyle ${className}`}
      style={{ ...buttonStyle }}
      name="submit"
      value={title}
    />
  );
}

interface TagType {
  buttonStyle?: any;
  className?: string;
  title?: string;
  disabled?:boolean;
  type?: string;
  onClick?:()=>void;
}
