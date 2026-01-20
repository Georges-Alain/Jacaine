# Guide de Configuration Git et GitHub

## 🔧 Étape 1 : Créer le dépôt sur GitHub

1. **Aller sur GitHub** : https://github.com/new
2. **Nom du dépôt** : `wedding-site` (ou un autre nom de votre choix)
3. **Visibilité** : Choisir "Public" ou "Private"
4. **⚠️ IMPORTANT** : **NE PAS** cocher :
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
5. Cliquer sur **"Create repository"**

## 🔗 Étape 2 : Récupérer l'URL de votre dépôt

Une fois le dépôt créé, GitHub affichera une page avec des instructions. L'URL ressemblera à :
```
https://github.com/VOTRE_NOM_UTILISATEUR/wedding-site.git
```

**Exemple** : Si votre nom d'utilisateur GitHub est `georges123`, l'URL sera :
```
https://github.com/georges123/wedding-site.git
```

## 🔄 Étape 3 : Mettre à jour l'URL du dépôt distant

Remplacez l'ancienne URL par la bonne :

```bash
# Supprimer l'ancienne URL incorrecte
git remote remove origin

# Ajouter la bonne URL (remplacez VOTRE_NOM_UTILISATEUR par votre vrai nom)
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/wedding-site.git

# Vérifier que c'est correct
git remote -v

# Pousser le code sur GitHub
git push -u origin main
```

## 🔐 Étape 4 : Authentification GitHub

Si GitHub demande une authentification :

### Option A : Token Personnel (Recommandé)
1. Aller sur : https://github.com/settings/tokens
2. Cliquer sur "Generate new token (classic)"
3. Sélectionner les permissions : `repo` (accès complet aux dépôts)
4. Générer et copier le token
5. Utiliser le token comme mot de passe quand Git le demande

### Option B : GitHub CLI
```bash
# Installer GitHub CLI (si pas déjà fait)
brew install gh

# S'authentifier
gh auth login

# Pousser le code
git push -u origin main
```

## ✅ Vérification

Après le push réussi, vous devriez voir :
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), done.
To https://github.com/VOTRE_NOM_UTILISATEUR/wedding-site.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## 📋 Checklist

- [ ] Dépôt GitHub créé
- [ ] URL du dépôt copiée
- [ ] Ancienne URL supprimée avec `git remote remove origin`
- [ ] Nouvelle URL ajoutée avec `git remote add origin`
- [ ] Code poussé avec succès : `git push -u origin main`
- [ ] Code visible sur GitHub.com

## 🆘 Problèmes courants

### Erreur : "remote: Repository not found"
- Vérifier que le nom d'utilisateur dans l'URL est correct
- Vérifier que le dépôt existe bien sur GitHub
- Vérifier que vous êtes authentifié avec le bon compte

### Erreur : "Permission denied"
- Vérifier votre authentification GitHub
- Utiliser un token personnel au lieu du mot de passe

### Erreur : "remote origin already exists"
- Supprimer l'ancienne avec : `git remote remove origin`
- Réessayer avec la nouvelle URL
