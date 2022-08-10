import "./App.scss";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router basename="/safari-pay">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
