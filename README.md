# Application de messagerie instantanée

Talkify est une application de messagerie instantanée qui facilite les échanges rapides et fluides. Discute en temps réel, partage des fichiers multimédias et crée des groupes de conversation avec facilité. Reste connecté où que tu sois grâce à des notifications en temps réel. Elle est développé avec
avec **React JS**, **TypeScript**, **Vite**, **HTML**,**SCSS**, **Firebase**, **MongoDB** et **NodeJS**.

## Fonctionnalités principales

- **Messagerie de base** : Envoi et réception de messages texte en temps réel, support des emojis, et notifications en temps réel pour les nouveaux messages.
- **Authentification des utilisateurs** : Inscription par numéro de téléphone ou e-mail avec vérification OTP, et profils utilisateurs configurables avec nom et photo.
- **Listes de contacts** : Synchronisation des contacts téléphoniques et fonction de recherche pour ajouter des utilisateurs.
- **Notifications et statuts des messages** : Notifications push pour les messages, accusés de réception, et affichage des statuts "en ligne" ou "vu pour la dernière fois".
- **Chats de groupe** : Création et modération de groupes, avec notifications spécifiques pour les messages de groupe.
- **Partage de médias** : Envoi de photos, vidéos, et fichiers, avec une galerie pour les médias partagés.
- **Messagerie vocale** : Envoi et écoute de messages audio avec option de lecture rapide.
- **Système de notifications** : Notifications push personnalisables, avec possibilité de désactiver certaines notifications et de mettre en sourdine.
- **Archivage et suppression de discussions** : Archivage de chats et option de suppression de messages pour soi ou pour tous.
- **Sécurité** : Cryptage de bout en bout pour la protection des messages et option de blocage de contacts indésirables.
- **Statuts** : Partage de statuts (texte, photos, vidéos) qui disparaissent après 24 heures, avec possibilité de visualisation et de réaction par les contacts.

## Technologies utilisées

- **React JS & TypeScript** : Pour une architecture modulaire et un typage strict.
- **Vite JS** : Utilisé pour le build rapide et le développement avec Hot Module Replacement (HMR).
- **SCSS** : Pour une gestion avancée des styles avec un design réactif.
- **Firebase Auth** : Pour la gestion des utilisateurs.
- **Mongo DB** : Pour la gestion des données.
- **Node JS** : Pour le serveur.

## Installation et démarrage

1. Clonez le dépôt :

```bash
git clone https://github.com/Andriamahay11master/talkify.git
cd Talkify
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez l'application en mode développement :

```bash
npm run dev
```

4. Accédez à l'application sur `http://localhost:5173`.

## Structure du projet

- **src/** : Contient le code source de l'application.
  - **components/** : Composants réutilisables tels que les formulaires, alertes, tableaux, etc.
  - **pages/** : Pages principales de l'application.
  - **assets/** : Fichiers SCSS pour la gestion des styles globaux et des composants.
  - **models/** : Pour le typage des données.
  - **data/** : Pour les données statiques utilisés par l'application.

## Commandes utiles

- **`npm run dev`** : Démarre l'application en mode développement.
- **`npm run build`** : Génère un build de production.
- **`npm run lint`** : Vérifie et corrige le code avec ESLint.

## Contribution

Les contributions sont les bienvenues. Si vous souhaitez contribuer, ouvrez un problème ou une pull request.
