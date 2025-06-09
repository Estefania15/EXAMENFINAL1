function NegociosList() {
    try {
        const [negocios, setNegocios] = React.useState([]);
        const [loading, setLoading] = React.useState(true);
        const [showModal, setShowModal] = React.useState(false);
        const [selectedNegocio, setSelectedNegocio] = React.useState(null);

        React.useEffect(() => {
            loadNegocios();
        }, []);

        const loadNegocios = async () => {
            try {
                const data = await ApiService.get('/negocios');
                setNegocios(data);
            } catch (error) {
                console.error('Error loading negocios:', error);
                setNegocios([
                    { id: 1, titulo: 'Proyecto Web', cliente: 'Tech Corp', valor: 15000, estado: 'En Progreso' },
                    { id: 2, titulo: 'App Mobile', cliente: 'StartUp Inc', valor: 25000, estado: 'Propuesta' },
                    { id: 3, titulo: 'Sistema ERP', cliente: 'Big Company', valor: 50000, estado: 'Cerrado' }
                ]);
            }
            setLoading(false);
        };

        const getStatusBadge = (estado) => {
            const statusMap = {
                'En Progreso': 'warning',
                'Propuesta': 'info',
                'Cerrado': 'success',
                'Perdido': 'danger'
            };
            return statusMap[estado] || 'secondary';
        };

        const handleAgregar = () => {
            setSelectedNegocio(null);
            setShowModal(true);
        };

        const handleEditar = (negocio) => {
            setSelectedNegocio(negocio);
            setShowModal(true);
        };

        const handleEliminar = (id) => {
            if (confirm('¿Estás seguro de que deseas eliminar este negocio?')) {
                setNegocios(negocios.filter(n => n.id !== id));
            }
        };

        const handleGuardar = (negocioData) => {
            if (selectedNegocio) {
                setNegocios(negocios.map(n => 
                    n.id === selectedNegocio.id ? { ...negocioData, id: selectedNegocio.id } : n
                ));
            } else {
                const newId = Math.max(...negocios.map(n => n.id)) + 1;
                setNegocios([...negocios, { ...negocioData, id: newId }]);
            }
        };

        if (loading) {
            return (
                <div className="d-flex justify-content-center p-5" data-name="loading" data-file="components/Negocios/NegociosList.js">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            );
        }

        return (
            <div className="container-fluid p-4" data-name="negocios-container" data-file="components/Negocios/NegociosList.js">
                <div className="d-flex justify-content-between align-items-center mb-4" data-name="negocios-header" data-file="components/Negocios/NegociosList.js">
                    <div>
                        <h2 className="fw-bold mb-0">Negocios ({negocios.length})</h2>
                        <p className="text-muted">Gestión de oportunidades de negocio</p>
                    </div>
                    <button 
                        className="btn btn-primary-custom"
                        onClick={handleAgregar}
                        data-name="add-negocio-btn" 
                        data-file="components/Negocios/NegociosList.js"
                    >
                        <i className="fas fa-plus me-2"></i>Nuevo Negocio
                    </button>
                </div>

                <div className="row g-4" data-name="negocios-grid" data-file="components/Negocios/NegociosList.js">
                    {negocios.map(negocio => (
                        <div key={negocio.id} className="col-md-6 col-lg-4" data-name="negocio-col" data-file="components/Negocios/NegociosList.js">
                            <div className="card card-hover h-100" data-name="negocio-card" data-file="components/Negocios/NegociosList.js">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <h5 className="card-title">{negocio.titulo}</h5>
                                        <span className={`badge bg-${getStatusBadge(negocio.estado)}`}>
                                            {negocio.estado}
                                        </span>
                                    </div>
                                    <p className="text-muted mb-2">
                                        <i className="fas fa-building me-2"></i>
                                        {negocio.cliente}
                                    </p>
                                    <p className="text-success fw-bold mb-3">
                                        <i className="fas fa-dollar-sign me-2"></i>
                                        ${negocio.valor.toLocaleString()}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => handleEditar(negocio)}
                                            title="Editar"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleEliminar(negocio.id)}
                                            title="Eliminar"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {React.createElement(NegocioModal, {
                    negocio: selectedNegocio,
                    show: showModal,
                    onHide: () => setShowModal(false),
                    onSave: handleGuardar
                })}
            </div>
        );
    } catch (error) {
        console.error('NegociosList component error:', error);
        reportError(error);
    }
}
