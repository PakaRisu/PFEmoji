const enigmes = [
   {"reponse":"Loïc A.","x":46.5,"y":2.5},
  {"reponse":"Emilie","x":46.5,"y":2.5},
  {"reponse":"Inès","x":46.5,"y":2.5},
  {"reponse":"Tiffaine","x":46.5,"y":2.5},
  {"reponse":"Maureen","x":46.5,"y":2.5},
  {"reponse":"Aude","x":46.5,"y":2.5},
  {"reponse":"Thomas","x":46.5,"y":2.5},
  {"reponse":"Louis","x":46.5,"y":2.5},
  {"reponse":"Maxime","x":46.5,"y":2.5},
  {"reponse":"Lucille","x":46.5,"y":2.5},
  {"reponse":"Alexis D.","x":46.5,"y":2.5},
  {"reponse":"Elsa","x":46.5,"y":2.5},
  {"reponse":"Paul","x":46.5,"y":2.5},
  {"reponse":"Léane","x":46.5,"y":2.5},
  {"reponse":"Marius","x":46.5,"y":2.5},
  {"reponse":"Mathilde G.","x":46.5,"y":2.5},
  {"reponse":"François","x":46.5,"y":2.5},
  {"reponse":"Cyrille","x":46.5,"y":2.5},
  {"reponse":"Heloise","x":46.5,"y":2.5},
  {"reponse":"Louise","x":46.5,"y":2.5},
  {"reponse":"Hugo","x":46.5,"y":2.5},
  {"reponse":"Juliette","x":46.5,"y":2.5},
  {"reponse":"Arthur","x":46.5,"y":2.5},
  {"reponse":"Martial","x":20.2,"y":20},
  {"reponse":"Alexis L.","x":30.2,"y":2.5},
  {"reponse":"Anaïs","x":46.5,"y":2.5},
  {"reponse":"Nicolas","x":46.5,"y":2.5},
  {"reponse":"Manon","x":46.5,"y":20},
  {"reponse":"Lydie","x":46.5,"y":2.5},
  {"reponse":"Yanis","x":46.5,"y":2.5},
  {"reponse":"Justine","x":46.5,"y":2.5},
  {"reponse":"Noah","x":46.5,"y":2.5},
  {"reponse":"Marie","x":46.5,"y":2.5},
  {"reponse":"Maelle","x":46.5,"y":2.5},
  {"reponse":"Mathilde R.","x":46.5,"y":2.5},
  {"reponse":"Jules","x":46.5,"y":2.5},
  {"reponse":"Antonin","x":46.5,"y":2.5},
  {"reponse":"Cécile","x":46.5,"y":2.5},
  {"reponse":"Lou-Anne","x":46.5,"y":2.5},
  {"reponse":"Théana","x":46.5,"y":2.5},
  {"reponse":"Julian","x":46.5,"y":2.5},
  {"reponse":"Emma R.","x":46.5,"y":2.5},
  {"reponse":"Emma S.","x":46.5,"y":2.5},
  {"reponse":"Loïc S.","x":46.5,"y":2.5},
  {"reponse":"Blanche","x":46.5,"y":2.5},
  {"reponse":"Ambre","x":46.5,"y":2.5},
  {"reponse":"Léa","x":46.5,"y":2.5},
  {"reponse":"Eli.e","x":46.5,"y":2.5}
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
