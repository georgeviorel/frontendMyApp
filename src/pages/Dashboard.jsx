import MainLayout from "../layouts/MainLayout";
import "../styles/Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {

    const { profile } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <MainLayout>

            <div className="dashboard">

                <h1 className="dashboard-title">
                    Salut, {profile?.username || "Utilizator"}
                </h1>

                <div className="dashboard-grid">

                    <DashboardCard
                        icon="👤"
                        title="Profil"
                        description="Vezi informațiile contului tău."
                        onClick={() => navigate("/profile")}
                    />

                    <DashboardCard
                        icon="⚙️"
                        title="Setări"
                        description="Configurează aplicația."
                        onClick={() => navigate("/settings")}
                    />

                    <DashboardCard
                        icon="✅"
                        title="Task-uri"
                        description="Funcționalitate viitoare."
                    />

                    <DashboardCard
                        icon="📊"
                        title="Statistici"
                        description="Statisticile tale."
                        onClick={() => navigate("/statistics")}
                    />

                </div>

            </div>

        </MainLayout>
    );
}

export default Dashboard;