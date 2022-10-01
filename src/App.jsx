import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import {LandingAbout} from "./pages/LandingAbout";

import LogIn from "./pages/LogIn";
import PlantDetail from "./pages/PlantDetail.jsx";
import SignIn from "./pages/SignIn.jsx";

import SectionLayout from "./layouts/SectionLayout.jsx";
import { Garden } from "./pages/Garden";
import Friends from './pages/Friends'
import Collections from "./pages/Collections";
import Store from "./pages/Store";
import Profile from "./pages/Profile"

function App() {
  return (
    <div className="App w-full relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<LandingAbout/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignIn />} />

          {/* outlet */}
          <Route path="/game" element={<SectionLayout/>}>
            <Route path="/game/:nickname/garden" element={<Garden/>}/>
            <Route path="/game/:nickname/friends" element={<Friends/>}/>
            <Route path="/game/:nickname/collection" element={<Collections/>}/>
            <Route path="/game/:nickname/store" element={<Store/>}/>
            <Route path="/game/:nickname/rewards" element={<Friends/>}/>
            <Route path="/game/:nickname/profile" element={<Profile/>}/>
            <Route path="/game/instructions/" element={<Profile/>}/>
          </Route>

          <Route path="/plants/:id" element={<PlantDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
