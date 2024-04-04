import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import Login from "./components/Login/Login.jsx";
import { User } from "./components/DashBoard/User/User.jsx";
import { TestRouter } from "./TestRouter.jsx";

function App() {
  return (
    <>
      <TestRouter />
    </>
  );
}

export default App;
