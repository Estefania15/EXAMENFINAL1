
function ContactoModal({ contacto, show, onHide, onSave }) {
    try {
        const [formData, setFormData] = React.useState({
            nombre: '',
            email: '',
            telefono: '',
            empresa: ''
        });

        React.useEffect(() => {
            if (contacto) {
                setFormData(contacto);
            } else {
                setFormData({ nombre: '', email: '', telefono: '', empresa: '' });
            }
        }, [contacto]);

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onSave(formData);
            onHide();
        };

        if (!show) return null;

        return (
            <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} data-name="contacto-modal" data-file="components/Contactos/ContactoModal.js">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i className="fas fa-user me-2"></i>
                                {contacto ? 'Editar Contacto' : 'Nuevo Contacto'}
                            </h5>
                            <button type="button" className="btn-close" onClick={onHide}></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Empresa</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onHide}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary-custom">
                                    <i className="fas fa-save me-2"></i>
                                    {contacto ? 'Actualizar' : 'Guardar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ContactoModal component error:', error);
        reportError(error);
    }
}
