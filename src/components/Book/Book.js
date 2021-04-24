import React from 'react'
import MyButton from '../Button/MyButton'

const Book = (props) => {
    return (
        <>     
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.pagesNumber}</td>
                <td><MyButton typeBtn="btn-warning" clic={() => console.log('change')}>Change</MyButton></td>
                <td><MyButton typeBtn="btn-danger" clic={() => console.log('delete')}>Delete</MyButton></td>
        </>
    )
    
}

export default Book;