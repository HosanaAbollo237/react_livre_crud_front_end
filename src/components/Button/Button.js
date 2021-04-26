import React from 'react'

// Composant bouton
const Button = (props) => {

    let btnCss = `btn ${props.typeBtn} ${props.css}`

    return(
        <>
            <button className={btnCss} onClick={props.clic}>{props.children}</button>
        </>
    )
}

export default Button;