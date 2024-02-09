import TabProject from "../../Reusable/TabProject/TabProject";
import { DUMMYDATA } from "../../../data/mockData";

const ProjectList = (props) => {
  const [store, setStore] = props.store;
  return (
    <ul>
      {/* section è projectlist componente padre */}
      {store.data.map((project) => (
        <TabProject setStore={setStore} project={project} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectList;
