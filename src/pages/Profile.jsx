import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthCard from "../components/AuthCard";
import AuthButton from "../components/AuthButton";
import { getProfile } from "../services/authService";
import MainLayout from "../layouts/MainLayout";

function Profile() {

    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const loadProfile = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        try {

            const profileData =
                await getProfile(token);

            setProfile(profileData);

        } catch (error) {

            logout();

            navigate("/login");
        }
    };

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    useEffect(() => {
        loadProfile();
    }, []);

    if (!profile) {
        return (
            <AuthCard title="Profil">
                <p>Se încarcă...</p>
            </AuthCard>
        );
    }

    return (
        <MainLayout>

            <AuthCard title="Profil">

                <h2>
                    Salut, {profile.username}!
                </h2>

                <p>
                    Email: {profile.email}
                </p>

                <br />

                

            </AuthCard>

        </MainLayout>
    );
}

export default Profile;