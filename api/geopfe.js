const enigmes = [
   {"reponse":"Loïc A.","x":6.028213,"y":49.325439},
  {"reponse":"Emilie","x":0,"y":48},
  {"reponse":"Inès","x":0,"y":48},
  {"reponse":"Tiffaine","x":0,"y":48},
  {"reponse":"Maureen","x":0,"y":48},
  {"reponse":"Aude","x":7.770985,"y":48.577904},
  {"reponse":"Thomas","x":0,"y":48},
  {"reponse":"Louis","x":0,"y":48},
  {"reponse":"Maxime","x":4.031395,"y":44.212084},
  {"reponse":"Lucille","x":7.782167,"y":48.612633},
  {"reponse":"Alexis D.","x":0,"y":48},
  {"reponse":"Elsa","x":0,"y":48},
  {"reponse":"Paul","x":2.336538,"y":48.836212},
  {"reponse":"Léane","x":0,"y":48},
  {"reponse":"Marius","x":0,"y":48},
  {"reponse":"Mathilde G.","x":0,"y":48},
  {"reponse":"François","x":0,"y":48},
  {"reponse":"Cyrille","x":4.853913,"y":45.775056},
  {"reponse":"Heloise","x":0,"y":48},
  {"reponse":"Louise","x":0,"y":48},
  {"reponse":"Hugo","x":7.314227,"y":48.620636},
  {"reponse":"Juliette","x":0,"y":48},
  {"reponse":"Arthur","x":0,"y":48},
  {"reponse":"Martial","x":6.020167,"y":43.081437},
  {"reponse":"Alexis L.","x":-0.567723,"y":44.830454},
  {"reponse":"Anaïs","x":0,"y":48},
  {"reponse":"Nicolas","x":5.769377,"y":49.512950},
  {"reponse":"Manon","x":0,"y":20},
  {"reponse":"Lydie","x":0,"y":48},
  {"reponse":"Yanis","x":0,"y":48},
  {"reponse":"Justine","x":0,"y":48},
  {"reponse":"Noah","x":2.253022,"y":48.841423},
  {"reponse":"Marie","x":0,"y":48},
  {"reponse":"Maelle","x":0,"y":48},
  {"reponse":"Mathilde R.","x":0,"y":48},
  {"reponse":"Jules","x":6.841489,"y":47.463010},
  {"reponse":"Antonin","x":3.812464,"y":43.622208},
  {"reponse":"Cécile","x":0,"y":48},
  {"reponse":"Lou-Anne","x":1.596125,"y":50.248602},
  {"reponse":"Théana","x":22.936929,"y":39.359075},
  {"reponse":"Julian","x":0,"y":48},
  {"reponse":"Emma R.","x":-1.163455,"y":44.663379},
  {"reponse":"Emma S.","x":0,"y":48},
  {"reponse":"Loïc S.","x":6.405377,"y":45.227917},
  {"reponse":"Blanche","x":0,"y":48},
  {"reponse":"Ambre","x":0,"y":48},
  {"reponse":"Léa","x":0,"y":48},
  {"reponse":"Eli.e","x":0,"y":48}
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
