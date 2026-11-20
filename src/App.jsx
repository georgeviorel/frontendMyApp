import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

function App() {

    return (
        <BrowserRouter>

            <nav>
                <Link to="/login">Login</Link>
                {" | "}
                <Link to="/register">Register</Link>
            </nav>

            <hr />

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;