# React CRUD livre Front-End ?

Ce projet à pour but d'exposer les bases de React JS à travers une app CRUD de livres

## Comment charger le projet ?

Avec la commande : `git clone https://github.com/HosanaAbollo237/react_livre_crud_front_end.git`

## Comment lancer le projet une fois cloné ?

Avec une invite de commande aller dans le dossier ./react_livre_crud_front_end avec la commande
`cd react_livre_crud_front_end`
Puis lancer l'app avec la commande 'npm start' ou 'yarn start' ( pour ceux qui possèdent yarn)
Patienter puis une page s'ouvrira sur votre navigateur à : [http://localhost:3000](http://localhost:3000) t

## Etapes de la création de ce projet : 


-   Ajout des CDN (CSS + JS) de bootstrap

-   Création du composant Title
    -   Ajout de la propriéte **props.children**
    -   Insertion de données texte depuis App.js dans le composant Titre via la propriété **props.children**

-   Création du composant Button :
    -   Définition des propriétés (typeBtn, clic)
    -   Utilisation des ces dernières dans App.js

-   Création du composant Books
    -   Ce component est un container, il listera tout les livres dans une table 
    -   Affichage des livres en les récupérant dans le state via une itération 

-   Lister les livres 
    -   On va chercher dans le state l'array book puis on itère
    -   L'iteration affiche un livre don on créer le composant Book

-   Methode de suppression d'un livre

-   Creation du formulaire d'ajout de livre

Partie 2 : FORMULAIRE

-   Creation du formulaire d'ajout
    -   Faire le lien entre le composant FormAdd vers composant Books pour la soumission du livre ( vers le composant parent Books) + ajouts des livre dans le state

-   Composant de modification un livre 
    -   Faire le lien entre le composant Books vers le composant FormChange pour la récupération des données du livre a modifier (via les props)
    -   Pour une modification effective, le stockage des informations reçues au FormChange sont stockés au state
    -   Récupération de la référence de la fonction changeBookHandler vers la propriété validation afin de faire partir les nouvelles données vers le composant parent (Books)

    -   Création d'un message d'alert adequate en fonction de la CUD d'un livre
    
