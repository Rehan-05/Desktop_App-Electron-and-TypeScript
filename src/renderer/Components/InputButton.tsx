export default function InputButton({
  buttonStyle = {},
  className = '',
  title = ' Sign with Google',
  type = 'submit',
  disabled=false,
}: TagType) {
  return (
    <input
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
  disabled?:boolean,
  type?: string;
}
