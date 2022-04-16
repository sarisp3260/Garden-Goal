import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignIn />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
