import Outlet from "./components/Layouts/Outlet/Outlet";
import ProjectList from "./components/Layouts/ProjectList/ProjectList";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";
import TabProject from "./components/Reusable/TabProject/TabProject";

function App() {
  return (
    <>
      <div className="interface">
        <section className="sidenav">
          <Sidebar>
            <ProjectList />
          </Sidebar>
        </section>
        <Outlet />
      </div>
    </>
  );
}

export default App;
