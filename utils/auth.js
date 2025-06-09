const AuthService = {
    login: async (email, password) => {
        try {
            // Credenciales de prueba para testing
            const testCredentials = {
                'admin@crm.com': 'admin123',
                'usuario@crm.com': 'usuario123',
                'demo@crm.com': 'demo123'
            };

            // Simular delay de red
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Verificar credenciales de prueba
            if (testCredentials[email] && testCredentials[email] === password) {
                const userData = {
                    id: 1,
                    name: email === 'admin@crm.com' ? 'Administrador' : 
                          email === 'usuario@crm.com' ? 'Usuario Demo' : 'Usuario Prueba',
                    email: email,
                    role: email === 'admin@crm.com' ? 'admin' : 'user'
                };
                
                const token = 'demo-token-' + Date.now();
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userData));
                return { success: true, user: userData };
            }

            // Si no son credenciales de prueba, intentar API real
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    return { success: true, user: data.user };
                }
            } catch (apiError) {
                console.log('API no disponible, usando modo demo');
            }

            return { success: false, message: 'Credenciales inválidas' };
        } catch (error) {
            console.error('Error en login:', error);
            return { success: false, message: 'Error de conexión' };
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    },

    isAuthenticated: () => {
        return localStorage.getItem('token') !== null;
    },

    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    getToken: () => {
        return localStorage.getItem('token');
    }
};
