import MainLayout from "../layouts/MainLayout";
import "../styles/Settings.css";
import DashboardCard from "../components/DashboardCard.jsx";

function Settings() {
    return (
        <MainLayout>

            <div className="settings">

                <div className="settings-grid">

                    <DashboardCard
                        icon="🎨"
                        title="Temă"
                        description="Configurare temă aplicație."
                    />

                    <DashboardCard
                        icon="🔔"
                        title="Notificări"
                        description="Preferințe notificări."
                    />

                    <DashboardCard
                        icon="🔒"
                        title="Securitate"
                        description="Parolă și autentificare."
                    />

                    <DashboardCard
                        icon="🌍"
                        title="Limbă"
                        description="Setări regionale."
                    />

                </div>

            </div>

        </MainLayout>
    );
}

export default Settings;