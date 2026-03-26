const enigmes = [
    // Format : { "reponse": "Prénom", "x": longitude, "y": latitude }
    // Exemples à remplacer par les vrais PFE :
    { "reponse": "Alice",   "x":  2.3522,  "y": 48.8566  },
    { "reponse": "Bob",     "x": -0.1276,  "y": 51.5074  }, 
    { "reponse": "Charlie", "x": 13.4050,  "y": 52.5200  },
];

export default function handler(req, res) {
    // Configuration CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Gérer les requêtes OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Gérer uniquement GET
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    // Retourner les énigmes
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(enigmes);
}
