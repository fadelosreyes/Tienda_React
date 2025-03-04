import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Tienda Electrónica. Todos los derechos reservados.</p>
        
        <div className="footer-links">
          <a href="/privacy-policy">Política de Privacidad</a> | 
          <a href="/terms-of-service"> Términos de Servicio</a>
        </div>
        
        <div className="contact-info">
          <p>Dirección: Calle Ficticia 123, Ciudad Inventada, País Imaginario</p>
          <p>Teléfono: +34 912 345 678</p>
          <p>Correo electrónico: contacto@tiendaficticia.com</p>
        </div>
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
