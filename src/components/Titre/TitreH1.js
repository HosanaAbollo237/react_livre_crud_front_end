import React from 'react'
import classes from './Titre.module.css'

const titreH1 = (props) => {
    return(
    <h1 className={`${classes.policeTitre} + border border-dark p-2 m-2 bg-primary rounded text-center text-white`}>{props.children}</h1>
)}

export default titreH1;
