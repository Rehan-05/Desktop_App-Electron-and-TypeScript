export default function InputButton({
  buttonStyle = {},
  className = '',
  title = ' Sign with Google',
  type = 'submit',
}: TagType) {
  return (
    <input
      type={type}
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

  type?: string;
}
