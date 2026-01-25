#!/bin/bash

# Script pour pousser le code sur GitHub
# Usage: ./push-to-github.sh

echo "🚀 Préparation du push vers GitHub..."
echo ""

# Vérifier l'état
echo "📊 État actuel :"
git status
echo ""

# Vérifier le remote
echo "🔗 Remote configuré :"
git remote -v
echo ""

echo "📤 Tentative de push..."
echo ""
echo "⚠️  Si Git demande vos identifiants :"
echo "   - Username: Georges-Alain"
echo "   - Password: Utilisez un Personal Access Token (PAS votre mot de passe GitHub)"
echo ""
echo "   Pour créer un token : https://github.com/settings/tokens"
echo "   Permissions nécessaires : repo (accès complet)"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push réussi !"
    echo "🌐 Votre code est maintenant sur : https://github.com/Georges-Alain/Jacaine"
else
    echo ""
    echo "❌ Erreur lors du push"
    echo ""
    echo "💡 Solutions possibles :"
    echo "   1. Créer un Personal Access Token sur GitHub"
    echo "   2. Utiliser le token comme mot de passe lors de la demande"
    echo "   3. Ou configurer SSH : git remote set-url origin git@github.com:Georges-Alain/Jacaine.git"
fi
