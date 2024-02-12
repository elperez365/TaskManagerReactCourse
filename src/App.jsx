import { useState } from "react";
import Outlet from "./components/Layouts/Outlet/Outlet";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";

import { DUMMYDATA } from "./data/mockData";

function App() {
  const [store, setStore] = useState({
    data: DUMMYDATA,
    selectedProject: null,
    isStart: "started",
  });

  return (
    <>
      <div className="interface">
        <section className="sidenav">
          <Sidebar store={[store, setStore]} />
        </section>
        <Outlet store={[store, setStore]} />
      </div>
    </>
  );
}

export default App;
