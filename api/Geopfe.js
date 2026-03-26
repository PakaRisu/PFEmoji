const enigmes = [
   {"reponse":"Loïc A.","x":10.2,"y":10},
  {"reponse":"Emilie","x":10.2,"y":10},
  {"reponse":"Inès","x":10.2,"y":10},
  {"reponse":"Tiffaine","x":10.2,"y":10},
  {"reponse":"Maureen","x":10.2,"y":10},
  {"reponse":"Aude","x":10.2,"y":10},
  {"reponse":"Thomas","x":10.2,"y":10},
  {"reponse":"Louis","x":10.2,"y":10},
  {"reponse":"Maxime","x":10.2,"y":10},
  {"reponse":"Lucille","x":10.2,"y":10},
  {"reponse":"Alexis D.","x":10.2,"y":10},
  {"reponse":"Elsa","x":10.2,"y":10},
  {"reponse":"Paul","x":10.2,"y":10},
  {"reponse":"Léane","x":10.2,"y":10},
  {"reponse":"Marius","x":10.2,"y":10},
  {"reponse":"Mathilde G.","x":10.2,"y":10},
  {"reponse":"François","x":10.2,"y":10},
  {"reponse":"Cyrille","x":10.2,"y":10},
  {"reponse":"Heloise","x":10.2,"y":10},
  {"reponse":"Louise","x":10.2,"y":10},
  {"reponse":"Hugo","x":10.2,"y":10},
  {"reponse":"Juliette","x":10.2,"y":10},
  {"reponse":"Arthur","x":10.2,"y":10},
  {"reponse":"Martial","x":20.2,"y":20},
  {"reponse":"Alexis L.","x":30.2,"y":10},
  {"reponse":"Anaïs","x":10.2,"y":10},
  {"reponse":"Nicolas","x":10.2,"y":10},
  {"reponse":"Manon","x":10.2,"y":20},
  {"reponse":"Lydie","x":10.2,"y":10},
  {"reponse":"Yanis","x":10.2,"y":10},
  {"reponse":"Justine","x":10.2,"y":10},
  {"reponse":"Noah","x":10.2,"y":10},
  {"reponse":"Marie","x":10.2,"y":10},
  {"reponse":"Maelle","x":10.2,"y":10},
  {"reponse":"Mathilde R.","x":10.2,"y":10},
  {"reponse":"Jules","x":10.2,"y":10},
  {"reponse":"Antonin","x":10.2,"y":10},
  {"reponse":"Cécile","x":10.2,"y":10},
  {"reponse":"Lou-Anne","x":10.2,"y":10},
  {"reponse":"Théana","x":10.2,"y":10},
  {"reponse":"Julian","x":10.2,"y":10},
  {"reponse":"Emma R.","x":10.2,"y":10},
  {"reponse":"Emma S.","x":10.2,"y":10},
  {"reponse":"Loïc S.","x":10.2,"y":10},
  {"reponse":"Blanche","x":10.2,"y":10},
  {"reponse":"Ambre","x":10.2,"y":10},
  {"reponse":"Léa","x":10.2,"y":10},
  {"reponse":"Eli.e","x":10.2,"y":10}
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
