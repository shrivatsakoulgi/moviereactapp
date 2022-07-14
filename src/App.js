import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddMovie from "./pages/AddMovie";
import Favorites from "./pages/Favorites";
import WebsiteNavigation from "./components/layout/WebsiteNavigation";
function App() {
  return (
    <div>
      <WebsiteNavigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<AddMovie />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
export default App;
