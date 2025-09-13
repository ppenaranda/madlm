import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado con éxito!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p>Ponte en contacto con nosotros</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h3>Dirección</h3>
                  <p>123 Calle Principal<br />Ciudad, País 12345</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@misitioweb.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div>
                  <h3>Horario</h3>
                  <p>Lunes - Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Enviar Mensaje</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
