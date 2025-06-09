TechSolutions CRM

Sistema de gestión empresarial moderno y completo desarrollado con React y Bootstrap.

Descripción

TechSolutions CRM es una aplicación web completa para la gestión de relaciones con clientes (CRM) que incluye módulos para contactos, negocios, compras y tickets de soporte.

Características Principales

###  Módulos del Sistema
- ** Dashboard** - Panel ejecutivo con métricas en tiempo real
- ** Contactos** - Gestión completa de clientes y prospectos
- ** Negocios** - Seguimiento de oportunidades de venta
- ** Compras** - Administración de proveedores y órdenes
- ** Tickets** - Sistema de soporte y atención al cliente

### Diseño Moderno
- Interfaz limpia y profesional
- Componentes responsivos
- Efectos visuales sutiles
- Paleta de colores corporativa
- Tipografía moderna (Poppins)

###  Funcionalidades
-  Autenticación de usuarios
-  CRUD completo en todos los módulos
-  Modales para crear/editar registros
-  Confirmaciones de eliminación
-  Validación de formularios
-  Estados visuales con badges
-  Búsqueda y filtrado

##  Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **Bootstrap 5** - Framework CSS
- **Font Awesome 6** - Iconografía
- **Poppins Font** - Tipografía

### Herramientas
- **Babel Standalone** - Transpilación en tiempo real
- **TailwindCSS** - Utilidades CSS adicionales

##  Estructura del Proyecto

```
crm-app/
├── index.html                 # Página principal
├── README.md                  # Documentación
├── styles/
│   └── main.css               # Estilos personalizados
├── components/
│   ├── Auth/
│   │   └── Login.js           # Componente de autenticación
│   ├── Layout/
│   │   ├── Header.js          # Cabecera de la aplicación
│   │   └── Sidebar.js         # Menú lateral
│   ├── Dashboard/
│   │   └── Dashboard.js       # Panel principal
│   ├── Contactos/
│   │   ├── ContactosList.js   # Lista de contactos
│   │   └── ContactoModal.js   # Modal crear/editar contacto
│   ├── Negocios/
│   │   ├── NegociosList.js    # Lista de negocios
│   │   └── NegocioModal.js    # Modal crear/editar negocio
│   ├── Compras/
│   │   ├── ComprasList.js     # Lista de compras
│   │   └── ProveedorModal.js  # Modal información proveedor
│   └── Tickets/
│       ├── TicketsList.js     # Lista de tickets
│       └── TicketModal.js     # Modal crear/editar ticket
├── utils/
│   ├── auth.js                # Servicios de autenticación
│   └── api.js                 # Servicios de API
└── app.js                     # Componente raíz
 
```


# Instalación y Uso

# Requisitos
- Navegador web moderno
- Servidor web local (opcional)

# Instalación
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

# Credenciales de Prueba

Admin: admin@crm.com / admin123
Usuario: usuario@crm.com / usuario123
Demo: demo@crm.com / demo123


##  Módulos Detallados

### Dashboard
- Métricas principales del negocio
- Cards con estadísticas visuales
- Contadores dinámicos
- Indicadores de rendimiento

### Contactos
- **Campos:** Nombre, Email, Teléfono, Empresa
- **Acciones:** Crear, Editar, Eliminar
- **Vista:** Tabla responsiva con iconos

### Negocios
- **Campos:** Título, Cliente, Valor, Estado
- **Estados:** Propuesta, En Progreso, Cerrado, Perdido
- **Vista:** Cards con badges de estado

### Compras
- **Información:** Proveedor, Descripción, Monto, Fecha
- **Estados:** Aprobada, Pendiente, Rechazada
- **Funciones:** Ver proveedor detallado, Eliminar

### Tickets
- **Campos:** Título, Cliente, Prioridad, Estado, Descripción
- **Prioridades:** Alta, Media, Baja
- **Estados:** Abierto, En Proceso, Cerrado

# Paleta de Colores

css
Primario:   #667eea (Azul corporativo)
Éxito:      #48bb78 (Verde)
Advertencia: #ed8936 (Naranja)
Info:       #38b2ac (Turquesa)
Secundario: #9f7aea (Púrpura)
Fondo:      #f8fafc (Gris claro)


# Configuración

## Personalización
- Modifica `styles/main.css` para cambiar estilos
- Edita `utils/auth.js` para integrar autenticación real
- Actualiza `utils/api.js` para conectar con backend

## Extensiones
- Agregar nuevos módulos en `components/`
- Incluir rutas en `app.js`
- Actualizar menú en `components/Layout/Sidebar.js`

# Responsive Design

- **Desktop:** Experiencia completa
- **Tablet:** Adaptación automática
- **Mobile:** Interfaz optimizada

# Seguridad

- Validación de formularios
- Confirmaciones de eliminación
- Manejo de errores
- Autenticación por tokens

# Características Avanzadas

## Efectos Visuales
- Hover effects en cards
- Transiciones suaves
- Animaciones de iconos
- Sombras dinámicas

## UX/UI
- Feedback visual inmediato
- Estados de carga
- Mensajes informativos
- Navegación intuitiva

# Rendimiento

- Componentes optimizados
- Carga bajo demanda
- Gestión eficiente del estado
- Mínimas dependencias

# Contribución

1. Fork del proyecto
2. Crear rama para feature
3. Commit de cambios
4. Push a la rama
5. Crear Pull Request

##  Autor
Estefania Cruz Muñoz

**TechSolutions Team**
- Email: contact@techsolutions.com
- Web: www.techsolutions.com

## Versiones
beta

### v1.0.0 (Beta)
-  Sistema base completo
-  Todos los módulos funcionales
-  Diseño moderno y responsivo
-  Autenticación implementada
-  Efectos visuales
-  UX/UI optimizado
-  Documentación completa



### Próximas Versiones
-  Integración con API real
-  Gráficos y reportes
-  Búsqueda avanzada
-  Notificaciones por email
-  App móvil

