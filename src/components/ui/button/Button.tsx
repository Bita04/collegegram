type buttonTypes = "button" | "reset" | "submit";
type Props = {
  className?: string;
  type: buttonTypes;
  children: React.ReactNode;
};

function ButtonText(props: Props) {
  return (
    <button type={props.type} className={props.className}>
      {props.children}
    </button>
  );
}

export default ButtonText;
