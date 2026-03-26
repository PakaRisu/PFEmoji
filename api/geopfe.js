const enigmes = [
   {"reponse":"Loïc A.","x":-46.5,"y":-50},
  {"reponse":"Emilie","x":-46.5,"y":-50},
  {"reponse":"Inès","x":-46.5,"y":-50},
  {"reponse":"Tiffaine","x":-46.5,"y":-50},
  {"reponse":"Maureen","x":-46.5,"y":-50},
  {"reponse":"Aude","x":-46.5,"y":-50},
  {"reponse":"Thomas","x":-46.5,"y":-50},
  {"reponse":"Louis","x":-46.5,"y":-50},
  {"reponse":"Maxime","x":-46.5,"y":-50},
  {"reponse":"Lucille","x":-46.5,"y":-50},
  {"reponse":"Alexis D.","x":-46.5,"y":-50},
  {"reponse":"Elsa","x":-46.5,"y":-50},
  {"reponse":"Paul","x":-46.5,"y":-50},
  {"reponse":"Léane","x":-46.5,"y":-50},
  {"reponse":"Marius","x":-46.5,"y":-50},
  {"reponse":"Mathilde G.","x":-46.5,"y":-50},
  {"reponse":"François","x":-46.5,"y":-50},
  {"reponse":"Cyrille","x":-46.5,"y":-50},
  {"reponse":"Heloise","x":-46.5,"y":-50},
  {"reponse":"Louise","x":-46.5,"y":-50},
  {"reponse":"Hugo","x":-46.5,"y":-50},
  {"reponse":"Juliette","x":-46.5,"y":-50},
  {"reponse":"Arthur","x":-46.5,"y":-50},
  {"reponse":"Martial","x":20.2,"y":20},
  {"reponse":"Alexis L.","x":30.2,"y":-50},
  {"reponse":"Anaïs","x":-46.5,"y":-50},
  {"reponse":"Nicolas","x":-46.5,"y":-50},
  {"reponse":"Manon","x":-46.5,"y":20},
  {"reponse":"Lydie","x":-46.5,"y":-50},
  {"reponse":"Yanis","x":-46.5,"y":-50},
  {"reponse":"Justine","x":-46.5,"y":-50},
  {"reponse":"Noah","x":-46.5,"y":-50},
  {"reponse":"Marie","x":-46.5,"y":-50},
  {"reponse":"Maelle","x":-46.5,"y":-50},
  {"reponse":"Mathilde R.","x":-46.5,"y":-50},
  {"reponse":"Jules","x":-46.5,"y":-50},
  {"reponse":"Antonin","x":-46.5,"y":-50},
  {"reponse":"Cécile","x":-46.5,"y":-50},
  {"reponse":"Lou-Anne","x":-46.5,"y":-50},
  {"reponse":"Théana","x":-46.5,"y":-50},
  {"reponse":"Julian","x":-46.5,"y":-50},
  {"reponse":"Emma R.","x":-46.5,"y":-50},
  {"reponse":"Emma S.","x":-46.5,"y":-50},
  {"reponse":"Loïc S.","x":-46.5,"y":-50},
  {"reponse":"Blanche","x":-46.5,"y":-50},
  {"reponse":"Ambre","x":-46.5,"y":-50},
  {"reponse":"Léa","x":-46.5,"y":-50},
  {"reponse":"Eli.e","x":-46.5,"y":-50}
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
