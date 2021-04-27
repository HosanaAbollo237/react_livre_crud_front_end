# React CRUD livre Front-End ?

Ce projet à pour but d'exposer les bases de React JS à travers une app CRUD de livres

## Comment charger le projet ?

Avec la commande : `git clone https://github.com/HosanaAbollo237/react_livre_crud_front_end.git`

## Comment lancer le projet une fois cloné ?

Avec une invite de commande aller dans le dossier ./react_livre_crud_front_end avec la commande
`cd react_livre_crud_front_end`
Puis lancer l'app avec la commande 'npm start' ou 'yarn start' ( pour ceux qui possèdent yarn)
Patienter puis une page s'ouvrira sur votre navigateur à : [http://localhost:3000](http://localhost:3000) 

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

    Partie 3 : Validation des formulaires

    -   Formulaire d'ajout avec Formik
        -   Installer formik avec la commande: 
        `npm install --save formik`
        -   Récupération de la fonction withFormik:
        `import {withFormik} from formik`
        -   Pour utiliser cette fontion il faudra la placer au niveau de **export default** et renseigner un objet a formik pour lui indiquer les actions qu'il devra faire (3 propriétés):
        `export default withFormik({ **ici se situera les actions** })(FormAdd)`

        -   Voici la syntaxe: 
        `export default withFormik({   `
        `    mapPropsToValues: () => ({` -->placer inputs aux props de formik, on retourne un objet contenant title, author et pagesNumber
                `title:'',`              --> cela correspond à ce qu'on faisait au niveau des states, (1) :     on peut supprimer le state
                `author:'',`                
                `pagesNumber:''`
        `    }),`
        `    validate: values => {`
``
        `    },`
        `    handleSubmit: (values,(props)) => {`  ---> methode lancée lors de la validation du formulaire
        `        `                                 ---> elle remplace validateFormHandleer
        `    }`                     `              ---> values permet d'acceder à title, author et pagesNumber
        `})(FormAdd);`                             ---> props permet d'utiliser la prop validation envoyée par le composant books

        Pour plus d'informations: [https://jaredpalmer.com/formik/docs/api/withFormik](https://jaredpalmer.com/formik/docs/api/withFormik)

        - La valeur de la prop name des inputs doit etre la meme que celle renseigné dans mapPropsToValues
        -   Maintenant **value={this.state.authorInput}** deviendra value={this.props.values.author}
            Et on aura onChange={(event) => {this.setState({authorInput: event.target.value})}}
            qui sera remplacé par onChange={this.props.handleChange}
        - Maintenant tester avec le react developper tool si la prop values de l'objet FormAdd prend en considération les changements

        -   Validation des données avant envoi 
            -   On utilisera la propriété **errors**
            -   On génere un objet error et a l'intérieur on vérifie l'intégrité des données :
                   `validate: values => { `
                        `const errors = {}; `
                        `if(values.title.length < 3){`
                        `    errors.title = "Le titre dois avoir au moins 3 caracères"`
                        `}`
                        `if(values.title.length > 15){`
                        `    errors.title = "Le titre dois avoir moins de 15 caracères"`
                        `}`

                        `return errors`
                   `}`
            -   Puis on envoie le msg en dessous du champs title :
                `{this.props.errors.title && <span style={{color:'red'}}> {this.props.errors.title}</span>}`
            -   On vérifie via react developper tools si l'objet errors récupère le msg d'erreur 
            -   Pour afficher le msg à l'utilisateur :
                {this.props.errors.title && <span style={{color:red}}>{this.props.errors.title}</span>}
            -   On utilise la propriété blur et la methode blur afin de na pas avoir un msg d'erreur écrit
                directement sans avoir commencé a saire les datas

        




