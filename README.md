# PFEmoji - Jeu de devinettes avec emojis

Un jeu interactif où les joueurs devinent des noms à partir d'indices sous forme d'emojis.

## 🚀 Déploiement sur Vercel

### Structure du projet

```
pfemoji/
├── index.html           # Interface du jeu
├── api/
│   └── enigmes.js      # API serverless pour charger les énigmes
├── data/
│   └── enigmes.json    # Base de données des énigmes (non visible côté client)
├── vercel.json         # Configuration Vercel
└── README.md           # Ce fichier
```

### Installation

1. **Créer un dépôt GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/pfemoji.git
   git push -u origin main
   ```

2. **Déployer sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre dépôt GitHub
   - Cliquez sur "Deploy"

Votre site sera disponible sur : `https://votre-projet.vercel.app`

## 📝 Modifier les énigmes

Pour ajouter ou modifier des énigmes :

1. Éditez le fichier `data/enigmes.json`
2. Ajoutez vos énigmes au format :
   ```json
   {
     "reponse": "Nom de la personne",
     "emojis": ["🎯", "⚡", "🔥"]
   }
   ```
3. Commitez et pushez sur GitHub
4. Vercel déploiera automatiquement les changements

## 🔒 Sécurité

Les énigmes sont stockées dans `data/enigmes.json` et ne sont **jamais** exposées directement au client. Elles sont servies via une fonction serverless (`api/enigmes.js`), ce qui empêche les joueurs de voir les réponses dans le code source.

## ✨ Fonctionnalités

- ✅ Auto-complétion intelligente
- ✅ Historique des tentatives
- ✅ Animations (victoire/erreur)
- ✅ Design responsive (mobile/desktop)
- ✅ Énigmes protégées côté serveur

## 🛠 Développement local

Pour tester localement avec Vercel CLI :

```bash
npm install -g vercel
vercel dev
```

Le site sera accessible sur `http://localhost:3000`