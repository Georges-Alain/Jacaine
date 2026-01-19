# Guide de Déploiement

Ce guide vous explique comment déployer votre site de mariage pour le partager avec votre client et effectuer des modifications par la suite.

## 🚀 Option 1 : Déploiement sur Vercel (Recommandé)

Vercel est la plateforme créée par les développeurs de Next.js. C'est la solution la plus simple et la plus rapide.

### Prérequis

1. Créer un compte GitHub (gratuit) : https://github.com
2. Créer un compte Vercel (gratuit) : https://vercel.com

### Étapes de déploiement

#### 1. Initialiser Git dans votre projet

```bash
# Dans le terminal, à la racine du projet
git init
git add .
git commit -m "Initial commit - Site de mariage"
```

#### 2. Créer un dépôt GitHub

1. Aller sur https://github.com/new
2. Créer un nouveau dépôt (par exemple : `wedding-site`)
3. **Ne pas** initialiser avec README, .gitignore, ou license
4. Copier l'URL du dépôt

#### 3. Pousser votre code sur GitHub

```bash
# Remplacez YOUR_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/YOUR_USERNAME/wedding-site.git
git branch -M main
git push -u origin main
```

#### 4. Déployer sur Vercel

1. Aller sur https://vercel.com/login
2. Se connecter avec votre compte GitHub
3. Cliquer sur "Add New Project"
4. Sélectionner le dépôt `wedding-site`
5. Vercel détectera automatiquement Next.js
6. Cliquer sur "Deploy"

**C'est tout !** Vercel vous donnera une URL du type : `https://wedding-site-xyz.vercel.app`

### Modifications futures

À chaque fois que vous poussez des modifications sur GitHub, Vercel redéploiera automatiquement le site !

```bash
# Faire vos modifications dans le code
git add .
git commit -m "Description des modifications"
git push
```

### Avantages de Vercel

- ✅ **Gratuit** pour les projets personnels
- ✅ **Déploiement automatique** à chaque push Git
- ✅ **URL personnalisable** (ex: `wedding.vercel.app`)
- ✅ **SSL/HTTPS automatique**
- ✅ **CDN global** pour des performances optimales
- ✅ **Previews** pour chaque modification (branches/PR)

---

## 🌐 Option 2 : Déploiement sur Netlify

Alternative à Vercel, également très simple.

### Étapes

1. Aller sur https://www.netlify.com
2. Se connecter avec GitHub
3. Cliquer sur "Add new site" > "Import an existing project"
4. Sélectionner votre dépôt GitHub
5. Configuration automatique :
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Cliquer sur "Deploy site"

---

## 💻 Option 3 : Déploiement manuel (Serveur VPS)

Si vous avez votre propre serveur.

### Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `.next/`

### Exécution

```bash
npm start
```

Le site sera accessible sur le port 3000 (ou celui configuré dans votre variable d'environnement `PORT`).

---

## 📝 Gestion des versions avec Git

### Commandes Git essentielles

```bash
# Voir l'état des fichiers modifiés
git status

# Ajouter des fichiers au staging
git add .
# ou pour un fichier spécifique
git add components/Hero.tsx

# Créer un commit
git commit -m "Ajout de nouvelles photos dans la galerie"

# Pousser les modifications sur GitHub
git push

# Voir l'historique des modifications
git log

# Créer une branche pour tester des modifications
git checkout -b feature/nouvelle-section
# Faire vos modifications
git add .
git commit -m "Ajout d'une nouvelle section"
git push origin feature/nouvelle-section
```

### Workflow recommandé

1. **Créer une branche** pour chaque modification importante
2. **Tester localement** avec `npm run dev`
3. **Commit et push** les modifications
4. **Vercel/Netlify** déploiera automatiquement
5. **Partager l'URL** avec le client pour validation

---

## 🔗 Partager avec votre client

### URL de production
Une fois déployé, vous recevrez une URL permanente comme :
- `https://wedding-site.vercel.app` (si vous avez configuré un domaine)
- `https://wedding-site-xyz123.vercel.app` (URL par défaut)

### URLs de prévisualisation
Chaque modification créera une URL de prévisualisation unique, permettant au client de voir les changements avant de les mettre en production.

---

## 🔄 Faire des modifications

### Exemple : Modifier la date du mariage

1. Éditer le fichier `components/Hero.tsx`
2. Changer la date
3. Tester localement : `npm run dev`
4. Commit et push :
```bash
git add components/Hero.tsx
git commit -m "Mise à jour de la date du mariage"
git push
```
5. Le site se mettra à jour automatiquement en quelques secondes !

### Exemple : Ajouter une photo dans la galerie

1. Éditer `components/Gallery.tsx`
2. Remplacer les placeholders par de vraies images
3. Suivre le même processus (commit, push)

---

## 📧 Domaine personnalisé (Optionnel)

### Sur Vercel

1. Aller dans les paramètres du projet sur Vercel
2. Section "Domains"
3. Ajouter votre domaine (ex: `wedding-willy-princilia.com`)
4. Suivre les instructions DNS

### Sur Netlify

1. Paramètres du site > Domain management
2. Add custom domain
3. Suivre les instructions

---

## ✅ Checklist de déploiement

- [ ] Projet initialisé avec Git
- [ ] Code poussé sur GitHub
- [ ] Site déployé sur Vercel/Netlify
- [ ] URL de production fonctionnelle
- [ ] Test des fonctionnalités principales
- [ ] Client peut accéder au site
- [ ] Process de modification documenté

---

## 🆘 Problèmes courants

### Le build échoue
- Vérifier que toutes les dépendances sont installées : `npm install`
- Vérifier les erreurs TypeScript : `npm run lint`

### Les styles ne s'affichent pas
- Vérifier que Tailwind CSS est bien configuré dans `tailwind.config.js`
- Vérifier que `globals.css` est importé dans `layout.tsx`

### Le site ne se met pas à jour
- Vérifier que le code a bien été poussé sur GitHub
- Vérifier les logs de déploiement sur Vercel/Netlify

---

## 📞 Support

Pour toute question sur le déploiement, consultez :
- Documentation Vercel : https://vercel.com/docs
- Documentation Next.js : https://nextjs.org/docs/deployment
- Documentation Netlify : https://docs.netlify.com
