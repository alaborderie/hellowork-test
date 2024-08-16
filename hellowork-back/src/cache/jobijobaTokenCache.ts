// Je voulais mettre un redis en place pour garder le token en cache, mais le test précisant ceci :
// -  Le démarrage de l’app doit être simple. Pas nécessairement besoin d’un docker/docker-compose, un script bash ferait très bien l’affaire.
// J'ai décidé de ne pas le faire et d'instaurer ce simple cache.
// Redis a l'avantage de permettre de scale avec un loadbalancer et autant d'instance node que nécessaire, c'était donc ma première solution.

import NodeCache from 'node-cache';

const jobijobaTokenCache = new NodeCache({stdTTL: 3000, checkperiod: 120}); // Caching for 50 minutes, check every 2 minutes

export default jobijobaTokenCache;
