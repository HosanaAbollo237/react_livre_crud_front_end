import React from 'react'
import Button from '../Button/Button'

const Book = (props) => {
    
    return (
        <>     
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.pagesNumber}</td>
            <td><Button typeBtn="btn-warning" clic={props.changeBook}>Change</Button></td>
            <td><Button typeBtn="btn-danger" clic={props.deleteBook}>Delete</Button></td>
        </>
    )
    
}

export default Book;