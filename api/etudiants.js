// api/etudiants.js - Énigmes différentes pour PFEtudiants

const enigmes = [
  {"reponse":"Exemple 1","emojis":["🎓","📚","💻","🎯"]},
  {"reponse":"Exemple 2","emojis":["🔬","🧪","⚗️","🔭"]},
  {"reponse":"Exemple 3","emojis":["🎨","🖌️","🎭","🖼️"]},
  {"reponse":"Exemple 4","emojis":["⚽","🏀","🎾","🏐"]},
  {"reponse":"Exemple 5","emojis":["🎵","🎸","🎹","🎤"]},
  {"reponse":"Exemple 6","emojis":["🌍","✈️","🗺️","🏖️"]},
  {"reponse":"Exemple 7","emojis":["🍕","🍔","🍜","🍰"]},
  {"reponse":"Exemple 8","emojis":["🎮","🕹️","👾","🎯"]},
  {"reponse":"Exemple 9","emojis":["📱","💻","⌨️","🖱️"]},
  {"reponse":"Exemple 10","emojis":["🏃","🚴","🏊","🤸"]}
];

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(enigmes);
}
