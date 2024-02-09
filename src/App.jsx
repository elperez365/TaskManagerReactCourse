import { useState } from "react";
import Outlet from "./components/Layouts/Outlet/Outlet";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";

import { DUMMYDATA } from "./data/mockData";

function App() {
  const [store, setStore] = useState({
    data: DUMMYDATA,
    selectedProject: DUMMYDATA[0],
    isStart: "started",
  });

  const projectTasks = store.selectedProject?.tasks;
  return (
    <>
      <div className="interface">
        <section className="sidenav">
          <Sidebar store={[store, setStore]} />
        </section>
        <Outlet projectTasks={projectTasks} store={[store, setStore]} />
      </div>
    </>
  );
}

export default App;
