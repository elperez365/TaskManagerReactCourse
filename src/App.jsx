import Outlet from "./components/Layouts/Outlet/Outlet";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <h1>ciaoonwe</h1>
    </>
  );
}

export default App;
