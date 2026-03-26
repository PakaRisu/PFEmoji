const enigmes = [
   {"reponse":"Loïc A.","x":2.5,"y":48},
  {"reponse":"Emilie","x":2.5,"y":48},
  {"reponse":"Inès","x":2.5,"y":48},
  {"reponse":"Tiffaine","x":2.5,"y":48},
  {"reponse":"Maureen","x":2.5,"y":48},
  {"reponse":"Aude","x":2.5,"y":48},
  {"reponse":"Thomas","x":2.5,"y":48},
  {"reponse":"Louis","x":2.5,"y":48},
  {"reponse":"Maxime","x":2.5,"y":48},
  {"reponse":"Lucille","x":2.5,"y":48},
  {"reponse":"Alexis D.","x":2.5,"y":48},
  {"reponse":"Elsa","x":2.5,"y":48},
  {"reponse":"Paul","x":2.5,"y":48},
  {"reponse":"Léane","x":2.5,"y":48},
  {"reponse":"Marius","x":2.5,"y":48},
  {"reponse":"Mathilde G.","x":2.5,"y":48},
  {"reponse":"François","x":2.5,"y":48},
  {"reponse":"Cyrille","x":2.5,"y":48},
  {"reponse":"Heloise","x":2.5,"y":48},
  {"reponse":"Louise","x":2.5,"y":48},
  {"reponse":"Hugo","x":2.5,"y":48},
  {"reponse":"Juliette","x":2.5,"y":48},
  {"reponse":"Arthur","x":2.5,"y":48},
  {"reponse":"Martial","x":20.2,"y":20},
  {"reponse":"Alexis L.","x":30.2,"y":48},
  {"reponse":"Anaïs","x":2.5,"y":48},
  {"reponse":"Nicolas","x":2.5,"y":48},
  {"reponse":"Manon","x":2.5,"y":20},
  {"reponse":"Lydie","x":2.5,"y":48},
  {"reponse":"Yanis","x":2.5,"y":48},
  {"reponse":"Justine","x":2.5,"y":48},
  {"reponse":"Noah","x":2.5,"y":48},
  {"reponse":"Marie","x":2.5,"y":48},
  {"reponse":"Maelle","x":2.5,"y":48},
  {"reponse":"Mathilde R.","x":2.5,"y":48},
  {"reponse":"Jules","x":2.5,"y":48},
  {"reponse":"Antonin","x":2.5,"y":48},
  {"reponse":"Cécile","x":2.5,"y":48},
  {"reponse":"Lou-Anne","x":2.5,"y":48},
  {"reponse":"Théana","x":2.5,"y":48},
  {"reponse":"Julian","x":2.5,"y":48},
  {"reponse":"Emma R.","x":2.5,"y":48},
  {"reponse":"Emma S.","x":2.5,"y":48},
  {"reponse":"Loïc S.","x":2.5,"y":48},
  {"reponse":"Blanche","x":2.5,"y":48},
  {"reponse":"Ambre","x":2.5,"y":48},
  {"reponse":"Léa","x":2.5,"y":48},
  {"reponse":"Eli.e","x":2.5,"y":48}
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
