import TabProject from "../../Reusable/TabProject/TabProject";
import { DUMMYDATA } from "../../../data/mockData";

const ProjectList = ({ children, ...props }) => {
  return (
    <ul>
      {/* section è projectlist componente padre */}
      {DUMMYDATA.map((project) => (
        <TabProject title={project.title} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectList;
