const enigmes = [
   {"reponse":"Loïc A.","x":6.028213,"y":49.325439},
  {"reponse":"Emilie","x":-61.533906,"y":16.235543},
  {"reponse":"Inès","x":0,"y":0},
  {"reponse":"Tiffaine","x":0,"y":0},
  {"reponse":"Maureen","x":7.32398,"y":48.55020},
  {"reponse":"Aude","x":7.770985,"y":48.577904},
  {"reponse":"Thomas","x":7.211040,"y":48.463652},
  {"reponse":"Louis","x":7.58785,"y":47.57108},
  {"reponse":"Maxime","x":4.031395,"y":44.212084},
  {"reponse":"Lucille","x":7.782167,"y":48.612633},
  {"reponse":"Alexis D.","x":-1.462296,"y":43.596822},
  {"reponse":"Elsa","x":7.536903,"y":47.601545},
  {"reponse":"Paul","x":2.336538,"y":48.836212},
  {"reponse":"Léane","x":6.174336,"y":48.666258},
  {"reponse":"Marius","x":-16.851043,"y":28.342582},
  {"reponse":"Mathilde G.","x":0,"y":0},
  {"reponse":"François","x":4.326738,"y":47.489347},
  {"reponse":"Cyrille","x":4.853913,"y":45.775056},
  {"reponse":"Heloise","x":-3.970047,"y":48.726174},
  {"reponse":"Louise","x":-1.091105,"y":49.114162},
  {"reponse":"Hugo","x":7.314227,"y":48.620636},
  {"reponse":"Juliette","x":-1.591555,"y":48.838821},
  {"reponse":"Arthur","x":0,"y":0},
  {"reponse":"Martial","x":6.020167,"y":43.081437},
  {"reponse":"Alexis L.","x":-0.567723,"y":44.830454},
  {"reponse":"Anaïs","x":-1.53755,"y":43.48233},
  {"reponse":"Nicolas","x":5.769377,"y":49.512950},
  {"reponse":"Manon","x":7.751259,"y":48.526725},
  {"reponse":"Lydie","x":0,"y":0},
  {"reponse":"Yanis","x":5.323716,"y":43.364350},
  {"reponse":"Justine","x":6.833149,"y":47.969665},
  {"reponse":"Noah","x":2.253022,"y":48.841423},
  {"reponse":"Marie","x":0,"y":0},
  {"reponse":"Maelle","x":5.88706,"y":45.30820},
  {"reponse":"Mathilde R.","x":4.082765,"y":48.303106},
  {"reponse":"Jules","x":6.841489,"y":47.463010},
  {"reponse":"Antonin","x":3.812464,"y":43.622208},
  {"reponse":"Cécile","x":7.3351600,"y":47.7503179},
  {"reponse":"Lou-Anne","x":1.596125,"y":50.248602},
  {"reponse":"Théana","x":22.936929,"y":39.359075},
  {"reponse":"Julian","x":4.928520,"y":43.968094},
  {"reponse":"Emma R.","x":-1.163455,"y":44.663379},
  {"reponse":"Emma S.","x":5.146408,"y":48.105266},
  {"reponse":"Loïc S.","x":6.405377,"y":45.227917},
  {"reponse":"Blanche","x":2.182789,"y":48.700015},
  {"reponse":"Ambre","x":0,"y":0},
  {"reponse":"Léa","x":0,"y":0},
  {"reponse":"Eli.e","x":0,"y":0}
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
