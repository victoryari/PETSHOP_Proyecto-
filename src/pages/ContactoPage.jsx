import React from 'react';

const ContactoPage = () => {
    return (
        <>
  
       <div class="container">
            <h1>Contáctenos</h1>
            <div className="contact-form-container">
                <form id="contactForm" className="contact-form" novalidate>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre completo*</label>
                        <input type="text" id="nombre" name="nombre" className="form-control" required/>
                        <span className="error" id="nombreError">Por favor ingrese su nombre completo</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico*</label>
                        <input type="email" id="email" name="email" className="form-control" required/>
                        <span class="error" id="emailError">Por favor ingrese un correo válido</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="tel" id="telefono" name="telefono" className="form-control" pattern="[0-9]{9}"/>
                        <span className="error" id="telefonoError">Ingrese un número de 9 dígitos</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="asunto">Asunto*</label>
                        <select id="asunto" name="asunto" className="form-control" required>
                            <option value="">Seleccione un asunto</option>
                            <option value="consulta">Consulta general</option>
                            <option value="productos">Información de productos</option>
                            <option value="servicios">Información de servicios</option>
                            <option value="reclamo">Reclamo o sugerencia</option>
                        </select>
                        <span class="error" id="asuntoError">Por favor seleccione un asunto</span>
                    </div>

                    <div class="form-group">
                        <label for="mensaje">Mensaje*</label>
                        <textarea id="mensaje" name="mensaje" class="form-control" rows="5" required></textarea>
                        <span class="error" id="mensajeError">Por favor ingrese su mensaje</span>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                    </div>
                </form>

                <div class="contact-info">
                    <h3>Información de contacto</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Av. Las Mascotas 123, Lima, Perú</p>
                    <p><i class="fas fa-phone"></i> +51 977 549 783</p>
                    <p><i class="fas fa-envelope"></i> contacto@petshop.com</p>
                    <p><i class="fas fa-clock"></i> Lunes a Sábado: 9:00 am - 8:00 pm</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactoPage;