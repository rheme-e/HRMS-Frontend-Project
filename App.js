import './App.css';
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./dashboards/MainDashboard";
import SignInDashboard from "./dashboards/SignInDashboard";
import JobAdvertisementDashboard from "./dashboards/JobAdvertisementDashboard";
import ProfilDashboard from "./dashboards/ProfilDashboard";
import Navi from "./layouts/Navi";
import Cv from "./pages/Cv";

function App() {
    return (
        <div>
            <Navi />
            <Routes>
                <Route path="/" element={<MainDashboard />} />
                <Route path="/sign-in" element={<SignInDashboard />} />
                <Route path="/job-dashboard" element={<JobAdvertisementDashboard />} />
                <Route path="/job-dashboard/:id" element={<JobAdvertisementDashboard />} />
                <Route path="/profil-dashboard" element={<ProfilDashboard />} />
                <Route path="/profil-dashboard/:id" element={<ProfilDashboard />} />
                <Route path="/cv" element={<Cv />} />

            </Routes>
        </div>
    );
}

export default App;
