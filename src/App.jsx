import Outlet from "./components/Layouts/Outlet/Outlet";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
