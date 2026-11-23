import MainLayout from "../layouts/MainLayout";
import "../styles/Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {

    const { profile } = useContext(AuthContext);

    return (
        <MainLayout>

            <div className="dashboard">

                <h1 className="dashboard-title">
                    Salut, {profile?.username || "Utilizator"}
                </h1>

                <div className="dashboard-grid">

                    <div className="dashboard-card">
                        <h3>👤 Profil</h3>

                        <p>
                            Vezi informațiile contului tău.
                        </p>
                    </div>

                    <div className="dashboard-card">
                        <h3>⚙️ Setări</h3>

                        <p>
                            Configurează aplicația.
                        </p>
                    </div>

                    <div className="dashboard-card">
                        <h3>✅ Task-uri</h3>

                        <p>
                            Funcționalitate viitoare.
                        </p>
                    </div>

                    <div className="dashboard-card">
                        <h3>📊 Statistici</h3>

                        <p>
                            Funcționalitate viitoare.
                        </p>
                    </div>

                </div>

            </div>

        </MainLayout>
    );
}

export default Dashboard;