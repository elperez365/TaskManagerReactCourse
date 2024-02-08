import Outlet from "./components/Layouts/Outlet/Outlet";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";
import Button from "./components/Reusable/Button/Button";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
