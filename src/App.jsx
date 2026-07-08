import './App.css';
import logo from '../images/logo.png'; // Ajusta la ruta a tu carpeta

export default function App() {
  return (
    <div className="landing-container">
      <img src={logo} alt="Teamateur" style={{ height: '60px', marginBottom: '20px' }} />
      
      <h1 className="titulo">Conviértete en Partner Elite de Teamateur y lidera los torneos de fútbol de tu ciudad</h1>
      <p className="subtitulo">Gana hasta un 30% de margen vendiendo la plataforma líder para organizar torneos de fútbol amateur.</p>

      <div className="grid-planes">
        {/* BRONCE */}
        <div className="card">
          <h2>PARTNER BRONCE</h2>
          <div className="price-tag">10% DE BENEFICIO</div>
          <p>Precio Partner: USD 280,80/año</p>
          <ul>
            <li>✅ Hasta 1.200 jugadores/año</li>
            <li>✅ Torneos ilimitados</li>
            <li>✅ Capacitación inicial</li>
            <li>✅ Soporte prioritario</li>
            <li>✅ Material comercial</li>
          </ul>
          <p style={{marginTop: '20px', fontWeight: 'bold'}}>5 TORNEOS VENDIDOS</p>
        </div>

        {/* PLATA */}
        <div className="card">
          <h2>PARTNER PLATA</h2>
          <div className="price-tag">20% DE BENEFICIO</div>
          <p>Precio Partner: USD 249,60/año</p>
          <ul>
            <li>✅ Todo Bronce</li>
            <li>✅ 20% descuento</li>
            <li>✅ Prioridad en soporte</li>
            <li>✅ Acceso anticipado a funciones</li>
          </ul>
          <p style={{marginTop: '20px', fontWeight: 'bold'}}>10 TORNEOS VENDIDOS</p>
        </div>

        {/* ORO */}
        <div className="card">
          <h2>PARTNER ORO</h2>
          <div className="price-tag">30% DE BENEFICIO</div>
          <p>Precio Partner: USD 218,40/año</p>
          <ul>
            <li>✅ Todo Plata</li>
            <li>✅ 30% descuento</li>
            <li>✅ Soporte VIP</li>
            <li>✅ Reuniones trimestrales</li>
            <li>✅ Exclusividad territorial</li>
          </ul>
          <p style={{marginTop: '20px', fontWeight: 'bold'}}>15 TORNEOS VENDIDOS</p>
        </div>
      </div>

      <button className="btn-primary">Quiero ser Partner Elite</button>
      
      <div style={{ marginTop: '40px' }}>
        <p>¿Tienes dudas? Un asesor puede ayudarte a elegir la mejor opción según tu organización.</p>
        <a href="#" style={{ color: '#14b8a6', fontWeight: 'bold' }}>Hablar con un asesor</a>
      </div>
    </div>
  );
}