const enigmes = [
    // Format : { "reponse": "Prénom", "image": "/images/prenom.jpg" }
  {"reponse":"Loïc A.","image":"/images/LoicA.jpg"},
  {"reponse":"Emilie","image":"/images/Emilie.jpg"},
  {"reponse":"Inès","image":"/images/Ines.jpg"},
  {"reponse":"Tiffaine","image":"/images/Tiffaine.jpg"},
  {"reponse":"Maureen","image":"/images/Maureen.jpg"},
  {"reponse":"Aude","image":"/images/Aude.jpg"},
  {"reponse":"Thomas","image":"/images/Thomas.jpg"},
  {"reponse":"Louis","image":"/images/Louis.jpg"},
  {"reponse":"Maxime","image":"/images/Maxime.jpg"},
  {"reponse":"Lucille","image":"/images/Lucille.jpg"},
  {"reponse":"Alexis D.","image":"/images/AlexisD.jpg"},
  {"reponse":"Elsa","image":"/images/Elsa.jpg"},
  {"reponse":"Paul","image":"/images/Paul.jpg"},
  {"reponse":"Léane","image":"/images/Leane.jpg"},
  {"reponse":"Marius","image":"/images/Marius.jpg"},
  {"reponse":"Mathilde G.","image":"/images/MathildeG.jpg"},
  {"reponse":"François","image":"/images/François.jpg"},
  {"reponse":"Cyrille","image":"/images/Cyrille.jpg"},
  {"reponse":"Heloise","image":"/images/Heloise.jpg"},
  {"reponse":"Louise","image":"/images/Louise.jpg"},
  {"reponse":"Hugo","image":"/images/Hugo.jpg"},
  {"reponse":"Juliette","image":"/images/Juliette.jpg"},
  {"reponse":"Arthur","image":"/images/Arthur.jpg"},
  {"reponse":"Martial","image":"/images/Martial.jpg"},
  {"reponse":"Alexis L.","image":"/images/AlexisL.jpg"},
  {"reponse":"Anaïs","image":"/images/Anais.jpg"},
  {"reponse":"Nicolas","image":"/images/Nicolas.jpg"},
  {"reponse":"Lydie","image":"/images/Lydie.jpg"},
  {"reponse":"Yanis","image":"/images/Yanis.jpg"},
  {"reponse":"Justine","image":"/images/Justine.jpg"},
  {"reponse":"Noah","image":"/images/Noah.jpg"},
  {"reponse":"Marie","image":"/images/Marie.jpg"},
  {"reponse":"Maelle","image":"/images/Maelle.jpg"},
  {"reponse":"Mathilde R.","image":"/images/MathildeR.jpg"},
  {"reponse":"Jules","image":"/images/Jules.jpg"},
  {"reponse":"Antonin","image":"/images/Antonin.jpg"},
  {"reponse":"Cécile","image":"/images/Cecile.jpg"},
  {"reponse":"Lou-Anne","image":"/images/LouAnne.jpg"},
  {"reponse":"Théana","image":"/images/Theana.jpg"},
  {"reponse":"Julian","image":"/images/Julian.jpg"},
  {"reponse":"Emma R.","image":"/images/EmmaR.jpg"},
  {"reponse":"Emma S.","image":"/images/EmmaS.jpg"},
  {"reponse":"Loïc S.","image":"/images/LoicS.jpg"},
  {"reponse":"Blanche","image":"/images/Blanche.jpg"},
  {"reponse":"Ambre","image":"/images/Ambre.jpg"},
  {"reponse":"Léa","image":"/images/Lea.jpg"},
  {"reponse":"Eli.e","image":"/images/Elie.jpg"}
];

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') { res.status(200).end(); return; }
    if (req.method !== 'GET')     { res.status(405).json({ error: 'Method not allowed' }); return; }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(enigmes);
}
