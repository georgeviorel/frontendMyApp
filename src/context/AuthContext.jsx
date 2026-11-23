import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/authService";


export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );
    const [profile, setProfile] = useState(null);

    const login = (newToken) => {

        localStorage.setItem(
            "token",
            newToken
        );

        setToken(newToken);
    };

    const logout = () => {

        localStorage.removeItem("token");

        setToken(null);

        setProfile(null);
    };

    useEffect(() => {

        const loadProfile = async () => {

            if (!token) {
                return;
            }

            try {

                const profileData =
                    await getProfile(token);

                setProfile(profileData);

            } catch (error) {

                logout();
            }
        };

        loadProfile();

    }, [token]);


    return (
        <AuthContext.Provider
            value={{
                token,
                profile,
                setProfile,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;