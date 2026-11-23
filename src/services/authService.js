import axiosInstance from "../api/axiosConfig";

export const login = async (email, password) => {

    const response = await axiosInstance.post(
        "/auth/login",
        {
            email,
            password
        }
    );

    return response.data;
};

export const register = async (
    username,
    email,
    password
) => {

    const response = await axiosInstance.post(
        "/auth/register",
        {
            username,
            email,
            password
        }
    );

    return response.data;
};

export const getProfile = async (token) => {

    const response = await axiosInstance.get(
        "/profile",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};
