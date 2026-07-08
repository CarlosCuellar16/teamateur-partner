import React from 'react';

export default function App() {
  const styles = {
    body: { backgroundColor: '#0a1014', color: '#ffffff', fontFamily: 'Arial, sans-serif', padding: '20px' },
    header: { display: 'flex', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #1e293b' },
    hero: { textAlign: 'center', padding: '80px 20px' },
    titulo: { fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' },
    subtitulo: { fontSize: '1.2rem', color: '#94a3b8', marginBottom: '40px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1100px', margin: '0 auto' },
    card: { backgroundColor: '#111b21', padding: '30px', borderRadius: '15px', border: '1px solid #334155', textAlign: 'center' },
    precio: { fontSize: '2.5rem', fontWeight: 'bold', color: '#14b8a6', margin: '15px 0' },
    boton: { backgroundColor: '#14b8a6', color: '#000', padding: '15px 30px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h2 style={{margin: 0}}>TEAMATEUR</h2>
        <nav>Torneos | Canchas | Jugadores | <span style={{color: '#14b8a6'}}>Partner</span></nav>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.titulo}>Partner Elite de Teamateur</h1>
        <p style={styles.subtitulo}>Elige tu nivel y empieza a ganar beneficios exclusivos en la plataforma líder de fútbol amateur.</p>
        <button style={styles.boton}>Convertirme en Partner</button>
      </section>

      <div style={styles.grid}>
        {[
          { nivel: 'BRONCE', margen: '10%', desc: 'Capacitación inicial, soporte prioritario y material comercial básico.' },
          { nivel: 'PLATA', margen: '20%', desc: 'Soporte prioritario, acceso anticipado y material comercial exclusivo.' },
          { nivel: 'ORO', margen: '30%', desc: 'Soporte VIP, reuniones trimestrales, exclusividad territorial y premium.' }
        ].map((plan) => (
          <div key={plan.nivel} style={styles.card}>
            <h3>PARTNER {plan.nivel}</h3>
            <div style={styles.precio}>{plan.margen}</div>
            <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>{plan.desc}</p>
          </div>
        ))}
      </div>

      <footer style={{textAlign: 'center', marginTop: '100px', color: '#64748b'}}>
        <p>© 2026 Teamateur. La plataforma líder en Latinoamérica.</p>
      </footer>
    </div>
  );
}
