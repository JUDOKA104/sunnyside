# Frontend Mentor - Solution Sunnyside agency landing page

Ceci est une solution au [challenge Sunnyside agency landing page sur Frontend Mentor](https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef).

## Aperçu

### Le défi

Les utilisateurs doivent pouvoir :
- Voir une mise en page optimale selon la taille de leur écran (Responsive).
- Voir les effets de survol (hover) sur les éléments interactifs.
- Utiliser le menu burger sur la version mobile.
- **Bonus :** Profiter d'animations d'apparition au scroll et d'effets de zoom sur les images !

### Liens

- Lien du site en direct : [https://judoka104.github.io/sunnyside/](https://judoka104.github.io/sunnyside/)

## Mon processus

### Construit avec

- HTML5 Sémantique
- Variables CSS
- Flexbox & CSS Grid
- Approche Mobile-first
- [React](https://reactjs.org/) - Bibliothèque JS
- [Vite](https://vitejs.dev/) - Outil de build
- API native `IntersectionObserver` (pour les animations)

### Ce que j'ai appris

Ce projet a été un super entraînement pour maîtriser **CSS Grid** et le design responsive.
L'un des plus grands défis a été d'inverser l'ordre du texte et des images sur la version bureau sans dupliquer le HTML. J'ai pu le faire proprement grâce à la propriété `order` :

```css
@media (min-width: 768px) {
    .transform-text { 
        order: -1; 
    }
}
```

J'ai également consolidé mes bases en React (utilisation de `useState` pour le menu mobile) et appris à configurer Vite pour héberger correctement un site sur **GitHub Pages**.

## Auteur

- GitHub - [@JUDOKA104](https://github.com/JUDOKA104)