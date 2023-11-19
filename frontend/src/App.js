import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Todos from "./todos/Todos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <header>
        The TODO App
      </header>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
