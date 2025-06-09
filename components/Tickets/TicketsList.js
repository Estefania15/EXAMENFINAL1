function TicketsList() {
    try {
        const [tickets, setTickets] = React.useState([]);
        const [loading, setLoading] = React.useState(true);
        const [showModal, setShowModal] = React.useState(false);
        const [selectedTicket, setSelectedTicket] = React.useState(null);

        React.useEffect(() => {
            loadTickets();
        }, []);

        const loadTickets = async () => {
            try {
                const data = await ApiService.get('/tickets');
                setTickets(data);
            } catch (error) {
                console.error('Error loading tickets:', error);
                setTickets([
                    { id: 1, titulo: 'Error en sistema', cliente: 'Tech Corp', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-15' },
                    { id: 2, titulo: 'Consulta general', cliente: 'StartUp Inc', prioridad: 'Media', estado: 'En Proceso', fecha: '2024-01-14' },
                    { id: 3, titulo: 'Solicitud de mejora', cliente: 'Innovation Lab', prioridad: 'Baja', estado: 'Cerrado', fecha: '2024-01-13' }
                ]);
            }
            setLoading(false);
        };

        const getPriorityColor = (prioridad) => {
            const colors = { 'Alta': 'danger', 'Media': 'warning', 'Baja': 'success' };
            return colors[prioridad] || 'secondary';
        };

        const getStatusColor = (estado) => {
            const colors = { 'Abierto': 'primary', 'En Proceso': 'warning', 'Cerrado': 'success' };
            return colors[estado] || 'secondary';
        };

        const handleAgregar = () => {
            setSelectedTicket(null);
            setShowModal(true);
        };

        const handleEditar = (ticket) => {
            setSelectedTicket(ticket);
            setShowModal(true);
        };

        const handleEliminar = (id) => {
            if (confirm('¿Estás seguro de que deseas eliminar este ticket?')) {
                setTickets(tickets.filter(t => t.id !== id));
            }
        };

        const handleGuardar = (ticketData) => {
            if (selectedTicket) {
                setTickets(tickets.map(t => 
                    t.id === selectedTicket.id ? { ...ticketData, id: selectedTicket.id } : t
                ));
            } else {
                const newId = Math.max(...tickets.map(t => t.id)) + 1;
                setTickets([...tickets, { ...ticketData, id: newId }]);
            }
        };

        if (loading) {
            return (
                <div className="d-flex justify-content-center p-5" data-name="loading" data-file="components/Tickets/TicketsList.js">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            );
        }

        return (
            <div className="container-fluid p-4" data-name="tickets-container" data-file="components/Tickets/TicketsList.js">
                <div className="d-flex justify-content-between align-items-center mb-4" data-name="tickets-header" data-file="components/Tickets/TicketsList.js">
                    <div>
                        <h2 className="fw-bold mb-0">Tickets ({tickets.length})</h2>
                        <p className="text-muted">Gestión de tickets de soporte</p>
                    </div>
                    <button 
                        className="btn btn-primary-custom"
                        onClick={handleAgregar}
                        data-name="add-ticket-btn" 
                        data-file="components/Tickets/TicketsList.js"
                    >
                        <i className="fas fa-plus me-2"></i>Nuevo Ticket
                    </button>
                </div>

                <div className="row g-4" data-name="tickets-grid" data-file="components/Tickets/TicketsList.js">
                    {tickets.map(ticket => (
                        <div key={ticket.id} className="col-md-6 col-lg-4" data-name="ticket-col" data-file="components/Tickets/TicketsList.js">
                            <div className="card card-hover h-100" data-name="ticket-card" data-file="components/Tickets/TicketsList.js">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <h5 className="card-title">{ticket.titulo}</h5>
                                        <span className={`badge bg-${getPriorityColor(ticket.prioridad)}`}>
                                            {ticket.prioridad}
                                        </span>
                                    </div>
                                    <p className="text-muted mb-2">
                                        <i className="fas fa-user me-2"></i>
                                        {ticket.cliente}
                                    </p>
                                    <p className="text-muted mb-3">
                                        <i className="fas fa-calendar me-2"></i>
                                        {ticket.fecha}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className={`badge bg-${getStatusColor(ticket.estado)}`}>
                                            {ticket.estado}
                                        </span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => handleEditar(ticket)}
                                            title="Editar"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleEliminar(ticket.id)}
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

                {React.createElement(TicketModal, {
                    ticket: selectedTicket,
                    show: showModal,
                    onHide: () => setShowModal(false),
                    onSave: handleGuardar
                })}
            </div>
        );
    } catch (error) {
        console.error('TicketsList component error:', error);
        reportError(error);
    }
}
