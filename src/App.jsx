import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view" element={<View />} />
    </Routes>
  );
}
