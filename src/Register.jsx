import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "/api/auth/register",
                {
                    username,
                    email,
                    password
                }
            );

            setMessage(response.data);

            setMessage("Utilizator creat");

            setTimeout(() => {
                navigate("/login");
            }, 2500);

            setUsername("");
            setEmail("");
            setPassword("");

        } catch (error) {

            setMessage(
                error.response?.data ||
                "Eroare la înregistrare"
            );
        }
    };

    return (
        <div>

            <h1>Register</h1>

            <form onSubmit={handleRegister}>

                <div>
                    <label>Username</label>
                    <br />

                    <input
                        type="text"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />
                </div>

                <br />

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
                    Creează cont
                </button>

            </form>

            <p>{message}</p>

            <p>
                Ai deja cont?
                <Link to="/login">
                    Login
                </Link>
            </p>

        </div>
    );
}

export default Register;