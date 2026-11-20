import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState(null);

    const loadProfile = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        try {

            const response = await axios.get(
                "/api/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setProfile(response.data);

        } catch (error) {

            localStorage.removeItem("token");
            setProfile(null);
        }
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "/api/auth/login",
                {
                    email,
                    password
                }
            );

            const token = response.data.token;

            localStorage.setItem(
                "token",
                token
            );

            await loadProfile();

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
        <div>

            {!profile && (
                <>
                    <h1>Login</h1>

                    <form onSubmit={handleLogin}>

                        <div>
                            <label>Email</label>
                            <br />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />
                        </div>

                        <br />

                        <div>
                            <label>Parolă</label>
                            <br />

                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </div>

                        <br />

                        <button type="submit">
                            Login
                        </button>

                    </form>
                </>
            )}

            {profile && (

                <div>

                    <h2>
                        Salut, {profile.username}!
                    </h2>

                    <p>
                        Email: {profile.email}
                    </p>

                    <button
                        type="button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            )}

            <p>{message}</p>
            <p>
                Nu ai cont?
                <Link to="/register">
                    Înregistrează-te
                </Link>
            </p>

        </div>
    );
}

export default Login;