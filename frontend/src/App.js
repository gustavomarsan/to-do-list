import Login from "./auth/Login";
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
      </Routes>
    </Router>
  );
}

export default App;
