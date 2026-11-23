import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login, getProfile } from "../services/authService";
import "../styles/Auth.css";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton.jsx";
import AuthFooter from "../components/AuthFooter";
import Profile from "./Profile";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const { login: authLogin } = useContext(AuthContext);

    const loadProfile = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        try {

            const profileData =
                await getProfile(token);

            setProfile(profileData);

        } catch (error) {

            localStorage.removeItem("token");
            setProfile(null);
        }
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const data =
                await login(email, password);

            const token = data.token;

            authLogin(token);

            await loadProfile();

            localStorage.setItem(
                "token",
                token
            );

            navigate("/profile");

            setMessage("Login reușit!");

        } catch (error) {

            setMessage(
                "Email sau parolă invalidă"
            );
        }
    };

    const handleLogout = () => {

        localStorage.removeItem("token");

        setProfile(null);

        setMessage("Delogat");

        setEmail("");
        setPassword("");
    };

    useEffect(() => {
        loadProfile();
    }, []);


    return (


        <AuthCard title="MyApp Login">

            {!profile && (
                <>

                    <form onSubmit={handleLogin}>

                        <InputField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <InputField
                            label="Parolă"
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        <AuthButton
                            type="submit"
                        >
                            Login
                        </AuthButton>

                    </form>
                </>
            )}

            {profile && (
                <Profile
                    profile={profile}
                    onLogout={handleLogout}
                />
            )}

            <p className="message">
                {message}
            </p>

            {!profile && (
                <AuthFooter
                    text="Nu ai cont?"
                    linkText="Înregistrează-te"
                    to="/register"
                />
            )}

        </AuthCard>


    );
}

export default Login;