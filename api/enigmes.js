// api/enigmes.js - Vercel Serverless Function
// On met les énigmes directement dans le code pour éviter les problèmes de require()

const enigmes = [
  {"reponse":"Loïc A.","emojis":["⛰","⛏","🏉","🌳"]},
  {"reponse":"Emilie","emojis":["🏝","⚓","🌷","📚"]},
  {"reponse":"Inès","emojis":["❓","❓","❓","❓"]},
  {"reponse":"Tiffaine","emojis":["⚡","🌲","🏃‍","🚸"]},
  {"reponse":"Maureen","emojis":["🥨","🏡","♿","🏞"]},
  {"reponse":"Aude","emojis":["🛒","🥨","🌡","🤝"]},
  {"reponse":"Thomas","emojis":["👨‍🌾","🔄","🏞","🛤"]},
  {"reponse":"Louis","emojis":["🏙","🌉","🛏","🇨🇭"]},
  {"reponse":"Maxime","emojis":["🏞","🌰","⛏","🌳"]},
  {"reponse":"Lucille","emojis":["🏭","🖨","🥨","💚"]},
  {"reponse":"Alexis D.","emojis":["⛱","🌊","🏘","🌲"]},
  {"reponse":"Elsa","emojis":["✈","🚗","🇫🇷","🇨🇭","🇩🇪"]},
  {"reponse":"Paul","emojis":["🌠","🔎","🔭","🗼"]},
  {"reponse":"Léane","emojis":["🏙","🏭","️🔀","🚶‍♀"]},
  {"reponse":"Marius","emojis":["🏝","⛰","👨‍🌾","🇪🇸"]},
  {"reponse":"Mathilde G.","emojis":["🏚","🌲","🚑","🧠"]},
  {"reponse":"François","emojis":["🏥","👨‍🎨","🛏","🧠"]},
  {"reponse":"Cyrille","emojis":["🍂","🦁","🌼","☠"]},
  {"reponse":"Heloise","emojis":["🌊","👨‍🌾","🐟","👩‍🏫"]},
  {"reponse":"Louise","emojis":["🎟","🔲","🎭","🔦"]},
  {"reponse":"Hugo","emojis":["🥾","⛰","🏰","🥨"]},
  {"reponse":"Juliette","emojis":["🏙","👩‍🌾","🏫","🍽"]},
  {"reponse":"Arthur","emojis":["👨‍🎨","🏭","🏰","🇩🇪"]},
  {"reponse":"Martial","emojis":["🔫","🌅","🌴","🥁"]},
  {"reponse":"Alexis L.","emojis":["🛒","🍽","🏙","🟥"]},
  {"reponse":"Anaïs","emojis":["🏟","🤾","🚌","🛒"]},
  {"reponse":"Nicolas","emojis":["🏙","🚂","🚗","🇱🇺"]},
  {"reponse":"Manon","emojis":["🚧","⏏","🏕","🥨"]},
  {"reponse":"Lydie","emojis":["❓","❓","❓","❓"]},
  {"reponse":"Yanis","emojis":["👨‍🎨","🔥","🛤","🧱"]},
  {"reponse":"Justine","emojis":["🏭","🏔","🐑","🧣"]},
  {"reponse":"Noah","emojis":["👨‍🌾","🏙","♻","⚽"]},
  {"reponse":"Marie","emojis":["❓","❓","❓","❓"]},
  {"reponse":"Maelle","emojis":["🏔","🥾","🛏","🏞"]},
  {"reponse":"Mathilde R.","emojis":["3️⃣","👩‍👧‍👦","‍🏘","🧱"]},
  {"reponse":"Jules","emojis":["🏭","🚗","🦁","💧"]},
  {"reponse":"Antonin","emojis":["💧","🏟","🏙","👨‍🎓"]},
  {"reponse":"Cécile","emojis":["🤽‍♀️","🧱","👨‍🎨","🥨"]},
  {"reponse":"Lou-Anne","emojis":["🌅","🐦","🌊","🔭"]},
  {"reponse":"Théana","emojis":["⛴","👩‍🎓","🏙","🇬🇷"]},
  {"reponse":"Julian","emojis":["🎡","🏭","🌊","🌾"]},
  {"reponse":"Emma R.","emojis":["🏖","🐠","🔎","🌴"]},
  {"reponse":"Emma S.","emojis":["🤾‍♂️","🏙","🔀","🌳"]},
  {"reponse":"Loïc S.","emojis":["🏔","🏢","⛷","🌄"]},
  {"reponse":"Blanche","emojis":["💧","🎓","🏞","🌿"]},
  {"reponse":"Ambre","emojis":["🏭","🏔","🚠","🏗"]},
  {"reponse":"Léa","emojis":["📚","📽","💃","🎶"]},
  {"reponse":"Eli.e","emojis":["❓","❓","❓","❓"]}
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
