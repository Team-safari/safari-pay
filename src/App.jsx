import "./App.scss";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <Router basename="/safari-pay">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buy" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
