function AuthButton({
                        children,
                        type = "button",
                        onClick
                    }) {
    return (
        <button
            className="auth-button"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default AuthButton;