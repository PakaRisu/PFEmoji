const enigmes = [
    // Format : { "reponse": "Prénom", "image": "/images/prenom.JPG" }
  {"reponse":"Loïc A.","image":"/images/LoicA.JPG"},
  {"reponse":"Emilie","image":"/images/Emilie.JPG"},
  {"reponse":"Inès","image":"/images/Ines.JPG"},
  {"reponse":"Tiffaine","image":"/images/Tiffaine.JPG"},
  {"reponse":"Maureen","image":"/images/Maureen.JPG"},
  {"reponse":"Aude","image":"/images/Aude.JPG"},
  {"reponse":"Thomas","image":"/images/Thomas.JPG"},
  {"reponse":"Louis","image":"/images/Louis.JPG"},
  {"reponse":"Maxime","image":"/images/Maxime.JPG"},
  {"reponse":"Lucille","image":"/images/Lucille.JPG"},
  {"reponse":"Alexis D.","image":"/images/AlexisD.JPG"},
  {"reponse":"Elsa","image":"/images/Elsa.JPG"},
  {"reponse":"Paul","image":"/images/Paul.JPG"},
  {"reponse":"Léane","image":"/images/Leane.JPG"},
  {"reponse":"Marius","image":"/images/Marius.JPG"},
  {"reponse":"Mathilde G.","image":"/images/MathildeG.JPG"},
  {"reponse":"François","image":"/images/François.JPG"},
  {"reponse":"Cyrille","image":"/images/Cyrille.JPG"},
  {"reponse":"Heloise","image":"/images/Heloise.JPG"},
  {"reponse":"Louise","image":"/images/Louise.JPG"},
  {"reponse":"Hugo","image":"/images/Hugo.JPG"},
  {"reponse":"Juliette","image":"/images/Juliette.JPG"},
  {"reponse":"Arthur","image":"/images/Arthur.JPG"},
  {"reponse":"Martial","image":"/images/Martial.JPG"},
  {"reponse":"Alexis L.","image":"/images/AlexisL.JPG"},
  {"reponse":"Anaïs","image":"/images/Anais.JPG"},
  {"reponse":"Nicolas","image":"/images/Nicolas.JPG"},
  {"reponse":"Lydie","image":"/images/Lydie.JPG"},
  {"reponse":"Yanis","image":"/images/Yanis.JPG"},
  {"reponse":"Justine","image":"/images/Justine.JPG"},
  {"reponse":"Noah","image":"/images/Noah.JPG"},
  {"reponse":"Marie","image":"/images/Marie.JPG"},
  {"reponse":"Maelle","image":"/images/Maelle.JPG"},
  {"reponse":"Mathilde R.","image":"/images/MathildeR.JPG"},
  {"reponse":"Jules","image":"/images/Jules.JPG"},
  {"reponse":"Antonin","image":"/images/Antonin.JPG"},
  {"reponse":"Cécile","image":"/images/Cecile.JPG"},
  {"reponse":"Lou-Anne","image":"/images/LouAnne.JPG"},
  {"reponse":"Théana","image":"/images/Theana.JPG"},
  {"reponse":"Julian","image":"/images/Julian.JPG"},
  {"reponse":"Emma R.","image":"/images/EmmaR.JPG"},
  {"reponse":"Emma S.","image":"/images/EmmaS.JPG"},
  {"reponse":"Loïc S.","image":"/images/LoicS.JPG"},
  {"reponse":"Blanche","image":"/images/Blanche.JPG"},
  {"reponse":"Ambre","image":"/images/Ambre.JPG"},
  {"reponse":"Léa","image":"/images/Lea.JPG"},
  {"reponse":"Eli.e","image":"/images/Elie.JPG"}
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
