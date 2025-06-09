function Sidebar({ activeModule, onModuleChange }) {
    try {
        const menuItems = [
            { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-line', color: '#667eea' },
            { id: 'contactos', label: 'Contactos', icon: 'fas fa-users', color: '#48bb78' },
            { id: 'negocios', label: 'Negocios', icon: 'fas fa-handshake', color: '#ed8936' },
            { id: 'compras', label: 'Compras', icon: 'fas fa-shopping-bag', color: '#38b2ac' },
            { id: 'tickets', label: 'Tickets', icon: 'fas fa-headset', color: '#9f7aea' }
        ];

        return (
            <div className="sidebar p-3" data-name="sidebar" data-file="components/Layout/Sidebar.js">
                <div className="text-white text-center mb-4" data-name="sidebar-header" data-file="components/Layout/Sidebar.js">
                    <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{background: '#667eea', width: '60px', height: '60px'}}>
                        <i className="fas fa-rocket fa-2x text-white"></i>
                    </div>
                    <h6 className="fw-bold mb-1">TechSolutions</h6>
                    <small className="text-gray-400">CRM System</small>
                </div>

                <nav data-name="sidebar-nav" data-file="components/Layout/Sidebar.js">
                    {menuItems.map(item => (
                        <div
                            key={item.id}
                            className={`sidebar-item p-3 mb-2 text-white d-flex align-items-center ${
                                activeModule === item.id ? 'active' : ''
                            }`}
                            onClick={() => onModuleChange(item.id)}
                            data-name="sidebar-item"
                            data-file="components/Layout/Sidebar.js"
                        >
                            <div 
                                className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
                                style={{background: `${item.color}20`, width: '36px', height: '36px'}}
                            >
                                <i className={`${item.icon}`} style={{color: item.color, fontSize: '14px'}}></i>
                            </div>
                            <span className="fw-medium">{item.label}</span>
                        </div>
                    ))}
                </nav>

                <div className="mt-auto pt-4" data-name="sidebar-footer" data-file="components/Layout/Sidebar.js">
                    <div className="text-center small text-gray-400">
                        <div className="rounded-3 p-2" style={{background: 'rgba(255,255,255,0.05)'}}>
                            <i className="fas fa-copyright me-1"></i>
                            2024 TechSolutions
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
    }
}
