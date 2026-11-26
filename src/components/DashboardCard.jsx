function DashboardCard({
                           title,
                           description,
                           icon,
                           onClick
                       }) {

    if (onClick) {
        return (
            <button
                type="button"
                className="dashboard-card clickable"
                onClick={onClick}
            >
                <h3>
                    {icon} {title}
                </h3>

                <p>
                    {description}
                </p>
            </button>
        );
    }

    return (
        <div className="dashboard-card">
            <h3>
                {icon} {title}
            </h3>

            <p>
                {description}
            </p>
        </div>
    );
}

export default DashboardCard;