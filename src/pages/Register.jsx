import { useState } from "react";
import {
    register
} from "../services/authService";
import {  useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import AuthFooter from "../components/AuthFooter";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            await register(
                username,
                email,
                password
            );

            setMessage("Utilizator creat");

            setTimeout(() => {
                navigate("/login");
            }, 2500);

            setUsername("");
            setEmail("");
            setPassword("");

        } catch (error) {

            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log(error);

            setMessage(
                error.response?.data ||
                "Eroare la înregistrare"
            );
        }
    };

    return (
        <AuthCard title = "Creeaza cont">


                <form onSubmit={handleRegister}>

                    <InputField
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />

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
                        Creează cont
                    </AuthButton>

                </form>

                <p className="message">
                    {message}
                </p>

            <AuthFooter
                text="Ai deja cont?"
                linkText="Login"
                to="/login"
            />
        </AuthCard>

    );
}

export default Register;