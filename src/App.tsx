import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upcoming from "./pages/Upcoming/Upcoming";
import Results from "./pages/Results/Results";
import Politics from "./pages/Politics/Politics";
import Sports from "./pages/Sports/Sports";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import EthereumBetting from "./components/bettingPanel/bettingPanel";
import Admin from "./Admin/Admin.";
import Home from "./pages/HomePage/home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/bet" element={<EthereumBetting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
