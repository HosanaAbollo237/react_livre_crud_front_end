import React from 'react'

const MyButton = (props) => {

    let btnCss = `btn ${props.typeBtn} ${props.css}`

    return(
        <>
            <button className={btnCss} onClick={props.clic}>{props.children}</button>
        </>
    )
}

export default MyButton;