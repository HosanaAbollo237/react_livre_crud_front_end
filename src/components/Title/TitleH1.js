import React from 'react'
import classes from './Title.module.css'

// composant titre
const titleH1 = (props) => {
    return(
    <h1 className={`${classes.policeTitle} + border border-dark p-2 m-2 bg-primary rounded text-center text-white`}>{props.children}</h1>
)}

export default titleH1;
