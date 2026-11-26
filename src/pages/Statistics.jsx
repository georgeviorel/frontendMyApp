import MainLayout from "../layouts/MainLayout";
import "../styles/Statistics.css";
import DashboardCard from "../components/DashboardCard.jsx";
import { KeySquare } from "lucide-react";

function Statistics() {
    return (
        <MainLayout>

            <div className="settings">

                <div className="settings-grid">

                    <DashboardCard
                        icon={<KeySquare />}
                        title="Autentificări"
                        description="Autentificarea precedentă și autentificarea curentă. daca aici pun mai mult text, vreau sa vedem ce se intampla si cat de mult pagina este responsive"
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



                </div>

            </div>

        </MainLayout>
    );
}

export default Statistics;