# 📊 Configuration Google Sheets pour les Confirmations RSVP

## Étape 1 : Créer le Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez un nouveau document
3. Nommez-le "Confirmations Mariage Jacques & Germaine"
4. Créez les colonnes suivantes dans la première ligne :
   - **A1** : Nom
   - **B1** : Réponse
   - **C1** : Table N°
   - **D1** : Nom de Table
   - **E1** : Date/Heure

## Étape 2 : Créer le Script Google Apps

1. Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**
2. Supprimez le code par défaut
3. Collez ce code :

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Ajouter une nouvelle ligne avec les données
    sheet.appendRow([
      data.name,
      data.response,
      data.tableNumber,
      data.tableName,
      data.timestamp
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Cliquez sur **Enregistrer** (icône disquette)
5. Nommez le projet : "RSVP Wedding"

## Étape 3 : Déployer le Script

1. Cliquez sur **Déployer** > **Nouveau déploiement**
2. Cliquez sur l'icône ⚙️ à côté de "Sélectionner le type"
3. Choisissez **Application Web**
4. Configurez :
   - **Description** : RSVP API
   - **Exécuter en tant que** : Moi
   - **Qui a accès** : Tout le monde
5. Cliquez sur **Déployer**
6. **Autorisez l'accès** (cliquez sur "Autoriser l'accès" et suivez les étapes)
7. **COPIEZ L'URL** qui apparaît (elle ressemble à : `https://script.google.com/macros/s/AKfycby.../exec`)

## Étape 4 : Configurer votre Site

1. Ouvrez le fichier `.env.local` à la racine de votre projet
2. Ajoutez cette ligne avec l'URL copiée :

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/VOTRE_ID_ICI/exec
```

3. Redémarrez votre serveur de développement :

```bash
npm run dev
```

## ✅ Test

1. Allez sur votre site : http://localhost:3000
2. Naviguez vers la section RSVP
3. Confirmez une présence
4. Vérifiez que les données apparaissent dans votre Google Sheet

## 📊 Voir les Résultats

Vous pouvez maintenant :
- Voir en temps réel qui confirme
- Filtrer par "Oui" ou "Non"
- Exporter les données en Excel
- Partager le Sheet avec votre partenaire

## 🔒 Sécurité

- Seul vous pouvez voir le Google Sheet
- Les invités ne peuvent qu'envoyer des données
- Aucune donnée sensible n'est exposée

## 🎨 Bonus : Formater le Sheet

Vous pouvez :
- Mettre les "Oui" en vert et les "Non" en rouge
- Ajouter des filtres
- Créer des graphiques
- Compter automatiquement les confirmations

## ❓ Problèmes Courants

**Erreur 403** : Vérifiez que "Qui a accès" est bien sur "Tout le monde"

**Rien ne s'enregistre** : Vérifiez que l'URL dans `.env.local` est correcte

**Erreur d'autorisation** : Réautorisez le script dans Google Apps Script
