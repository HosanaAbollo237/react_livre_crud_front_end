import React from 'react'

// composant alert
const Alert = (props) => {
    
    const alertCss=`alert ${props.typeAlert}`
    return (
        <div className={alertCss} role="alert">
            {props.children}
        </div>
    )
}


export default Alert;
