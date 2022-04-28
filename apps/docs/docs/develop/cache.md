---
sidebar_position: 1
---

# Cache

Pour améliorer la vitesse de chargement des pages web, la mise en place d'une stratégie de cache cohérente et performante est essentielle.

La Factory utilise deux types de caches:

- https://www.npmjs.com/package/lru-cache
- https://www.npmjs.com/package/redis

## LRU Cache

Principalement utilisé par `packages/next/src/i18n/handler.js`, `packages/next/src/menus/handler.js` and `packages/next/src/node/handler.js`

Toutes les pages font appel au menus et traductions, ces composants sont considérer comment fréquemment utilisés, leurs invalidation sera moins fréquente que le route et la consultation des pages.

Une page `/a-propos` et moins fréquente que la page d'acceuil en terme d'accès.

## Redis & Cache lock

See https://www.npmjs.com/package/redlock for introduction and `apps/starter/pages/api/auth/[...nextauth].js` for implentation

## Vider le cache

Cette fonctionnalité permet d'invalidé le cache stocké dans LRU-Cache, elle est disponible sur

- `/api/cache/clear`

## Préchauffage du cache

Il y a tout intérêt à ce que les utilisateurs rencontrent un cache hit pour être servis rapidement.
Le préchauffage du cache consiste à remplir artificiellement le cache, de sorte que les visiteurs réels accèdent au cache. Essentiellement, cela prépare le cache pour les internautes, plutôt que de laisser le premier visiteur avec un cache miss. Ainsi, tout le monde bénéficie de la même expérience de qualité.

Cette fonctionnalité permet d'invalidé le cache stocké dans LRU-Cache, elle est disponible sur

- `/api/cache/warmup`

## Cache clear & Warup configuration

Rajouter la variable d'environement suivante dans le fichier `.env`

```bash
CACHE_SECRET=ma_cle_secret
```

Faire un appel sur `GET` sur l'API souhaiter:

```bash
curl --header "x-cache-secret: ma_cle_secret" https://www.site.com/api/cache/warmup
```

Response

```json
{
	"status": "Cache warmup done"
}
```
