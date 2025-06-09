function TicketModal({ ticket, show, onHide, onSave }) {
    try {
        const [formData, setFormData] = React.useState({
            titulo: '',
            cliente: '',
            prioridad: 'Media',
            estado: 'Abierto',
            descripcion: ''
        });

        React.useEffect(() => {
            if (ticket) {
                setFormData(ticket);
            } else {
                setFormData({ 
                    titulo: '', 
                    cliente: '', 
                    prioridad: 'Media', 
                    estado: 'Abierto',
                    descripcion: ''
                });
            }
        }, [ticket]);

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const ticketData = {
                ...formData,
                fecha: ticket ? ticket.fecha : new Date().toISOString().split('T')[0]
            };
            onSave(ticketData);
            onHide();
        };

        if (!show) return null;

        return (
            <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} data-name="ticket-modal" data-file="components/Tickets/TicketModal.js">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i className="fas fa-ticket-alt me-2"></i>
                                {ticket ? 'Editar Ticket' : 'Nuevo Ticket'}
                            </h5>
                            <button type="button" className="btn-close" onClick={onHide}></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Título</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="titulo"
                                        value={formData.titulo}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Cliente</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cliente"
                                        value={formData.cliente}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Prioridad</label>
                                            <select
                                                className="form-select"
                                                name="prioridad"
                                                value={formData.prioridad}
                                                onChange={handleChange}
                                            >
                                                <option value="Baja">Baja</option>
                                                <option value="Media">Media</option>
                                                <option value="Alta">Alta</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Estado</label>
                                            <select
                                                className="form-select"
                                                name="estado"
                                                value={formData.estado}
                                                onChange={handleChange}
                                            >
                                                <option value="Abierto">Abierto</option>
                                                <option value="En Proceso">En Proceso</option>
                                                <option value="Cerrado">Cerrado</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <textarea
                                        className="form-control"
                                        name="descripcion"
                                        rows="3"
                                        value={formData.descripcion}
                                        onChange={handleChange}
                                        placeholder="Describe el problema o consulta..."
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onHide}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary-custom">
                                    <i className="fas fa-save me-2"></i>
                                    {ticket ? 'Actualizar' : 'Guardar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('TicketModal component error:', error);
        reportError(error);
    }
}
