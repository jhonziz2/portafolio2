import { useEffect, useState } from 'react'
import './App.css'
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiPhone,
  FiSun,
} from 'react-icons/fi'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('theme', theme)
    const body = window.document.body
    body.classList.remove('body--light', 'body--dark')
    body.classList.add(theme === 'light' ? 'body--light' : 'body--dark')
  }, [theme])

  const isLight = theme === 'light'

  return (
    <div className="page">
      <header className="hero" id="inicio">
        <nav className="navbar">
          <div className="navbar__brand">Jhon Narváez</div>
          <ul className="navbar__links">
            <li>
              <a href="#sobre-mi">Sobre mí</a>
            </li>
            <li>
              <a href="#proyectos">Experiencia</a>
            </li>
            <li>
              <a href="#proyectos-personales">Proyectos</a>
            </li>
            <li>
              <a href="#cursos">Cursos</a>
            </li>
            <li>
              <a href="#contacto" className="btn btn--small">
                Contáctame
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn--ghost btn--small navbar__toggle"
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            aria-label={isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
          >
            {isLight ? <FiMoon size={14} /> : <FiSun size={14} />}
            <span>{isLight ? 'Noche' : 'Día'}</span>
          </button>
        </nav>

        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__tag">Ingeniero de Software · Desarrollador Web</p>
            <h1>
              Construyo soluciones web eficientes, escalables y centradas en las
              personas.
            </h1>
            <p className="hero__subtitle">
              Ingeniero de Software con experiencia en desarrollo de aplicaciones
              web, análisis de datos e integración de modelos de IA para automatizar
              procesos y mejorar la toma de decisiones.
            </p>
            <div className="hero__actions">
              <a href="#proyectos" className="btn">
                Ver proyectos
              </a>
              <a href="#contacto" className="btn btn--ghost">
                Hablemos
              </a>
            </div>
            <div className="hero__contact">
              <span className="hero__contact-item">
                <FiMapPin size={14} />
                Quito, Ecuador
              </span>
              <span className="hero__contact-item">
                <FiMail size={14} />
                <a href="mailto:jhon.shaco@gmail.com">jhon.shaco@gmail.com</a>
              </span>
              <span className="hero__contact-item">
                <FiPhone size={14} />
                <a href="tel:+593996016110">+593 99 601 6110</a>
              </span>
              <span className="hero__contact-item">
                <FiLinkedin size={14} />
                <a
                  href="https://www.linkedin.com/in/jhon-narz"
                  target="_blank"
                  rel="noreferrer"
                >
                  /jhon-narz
                </a>
              </span>
              <span className="hero__contact-item">
                <FiGithub size={14} />
                <a
                  href="https://github.com/jhonziz2"
                  target="_blank"
                  rel="noreferrer"
                >
                  /jhonziz2
                </a>
              </span>
            </div>
          </div>
          <div className="hero__photo-card">
            <div className="hero__photo-wrapper">
              <img src="/img/foto-perfil.jpg" alt="Foto de Jhon Alejandro Narváez Revelo" />
            </div>
            <div className="hero__badge">
              <p className="hero__name">JHON ALEJANDRO NARVÁEZ REVELO</p>
              <p className="hero__role">Ingeniero de Software</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="sobre-mi" className="section section--alt">
          <div className="section__header">
            <h2>Sobre mí</h2>
            <p>
              Me especializo en el análisis, diseño, desarrollo e implementación de
              sistemas de software, combinando pensamiento crítico, creatividad y un
              fuerte compromiso con la innovación y la responsabilidad social.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3>Perfil profesional</h3>
              <ul className="list">
                <li>
                  Experiencia creando soluciones tecnológicas eficientes y
                  escalables para entornos académicos y productivos.
                </li>
                <li>
                  Capacidad para colaborar con equipos multidisciplinarios y
                  contextos globales.
                </li>
                <li>
                  Enfoque en soluciones éticas, sostenibles y orientadas a
                  resultados medibles.
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Formación académica</h3>
              <ul className="timeline">
                <li>
                  <h4>Ingeniería de Software</h4>
                  <p>Escuela Superior Politécnica de Chimborazo · Feb 2026</p>
                </li>
                <li>
                  <h4>Técnico de Servicio - Administración de Sistemas</h4>
                  <p>Bachillerato Don Bosco · May 2015 – Ago 2017</p>
                </li>
              </ul>
              <h3>Idiomas</h3>
              <ul className="list list--inline">
              <li>
                Español (Nativo) <br />
                <li>Inglés (B1)</li>
              </li>
              </ul>
              
            </div>
          </div>
        </section>

        {/* Sección de habilidades reemplazada por cursos más abajo */}

        <section id="proyectos" className="section section--alt">
          <div className="section__header">
            <h2>Experiencia laboral</h2>
            <p>
              Trayectoria profesional reciente en desarrollo de software y análisis
              de datos, con foco en impacto real y mejora de procesos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="project-card">
              <div className="project-card__content">
                <h3>Desarrollador de software · ESPOCH</h3>
                <p className="project-card__meta">
                  ESPOCH · Agosto 2024 – Junio 2025
                </p>
                <p>
                  Desarrollo de soluciones web para el Decanato de Teleducación de la
                  ESPOCH, integrando modelos de IA para automatizar tareas académicas
                  y mejorar la planificación docente.
                </p>
                <ul className="list list--compact">
                  <li>
                    Desarrollo de una aplicación web con Flask y PostgreSQL para
                    automatizar la generación de descripciones académicas.
                  </li>
                  <li>
                    Implementación de un sistema de planificación semanal unificado,
                    optimizando la gestión y seguimiento de la carga docente.
                  </li>
                  <li>
                    Integración de motores de lenguaje natural, reduciendo en un 70 %
                    el tiempo de preparación de material académico.
                  </li>
                  <li>
                    Diseño de una arquitectura escalable con PostgreSQL y módulos de
                    generación de contenido asistido por IA.
                  </li>
                </ul>
              </div>
            </article>

            <article className="project-card project-card--secondary">
              <div className="project-card__content">
                <h3>Analista de datos · MIPC</h3>
                <p className="project-card__meta">MIPC · Enero 2022 – Enero 2024</p>
                <p>
                  Responsable del análisis y orquestación de datos para reportes
                  operativos y tableros ejecutivos, apoyando la toma de decisiones
                  estratégicas.
                </p>
                <ul className="list list--compact">
                  <li>
                    Diseño y optimización de consultas en PostgreSQL, mejorando los
                    tiempos de respuesta en reportes operativos.
                  </li>
                  <li>
                    Implementación de procesos ETL con Pentaho Data Integration para
                    integrar datos desde múltiples fuentes.
                  </li>
                  <li>
                    Creación de dashboards interactivos en Power BI para el
                    seguimiento de indicadores clave del negocio.
                  </li>
                  <li>
                    Apoyo en la integración y mantenimiento de bases de datos,
                    asegurando la integridad y disponibilidad de la información.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="proyectos-personales" className="section section--personal">
          <div className="section__header">
            <h2>Proyectos personales</h2>
            <p>
              Pequeños experimentos visuales y creativos que reflejan mi interés por
              el detalle y las interfaces atractivas.
            </p>
          </div>

          <div className="flex flex-col gap-6">
          <article className="project-card project-card--personal">
            <div className="project-card__image">
              <img src="/img/flor.png" alt="Vista del proyecto Flor CSS" />
            </div>
            <div className="project-card__content">
              <h3>Flor CSS · Animación en modo noche</h3>
              <p className="project-card__meta">HTML · CSS · Animaciones · Diseño creativo</p>
              <p>
                Microproyecto visual donde recreo una flor de neón con CSS puro, jugando
                con gradientes, sombras y transiciones suaves para simular iluminación y
                profundidad sobre un fondo oscuro.
              </p>
              <div className="project-card__links">
                <a
                  href="https://github.com/jhonziz2/flor_css"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--small"
                >
                  <FiGithub size={14} />
                  <span>Código en GitHub</span>
                </a>
                <a
                  href="https://jhonziz2.github.io/flor_css/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--small"
                >
                  <FiExternalLink size={14} />
                  <span>Ver demo</span>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card project-card--personal">
            <div className="project-card__image">
              <img src="/img/clima.png" alt="Vista del proyecto ClimaApp" />
            </div>
            <div className="project-card__content">
              <h3>ClimaApp · App del clima</h3>
              <p className="project-card__meta">React · Vite · API del clima · UI moderna</p>
              <p>
                Aplicación del clima con búsqueda por ciudad, sensación térmica, pronóstico
                por horas y 7 días, humedad, viento, UV y amanecer/atardecer. Interfaz
                tipo glassmorphism desplegada en Vercel.
              </p>
              <div className="project-card__links">
                <a
                  href="https://github.com/jhonziz2/tiempo-api"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--small"
                >
                  <FiGithub size={14} />
                  <span>Código en GitHub</span>
                </a>
                <a
                  href="https://tiempo-9lxx77wt7-jhoncitonarvaez-8667s-projects.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--small"
                >
                  <FiExternalLink size={14} />
                  <span>Ver demo</span>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card project-card--personal">
            <div className="project-card__image">
              <img src="/img/url.png" alt="Vista del proyecto SnipURL" />
            </div>
            <div className="project-card__content">
              <h3>SnipURL · Acortador de enlaces</h3>
              <p className="project-card__meta">Node.js · Backend · Frontend · Vercel</p>
              <p>
                Acortador de URLs: pega una URL larga, genera un enlace corto, comparte y
                rastrea. Los enlaces se almacenan en memoria. Desplegado en Vercel.
              </p>
              <div className="project-card__links">
                <a
                  href="https://github.com/jhonziz2/Acortador-link-"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--small"
                >
                  <FiGithub size={14} />
                  <span>Código en GitHub</span>
                </a>
                <a
                  href="https://acortador-link-one.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--small"
                >
                  <FiExternalLink size={14} />
                  <span>Ver demo</span>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card project-card--personal">
            <div className="project-card__image">
              <img src="/img/tetris.png" alt="Vista del proyecto Tetris" />
            </div>
            <div className="project-card__content">
              <h3>Tetris · Juego clásico en navegador</h3>
              <p className="project-card__meta">HTML5 · JavaScript · CSS · Sin dependencias</p>
              <p>
                Tetris implementado en HTML5 y JavaScript: tablero 10×20, piezas clásicas,
                puntuación, nivel, filas completadas y controles con teclado. Listo para
                jugar en cualquier navegador moderno.
              </p>
              <div className="project-card__links">
                <a
                  href="https://github.com/jhonziz2/tetrisv2"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--small"
                >
                  <FiGithub size={14} />
                  <span>Código en GitHub</span>
                </a>
                <a
                  href="https://jhonziz2.github.io/tetrisv2/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--small"
                >
                  <FiExternalLink size={14} />
                  <span>Ver demo</span>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card project-card--personal">
            <div className="project-card__image">
              <img src="/img/django.png" alt="Vista del proyecto TechNova" />
            </div>
            <div className="project-card__content">
              <h3>TechNova · Inventario</h3>
              <p className="project-card__meta">React · Vite · Django API · Vercel</p>
              <p>
                Frontend de inventario TechNova con React y Vite. Consume la API REST de
                Django desplegada en Render y está publicado en Vercel.
              </p>
              <div className="project-card__links">
                <a
                  href="https://github.com/jhonziz2/djangovercel"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--small"
                >
                  <FiGithub size={14} />
                  <span>Código en GitHub</span>
                </a>
                <a
                  href="https://djangovercel-nine.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--small"
                >
                  <FiExternalLink size={14} />
                  <span>Ver demo</span>
                </a>
              </div>
            </div>
          </article>
          </div>
        </section>

        <section id="cursos" className="section">
          <div className="section__header">
            <h2>Cursos y Masterclass</h2>
            <p>
              Formación continua que refuerza mis habilidades en desarrollo web,
              programación, seguridad y computación en la nube.
            </p>
          </div>

          <div className="card">
            <ul className="list">
              <li>Universidad de Lógica de Programación - Aprende 7 Lenguajes!</li>
              <li>Universidad JavaScript - De Cero a Experto JavaScript!</li>
              <li>El poder de Azure para el despliegue de nuestras aplicaciones web.</li>
              <li>Aplicación de la IA en la Forencia Digital.</li>
              <li>Responsive Web Design.</li>
              <li>Mega Curso de Python más de 86 horas y 785 Videos en Español.</li>
              <li>CyberSecurity Bootcamp: The Ultimate Beginner&apos;s Course.</li>
              <li>AMENAZAS DEL PHISHING.</li>
              <li>Universidad Desarrollo Web - FrontEnd Web Developer!</li>
              <li>Auditor ISO 27001 Fundamentals.</li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="section section--accent">
          <div className="section__header section__header--center">
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>
              Cuéntame sobre tu idea y te responderé lo antes posible. Estoy
              disponible para proyectos de desarrollo web, integración de datos e
              iniciativas con IA.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="contact-info">
              <h3>Información de contacto</h3>
              <ul className="list">
                <li>
                  <strong>Nombre:</strong> JHON ALEJANDRO NARVÁEZ REVELO
                </li>
                <li>
                  <strong>Teléfono:</strong>{' '}
                  <a href="tel:+593996016110">+593 99 601 6110</a>
                </li>
                <li>
                  <strong>Mail:</strong>{' '}
                  <a href="mailto:jhon.shaco@gmail.com">jhon.shaco@gmail.com</a>
                </li>
                <li>
                  <strong>Dirección:</strong> Quito, Ecuador
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/in/jhon-narz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    /jhon-narz
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href="https://github.com/jhonziz2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    /jhonziz2
                  </a>
                </li>
              </ul>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const data = new FormData(form)
                const nombre = data.get('nombre')
                const asunto = data.get('asunto')
                const mensaje = data.get('mensaje')
                const mailto = `mailto:jhon.shaco@gmail.com?subject=${encodeURIComponent(
                  `Contacto portafolio - ${asunto || 'Sin asunto'}`,
                )}&body=${encodeURIComponent(
                  `Nombre: ${nombre}\n\nMensaje:\n${mensaje}`,
                )}`
                window.location.href = mailto
              }}
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  placeholder="Proyecto, consulta, colaboración..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  placeholder="Cuéntame brevemente sobre tu proyecto o necesidad."
                  required
                />
              </div>
              <button type="submit" className="btn btn--full">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Jhon Alejandro Narváez Revelo. Construido
          con React y cuidado por los detalles.
        </p>
      </footer>
    </div>
  )
}

export default App
