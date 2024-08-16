## Test technique Hello Work par Antoine Laborderie

Heure de début ~ 11h30

Heure de fin ~ 16h42 (Avec une pause de ~1h pour manger)

Hello ! Voici le résultat de ce test technique. C'était la première fois que j'essayais Koa mais je n'ai pas vraiment été freiné par ce framework très simple. J'espère pouvoir discuter avec vous prochainement pour expliquer mes choix techniques de vive voix.

# Démarrer le projet

## Avant de démarrer

Copiez le fichier `.env.dist` du projet `hellowork-back` et renommez le en `.env
Remplissez les variables d'env correspondantes avec les infos du fichier test que vous m'avez envoyé par mail.

## Le projet se lance avec [Bun !](https://bun.sh)

J'aurai normalement dockerisé le projet avec un docker-compose pour start le front + le back + nginx + un redis (je souhaitais cache le token d'authentification à la base). Par gain de temps et pour ne pas aller à l'encontre des instructions du test, j'ai fait un simple script bash

Si vous n'avez pas bun installé, le script vous proposera de le faire pour vous (Linux et macOS uniquement).

Le back-end se lance en local avec `bun start` depuis le dossier `hellowork-back`
Le front-end se lance en loca avec `bun dev` depuis le dossier `hellowork-front`

Pour lancer le projet en "prod" il suffit d'éxécuter le script `start.sh`
Le projet sera donc dispo ici : <https://localhost:3000> (sauf si vous avez modifié la var d'env PORT)

Merci de votre lecture !
