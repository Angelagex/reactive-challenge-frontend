import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import ProvidersPage from "../pages/ProvidersPage";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<ProvidersPage />} />
      </Routes>
    </div>
  );
}

export default App;
