// api/enigmes.js - Vercel Serverless Function
const enigmes = require('../data/enigmes.json');

module.exports = (req, res) => {
    // Configuration CORS pour permettre l'accès depuis votre domaine
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');
    
    // Retourner les énigmes
    res.status(200).json(enigmes);
};