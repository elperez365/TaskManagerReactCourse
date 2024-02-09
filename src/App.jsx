import Outlet from "./components/Layouts/Outlet/Outlet";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="interface">
        <section className="sidenav">
          <Sidebar />
        </section>
        <Outlet />
      </div>
    </>
  );
}

export default App;
