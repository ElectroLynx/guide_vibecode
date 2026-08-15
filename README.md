# Est-ce vibecodé ?

Petit guide statique pour reconnaître le code écrit à l’instinct (souvent avec une IA) : **huit signes**, des **exemples concrets**, un **détecteur noté sur 100**.

Aucun build. Ouvre `index.html` en local, ou publie le dépôt sur GitHub Pages.

## Lancer en local

Ouvre le fichier, ou sers le dossier :

```bash
python3 -m http.server 8080
```

Puis va sur `http://localhost:8080`.

## Publier sur GitHub Pages

### Option A — depuis la branche (la plus simple)

1. Fusionne ce travail dans `main`.
2. Dépôt → **Settings** → **Pages**.
3. **Source** : *Deploy from a branch*.
4. Branch `main`, dossier `/ (root)`, **Save**.
5. Le site apparaît sur `https://<user>.github.io/guide_vibecode/` après quelques minutes.

### Option B — GitHub Actions

1. Settings → **Pages** → **Source** : *GitHub Actions*.
2. Le workflow `.github/workflows/pages.yml` publie la racine à chaque push sur `main`.

Le fichier `.nojekyll` empêche GitHub de traiter le site avec Jekyll.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `index.html` | Guide + détecteur |
| `styles.css` | Mise en page |
| `app.js` | Score et verdict |
| `404.html` | Retour à l’accueil |

Licence MIT.
