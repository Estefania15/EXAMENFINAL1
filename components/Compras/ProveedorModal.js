function ProveedorModal({ proveedor, show, onHide }) {
    try {
        if (!show || !proveedor) return null;

        return (
            <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} data-name="proveedor-modal" data-file="components/Compras/ProveedorModal.js">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i className="fas fa-store me-2"></i>
                                Información del Proveedor
                            </h5>
                            <button type="button" className="btn-close" onClick={onHide}></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="card-title text-primary">Datos Generales</h6>
                                            <p><strong>Nombre:</strong> {proveedor.nombre}</p>
                                            <p><strong>RUC/NIT:</strong> {proveedor.ruc}</p>
                                            <p><strong>Email:</strong> {proveedor.email}</p>
                                            <p><strong>Teléfono:</strong> {proveedor.telefono}</p>
                                            <p><strong>Sitio Web:</strong> 
                                                <a href={proveedor.sitioWeb} target="_blank" className="ms-2">
                                                    {proveedor.sitioWeb}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="card-title text-success">Información Comercial</h6>
                                            <p><strong>Dirección:</strong> {proveedor.direccion}</p>
                                            <p><strong>Ciudad:</strong> {proveedor.ciudad}</p>
                                            <p><strong>País:</strong> {proveedor.pais}</p>
                                            <p><strong>Contacto:</strong> {proveedor.contacto}</p>
                                            <p><strong>Estado:</strong> 
                                                <span className={`badge bg-${proveedor.estado === 'Activo' ? 'success' : 'danger'} ms-2`}>
                                                    {proveedor.estado}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title text-info">Estadísticas</h6>
                                            <div className="row">
                                                <div className="col-md-4 text-center">
                                                    <h4 className="text-primary">{proveedor.totalCompras}</h4>
                                                    <small>Total Compras</small>
                                                </div>
                                                <div className="col-md-4 text-center">
                                                    <h4 className="text-success">${proveedor.montoTotal?.toLocaleString()}</h4>
                                                    <small>Monto Total</small>
                                                </div>
                                                <div className="col-md-4 text-center">
                                                    <h4 className="text-warning">{proveedor.ultimaCompra}</h4>
                                                    <small>Última Compra</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary">
                                <i className="fas fa-edit me-2"></i>Editar
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={onHide}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProveedorModal component error:', error);
        reportError(error);
    }
}
