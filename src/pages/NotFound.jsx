import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column bg-dark justify-content-center align-items-center"
      style={{ height: "91.2vh", color: "white" }}>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <FaExclamationTriangle className="text-danger" size="5em" />
        <h1>404</h1>
        <p className="lead">You are lost back to home</p>
        <Link to="/" className="btn btn-primary">
          Back to Home'"
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
