type buttonTypes = "button" | "reset" | "submit";
type Props = {
  className?: string;
  type: buttonTypes;
  children: React.ReactNode;
  onClick: () => void;
};

function ButtonText({className, type, children, onClick}: Props) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}

export default ButtonText;
