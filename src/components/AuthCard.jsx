function AuthCard({ title, children }) {
    return (
        <div className="auth-container">
            <div className="auth-card">

                <h1 className="auth-title">
                    {title}
                </h1>

                {children}

            </div>
        </div>
    );
}

export default AuthCard;