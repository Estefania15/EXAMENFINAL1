function App() {
    try {
        const [user, setUser] = React.useState(null);
        const [activeModule, setActiveModule] = React.useState('dashboard');
        const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
            checkAuth();
        }, []);

        const checkAuth = () => {
            if (AuthService.isAuthenticated()) {
                const currentUser = AuthService.getCurrentUser();
                setUser(currentUser);
            }
            setLoading(false);
        };

        const handleLogin = (userData) => {
            setUser(userData);
        };

        const handleLogout = () => {
            AuthService.logout();
            setUser(null);
        };

        const renderActiveModule = () => {
            switch (activeModule) {
                case 'dashboard':
                    return React.createElement(Dashboard);
                case 'contactos':
                    return React.createElement(ContactosList);
                case 'negocios':
                    return React.createElement(NegociosList);
                case 'compras':
                    return React.createElement(ComprasList);
                case 'tickets':
                    return React.createElement(TicketsList);
                default:
                    return React.createElement(Dashboard);
            }
        };

        if (loading) {
            return (
                <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}} data-name="app-loading" data-file="app.js">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            );
        }

        if (!user) {
            return React.createElement(Login, { onLogin: handleLogin });
        }

        return (
            <div className="d-flex" data-name="app-container" data-file="app.js">
                <div className="col-md-3 col-lg-2 p-0" data-name="sidebar-container" data-file="app.js">
                    {React.createElement(Sidebar, {
                        activeModule: activeModule,
                        onModuleChange: setActiveModule
                    })}
                </div>
                <div className="col-md-9 col-lg-10 p-0" data-name="main-container" data-file="app.js">
                    {React.createElement(Header, {
                        user: user,
                        onLogout: handleLogout
                    })}
                    <main data-name="main-content" data-file="app.js">
                        {renderActiveModule()}
                    </main>
                </div>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
