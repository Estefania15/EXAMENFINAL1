function NegocioModal({ negocio, show, onHide, onSave }) {
    try {
        const [formData, setFormData] = React.useState({
            titulo: '',
            cliente: '',
            valor: '',
            estado: 'Propuesta'
        });

        React.useEffect(() => {
            if (negocio) {
                setFormData(negocio);
            } else {
                setFormData({ titulo: '', cliente: '', valor: '', estado: 'Propuesta' });
            }
        }, [negocio]);

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onSave({
                ...formData,
                valor: parseInt(formData.valor)
            });
            onHide();
        };

        if (!show) return null;

        return (
            <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} data-name="negocio-modal" data-file="components/Negocios/NegocioModal.js">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i className="fas fa-handshake me-2"></i>
                                {negocio ? 'Editar Negocio' : 'Nuevo Negocio'}
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
                                <div className="mb-3">
                                    <label className="form-label">Valor ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="valor"
                                        value={formData.valor}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Estado</label>
                                    <select
                                        className="form-select"
                                        name="estado"
                                        value={formData.estado}
                                        onChange={handleChange}
                                    >
                                        <option value="Propuesta">Propuesta</option>
                                        <option value="En Progreso">En Progreso</option>
                                        <option value="Cerrado">Cerrado</option>
                                        <option value="Perdido">Perdido</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onHide}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary-custom">
                                    <i className="fas fa-save me-2"></i>
                                    {negocio ? 'Actualizar' : 'Guardar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('NegocioModal component error:', error);
        reportError(error);
    }
}
