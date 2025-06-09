const ApiService = {
    baseURL: '/api',

    request: async (endpoint, options = {}) => {
        const token = AuthService.getToken();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
                ...options.headers
            },
            ...options
        };

        try {
            const response = await fetch(`${ApiService.baseURL}${endpoint}`, config);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    get: (endpoint) => ApiService.request(endpoint),
    
    post: (endpoint, data) => ApiService.request(endpoint, {
        method: 'POST',
        body: JSON.stringify(data)
    }),
    
    put: (endpoint, data) => ApiService.request(endpoint, {
        method: 'PUT',
        body: JSON.stringify(data)
    }),
    
    delete: (endpoint) => ApiService.request(endpoint, {
        method: 'DELETE'
    })
};
