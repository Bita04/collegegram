type buttonTypes = "button" | "reset" | "submit";
type Props = {
  className?: string;
  type: buttonTypes;
  children: React.ReactNode;
};

function ButtonText({className, type, children}: Props) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default ButtonText;
