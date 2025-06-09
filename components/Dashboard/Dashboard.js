function Dashboard() {
    try {
        const [stats, setStats] = React.useState({
            contactos: 0,
            negocios: 0,
            compras: 0,
            tickets: 0
        });

        React.useEffect(() => {
            loadStats();
        }, []);

        const loadStats = async () => {
            try {
                const data = await ApiService.get('/dashboard/stats');
                setStats(data);
            } catch (error) {
                console.error('Error loading stats:', error);
                setStats({
                    contactos: 125,
                    negocios: 45,
                    compras: 89,
                    tickets: 23
                });
            }
        };

        const statsCards = [
            { title: 'Contactos', value: stats.contactos, icon: 'fas fa-users', color: '#667eea' },
            { title: 'Negocios', value: stats.negocios, icon: 'fas fa-handshake', color: '#48bb78' },
            { title: 'Compras', value: stats.compras, icon: 'fas fa-shopping-bag', color: '#ed8936' },
            { title: 'Tickets', value: stats.tickets, icon: 'fas fa-headset', color: '#9f7aea' }
        ];

        return (
            <div className="container-fluid p-4" style={{background: '#f8fafc', minHeight: '100vh'}} data-name="dashboard-container" data-file="components/Dashboard/Dashboard.js">
                <div className="row mb-4" data-name="dashboard-header" data-file="components/Dashboard/Dashboard.js">
                    <div className="col">
                        <div className="d-flex align-items-center">
                            <div className="rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{background: '#667eea', width: '56px', height: '56px'}}>
                                <i className="fas fa-chart-line fa-xl text-white"></i>
                            </div>
                            <div>
                                <h2 className="fw-bold mb-1 text-dark">Dashboard Ejecutivo</h2>
                                <p className="text-muted mb-0">Resumen en tiempo real de tu negocio</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mb-4" data-name="stats-row" data-file="components/Dashboard/Dashboard.js">
                    {statsCards.map((card, index) => (
                        <div key={index} className="col-md-3" data-name="stats-col" data-file="components/Dashboard/Dashboard.js">
                            <div className="stats-card p-4 h-100" data-name="stats-card" data-file="components/Dashboard/Dashboard.js">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h3 className="fw-bold mb-1" style={{fontSize: '2.2rem', color: card.color}}>
                                            {card.value}
                                        </h3>
                                        <p className="text-muted mb-0 fw-medium">{card.title}</p>
                                    </div>
                                    <div 
                                        className="rounded-circle p-3 d-flex align-items-center justify-content-center"
                                        style={{background: `${card.color}15`, width: '60px', height: '60px'}}
                                    >
                                        <i className={`${card.icon} fa-xl`} style={{color: card.color}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row" data-name="charts-section" data-file="components/Dashboard/Dashboard.js">
                    <div className="col-12">
                        <div className="card-hover p-5 text-center">
                            <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{background: '#667eea', width: '70px', height: '70px'}}>
                                <i className="fas fa-chart-pie fa-2x text-white"></i>
                            </div>
                            <h4 className="fw-bold mb-2 text-dark">Análisis Avanzado</h4>
                            <p className="text-muted mb-4">Próximamente: Gráficos interactivos y métricas en tiempo real</p>
                            <div className="d-flex justify-content-center gap-3">
                                <span className="badge px-3 py-2" style={{background: '#667eea', color: 'white'}}>
                                    <i className="fas fa-chart-bar me-1"></i>Reportes
                                </span>
                                <span className="badge px-3 py-2" style={{background: '#48bb78', color: 'white'}}>
                                    <i className="fas fa-analytics me-1"></i>Analytics
                                </span>
                                <span className="badge px-3 py-2" style={{background: '#ed8936', color: 'white'}}>
                                    <i className="fas fa-chart-line me-1"></i>Tendencias
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Dashboard component error:', error);
        reportError(error);
    }
}
