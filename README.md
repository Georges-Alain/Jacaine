# Site de Mariage - Willy & Princilia

Un site web élégant et moderne pour célébrer l'union de Willy et Princilia.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Lucide React** - Icônes modernes

## 📁 Structure du Projet

```
wedding/
├── app/
│   ├── globals.css          # Styles globaux Tailwind
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── Navigation.tsx       # Barre de navigation
│   ├── Hero.tsx             # Section héro
│   ├── Story.tsx            # Histoire d'amour
│   ├── Vision.tsx           # Vision du couple
│   ├── Invitation.tsx       # Programme des festivités
│   ├── Gallery.tsx          # Galerie photos
│   ├── RSVP.tsx             # Section RSVP
│   ├── Gifts.tsx            # Liste de cadeaux
│   └── Footer.tsx           # Pied de page
├── data/
│   ├── timeline.ts          # Données de la timeline
│   └── events.tsx           # Données des événements
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🛠️ Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build pour la Production

```bash
npm run build
npm start
```

## 🚀 Déploiement

Pour déployer le site et le partager avec votre client, consultez le guide complet dans **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

### Déploiement rapide avec Vercel (Recommandé)

1. Pousser votre code sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Importer votre dépôt GitHub
4. Cliquer sur "Deploy" - C'est tout ! 🎉

Le site sera automatiquement déployé et mis à jour à chaque modification.

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec scroll animé
- ✅ Section timeline interactive
- ✅ Programme détaillé des événements
- ✅ Galerie de photos
- ✅ Section RSVP
- ✅ Liste de cadeaux (Amazon & PayPal)
- ✅ Animations et transitions élégantes

## 📝 Personnalisation

Les données peuvent être facilement modifiées dans les fichiers :
- `data/timeline.ts` - Histoire d'amour
- `data/events.tsx` - Événements du mariage

Les styles peuvent être personnalisés dans `tailwind.config.js` et les composants individuels.

## 📄 Licence

Projet privé pour le mariage de Willy & Princilia.
