import Client from "../components/Client";
import Project from "../components/Project";
import AddClientModel from "../components/AddClientModel";
import AddProjectModel from "../components/AddProjectModel";

const Home = () => {
  return (
    <div className="container">
      <div className=" d-flex gap-3 mb-4">
        <AddClientModel />
        <AddProjectModel />
      </div>
      <Project />
      <hr />
      <Client />
    </div>
  );
};

export default Home;
