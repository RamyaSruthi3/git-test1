import { Link } from "react-router-dom";


const NavigationLink = (props) => {
  return (
    <Link
      onClick={props.onClick}
      className="nav-link"
      to={props.to}
    >
      {props.text}
    </Link>
  );
};

export default NavigationLink;
