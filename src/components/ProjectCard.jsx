import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6 ">
      <div className="card mb-3">
        <div className="card-body bg-dark text-white rounded">
          <div className="d-flex justify-content-between align-items-center ">
            <h5 className="car-title">{project.name}</h5>
            <Link to={`/project/${project.id}`} className="btn btn-primary">
              View
            </Link>
            <p className="small">
              Status: <strong>{project.status}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
