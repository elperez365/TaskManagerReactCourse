import { useState } from "react";
import Outlet from "./components/Layouts/Outlet/Outlet";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";
import { DUMMYDATA } from "./data/mockData";

function App() {
  const [store, setstore] = useState({
    data: DUMMYDATA,
    isStart: "started",
    projectSelected: null,
  });

  console.log(store);
  return (
    <>
      <div className="interface">
        <section className="sidenav">
          <Sidebar store={[store, setstore]} />
        </section>
        <Outlet store={[store, setstore]} />
      </div>
    </>
  );
}

export default App;
