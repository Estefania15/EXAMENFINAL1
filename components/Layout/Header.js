function Header({ user, onLogout }) {
    try {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white" data-name="header-nav" data-file="components/Layout/Header.js">
                <div className="container-fluid" data-name="header-container" data-file="components/Layout/Header.js">
                    <span className="navbar-brand fw-bold text-dark" data-name="brand" data-file="components/Layout/Header.js">
                        <div className="rounded-circle me-2 d-inline-flex align-items-center justify-content-center" style={{background: '#667eea', width: '32px', height: '32px'}}>
                            <i className="fas fa-rocket text-white" style={{fontSize: '14px'}}></i>
                        </div>
                        TechSolutions CRM
                    </span>
                    
                    <div className="d-flex align-items-center" data-name="user-menu" data-file="components/Layout/Header.js">
                        <div className="dropdown" data-name="user-dropdown" data-file="components/Layout/Header.js">
                            <button 
                                className="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                <i className="fas fa-user-circle me-2"></i>
                                {user?.name || 'Usuario'}
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#profile">
                                        <i className="fas fa-user me-2"></i>Perfil
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#settings">
                                        <i className="fas fa-cog me-2"></i>Configuración
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button className="dropdown-item" onClick={onLogout}>
                                        <i className="fas fa-sign-out-alt me-2"></i>Cerrar Sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
