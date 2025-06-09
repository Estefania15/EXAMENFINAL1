function ComprasList() {
    try {
        const [compras, setCompras] = React.useState([]);
        const [loading, setLoading] = React.useState(true);
        const [selectedProveedor, setSelectedProveedor] = React.useState(null);
        const [showModal, setShowModal] = React.useState(false);

        React.useEffect(() => {
            loadCompras();
        }, []);

        const loadCompras = async () => {
            try {
                const data = await ApiService.get('/compras');
                setCompras(data);
            } catch (error) {
                console.error('Error loading compras:', error);
                setCompras([
                    { 
                        id: 1, 
                        proveedor: 'Tech Solutions', 
                        descripcion: 'Licencias Software', 
                        monto: 2500, 
                        fecha: '2024-01-15', 
                        estado: 'Aprobada',
                        proveedorInfo: {
                            nombre: 'Tech Solutions',
                            ruc: '20123456789',
                            email: 'ventas@techsolutions.com',
                            telefono: '+51 999 888 777',
                            sitioWeb: 'https://techsolutions.com',
                            direccion: 'Av. Tecnología 123',
                            ciudad: 'Lima',
                            pais: 'Perú',
                            contacto: 'Carlos Mendoza',
                            estado: 'Activo',
                            totalCompras: 15,
                            montoTotal: 45000,
                            ultimaCompra: '2024-01-15'
                        }
                    },
                    { 
                        id: 2, 
                        proveedor: 'Office Supplies', 
                        descripcion: 'Material de Oficina', 
                        monto: 450, 
                        fecha: '2024-01-10', 
                        estado: 'Pendiente',
                        proveedorInfo: {
                            nombre: 'Office Supplies',
                            ruc: '20987654321',
                            email: 'info@officesupplies.com',
                            telefono: '+51 888 777 666',
                            sitioWeb: 'https://officesupplies.com',
                            direccion: 'Jr. Comercio 456',
                            ciudad: 'Lima',
                            pais: 'Perú',
                            contacto: 'Ana García',
                            estado: 'Activo',
                            totalCompras: 8,
                            montoTotal: 12500,
                            ultimaCompra: '2024-01-10'
                        }
                    }
                ]);
            }
            setLoading(false);
        };

        const getStatusColor = (estado) => {
            const colors = {
                'Aprobada': 'success',
                'Pendiente': 'warning',
                'Rechazada': 'danger'
            };
            return colors[estado] || 'secondary';
        };

        const handleVerProveedor = (compra) => {
            setSelectedProveedor(compra.proveedorInfo);
            setShowModal(true);
        };

        const handleEliminarCompra = (id) => {
            if (confirm('¿Estás seguro de que deseas eliminar esta compra?')) {
                setCompras(compras.filter(compra => compra.id !== id));
            }
        };

        if (loading) {
            return (
                <div className="d-flex justify-content-center p-5" data-name="loading" data-file="components/Compras/ComprasList.js">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            );
        }

        return (
            <div className="container-fluid p-4" data-name="compras-container" data-file="components/Compras/ComprasList.js">
                <div className="d-flex justify-content-between align-items-center mb-4" data-name="compras-header" data-file="components/Compras/ComprasList.js">
                    <div>
                        <h2 className="fw-bold mb-0">Compras</h2>
                        <p className="text-muted">Gestión de órdenes de compra</p>
                    </div>
                    <button className="btn btn-primary-custom" data-name="add-compra-btn" data-file="components/Compras/ComprasList.js">
                        <i className="fas fa-plus me-2"></i>Nueva Compra
                    </button>
                </div>

                <div className="card card-hover" data-name="compras-card" data-file="components/Compras/ComprasList.js">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Proveedor</th>
                                        <th>Descripción</th>
                                        <th>Monto</th>
                                        <th>Fecha</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {compras.map(compra => (
                                        <tr key={compra.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                                                        <i className="fas fa-store text-warning"></i>
                                                    </div>
                                                    <button 
                                                        className="btn btn-link p-0 text-start"
                                                        onClick={() => handleVerProveedor(compra)}
                                                    >
                                                        {compra.proveedor}
                                                    </button>
                                                </div>
                                            </td>
                                            <td>{compra.descripcion}</td>
                                            <td className="fw-bold text-success">${compra.monto.toLocaleString()}</td>
                                            <td>{compra.fecha}</td>
                                            <td>
                                                <span className={`badge bg-${getStatusColor(compra.estado)}`}>
                                                    {compra.estado}
                                                </span>
                                            </td>
                                            <td>
                                                <button 
                                                    className="btn btn-sm btn-outline-info me-2"
                                                    onClick={() => handleVerProveedor(compra)}
                                                    title="Ver Proveedor"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-primary me-2">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleEliminarCompra(compra.id)}
                                                    title="Eliminar Compra"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {React.createElement(ProveedorModal, {
                    proveedor: selectedProveedor,
                    show: showModal,
                    onHide: () => setShowModal(false)
                })}
            </div>
        );
    } catch (error) {
        console.error('ComprasList component error:', error);
        reportError(error);
    }
}
