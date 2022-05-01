import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import LogIn from "./pages/LogIn";
import { Garden } from "./components/Garden/Garden";
import PlantDetail from "./pages/PlantDetail.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import SignIn from "./pages/SignIn.jsx";

// import {PlantDetail} from "./components/Garden/PlantDetail"
function App() {
  return (
    <div className="App relative">
      <HashRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/:nickname/garden" element={<Garden />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
