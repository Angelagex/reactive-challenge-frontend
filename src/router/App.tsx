import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import LoginPage from "../pages/LoginPage";
import ProvidersPage from "../pages/ProvidersPage";
import ReceiptsPage from "../pages/ReceiptsPage";
import SingUpPage from "../pages/SignUpPage";
import StockPage from "../pages/StockPage";
import { RootState } from "../state/Store";
import "../styles/App.css";

function App() {
  const logged: boolean = useSelector((state: RootState) => state.login.logged);

  const content = () => {};
  return (
    <div className="App">
      <AppNavbar />
      {logged ? (
        <Routes>
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/receipts" element={<ReceiptsPage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="*" element={<ProvidersPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singUp" element={<SingUpPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
