
const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Aplicacion desplegada con Dokploy',
    institucion: 'Universidad del Quindio',
    programa: 'Ingenieria de Sistemas y Computacion',
    curso: 'Administracion de Infraestructura de TI',
    plataforma: 'Dokploy PaaS',
    version: '1.0.0',
    fecha: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    estado: 'saludable',
    plataforma: 'Dokploy',
    version: '1.0.0'
  });
});

app.get('/info', (req, res) => {
  res.json({
    node_version: process.version,
    plataforma: process.platform,
    arquitectura: process.arch,
    memoria_total_mb: Math.round(os.totalmem() / 1024 / 1024)
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Aplicacion ejecutandose en el puerto ${port}`);
});
