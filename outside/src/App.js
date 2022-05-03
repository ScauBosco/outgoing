import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Waichu from "./waichu";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Home />} path="/"></Route>
        <Route element={<Home />} path="/home"></Route>
        <Route element={<Waichu />} path="/waichu"></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
