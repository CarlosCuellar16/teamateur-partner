import React from 'react';

export default function App() {
  const styles = {
    body: { 
      backgroundColor: '#0a1014', 
      color: 'white', 
      fontFamily: 'sans-serif', 
      padding: '40px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '100vh'
    },
    titulo: { fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' },
    subtitulo: { fontSize: '1.5rem', color: '#2dd4bf', marginBottom: '40px', textAlign: 'center' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '1000px' },
    card: { backgroundColor: '#111b21', padding: '30px', borderRadius: '15px', border: '1px solid #334155', textAlign: 'center' },
    btn: { backgroundColor: '#0d9488', color: 'white', padding: '15px 30px', borderRadius: '50px', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', marginTop: '40px' }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.titulo}>Conviértete en Partner Elite de Teamateur</h1>
      <h2 style={styles.subtitulo}>Gana hasta un 30% de margen vendiendo la plataforma.</h2>
      
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>PARTNER BRONCE</h3>
          <p>10% margen</p>
        </div>
        <div style={styles.card}>
          <h3>PARTNER PLATA</h3>
          <p>20% margen</p>
        </div>
        <div style={styles.card}>
          <h3>PARTNER ORO</h3>
          <p>30% margen</p>
        </div>
      </div>

      <button style={styles.btn}>Hablar con un asesor</button>
    </div>
  );
}