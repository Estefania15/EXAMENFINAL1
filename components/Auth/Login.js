function Login({ onLogin }) {
    try {
        const [formData, setFormData] = React.useState({
            email: '',
            password: ''
        });
        const [loading, setLoading] = React.useState(false);
        const [error, setError] = React.useState('');

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setError('');

            const result = await AuthService.login(formData.email, formData.password);
            
            if (result.success) {
                onLogin(result.user);
            } else {
                setError(result.message);
            }
            
            setLoading(false);
        };

        const fillDemoCredentials = (email, password) => {
            setFormData({ email, password });
        };

        return (
            <div className="login-container d-flex align-items-center justify-content-center" data-name="login-container" data-file="components/Auth/Login.js">
                <div className="login-card p-5" style={{width: '450px'}} data-name="login-card" data-file="components/Auth/Login.js">
                    <div className="text-center mb-4" data-name="login-header" data-file="components/Auth/Login.js">
                        <div className="rounded-circle p-3 mx-auto mb-3" style={{background: '#667eea', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <i className="fas fa-rocket fa-2x text-white"></i>
                        </div>
                        <h2 className="fw-bold mb-2 text-dark">TechSolutions CRM</h2>
                        <p className="text-muted">Sistema de Gestión Empresarial</p>
                    </div>

                    {error && (
                        <div className="alert alert-danger border-0 rounded-3 mb-3" data-name="error-alert" data-file="components/Auth/Login.js">
                            <i className="fas fa-exclamation-triangle me-2"></i>{error}
                        </div>
                    )}

                    <div className="alert alert-info border-0 rounded-3 mb-3" data-name="demo-info" data-file="components/Auth/Login.js">
                        <small>
                            <strong><i className="fas fa-info-circle me-2"></i>Credenciales de prueba:</strong><br/>
                            <button className="btn btn-link btn-sm p-0 text-decoration-none" onClick={() => fillDemoCredentials('admin@crm.com', 'admin123')}>
                                <i className="fas fa-user-shield me-1"></i>admin@crm.com / admin123
                            </button><br/>
                            <button className="btn btn-link btn-sm p-0 text-decoration-none" onClick={() => fillDemoCredentials('usuario@crm.com', 'usuario123')}>
                                <i className="fas fa-user me-1"></i>usuario@crm.com / usuario123
                            </button>
                        </small>
                    </div>

                    <form onSubmit={handleSubmit} data-name="login-form" data-file="components/Auth/Login.js">
                        <div className="mb-3" data-name="email-group" data-file="components/Auth/Login.js">
                            <label className="form-label fw-semibold">
                                <i className="fas fa-envelope me-2 text-primary"></i>Email
                            </label>
                            <input
                                type="email"
                                className="form-control py-3"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Ingresa tu email"
                            />
                        </div>

                        <div className="mb-4" data-name="password-group" data-file="components/Auth/Login.js">
                            <label className="form-label fw-semibold">
                                <i className="fas fa-lock me-2 text-primary"></i>Contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control py-3"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary-custom w-100 py-3 fw-bold"
                            disabled={loading}
                            data-name="login-button"
                            data-file="components/Auth/Login.js"
                        >
                            {loading ? (
                                <div>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Conectando...
                                </div>
                            ) : (
                                <div>
                                    <i className="fas fa-sign-in-alt me-2"></i>
                                    Ingresar al Sistema
                                </div>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Login component error:', error);
        reportError(error);
    }
}
