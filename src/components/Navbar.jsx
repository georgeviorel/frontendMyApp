import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";


function Navbar() {

    const { logout, profile } =
        useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");
    };

    return (
        <nav className="navbar">

            <div className="navbar-left">

                <h2 className="logo">
                    MyApp
                </h2>

            </div>

            <div className="navbar-center">

                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/profile">
                    Profil
                </Link>

            </div>

            <div className="navbar-right">

                <span>
                    Salut, {profile?.username || "Utilizator"}
                </span>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;