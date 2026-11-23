import MainLayout from "../layouts/MainLayout";
import AuthCard from "../components/AuthCard";

function Dashboard() {
    return (
        <MainLayout>

            <AuthCard title="Dashboard">

                <h2>Bine ai venit!</h2>

                <p>
                    Ai fost autentificat cu succes.
                </p>

            </AuthCard>

        </MainLayout>
    );
}

export default Dashboard;