import { HashRouter, Routes, Route } from "react-router-dom";
import { LandingAbout } from "./pages/LandingAbout.jsx";

import LogIn from "./pages/LogIn";
import PlantDetail from "./pages/PlantDetail.jsx";
import SignIn from "./pages/SignIn.jsx";

import SectionLayout from "./layouts/SectionLayout.jsx";
import { Garden } from "./components/Garden/Garden";
import Friends from './pages/Friends'

function App() {
  return (
    <div className="App w-full relative">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingAbout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignIn />} />

          {/* outlet */}
          <Route path="/game" element={<SectionLayout/>}>
            <Route path="/game/:nickname/garden" element={<Garden/>}/>
            <Route path="/game/:nickname/friends" element={<Friends/>}/>
            <Route path="/game/:nickname/collection" element={<Friends/>}/>
            <Route path="/game/:nickname/store" element={<Friends/>}/>
            <Route path="/game/:nickname/rewards" element={<Friends/>}/>
          </Route>

          <Route path="/plants/:id" element={<PlantDetail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
