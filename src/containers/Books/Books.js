import React, {Component} from 'react'
import Book from '../../components/Book/Book'

class Books extends Component{

    state = {
        books: [
            {id:1, title: "Tattwa shuddhi", author:"Swami Satyananda", pagesNumber:200},
            {id:2, title: "Vault of Heaven", author:"Unknown author", pagesNumber:400},
            {id:3, title: "The 7 principles", author:"Ankh Thot", pagesNumber:150},
            {id:4, title: "Dharana Darshan", author:"Swami Nirajanananda", pagesNumber:400}
        ]
    }

    render(){
        return(
            <>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark text-white">
                            <th>Title</th>
                            <th>Author</th>
                            <th>Pages number</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>  
                        {
                            this.state.books.map(book => {
                                return(
                                    <tr key={book.id}>
                                        <Book title={book.title} author={book.author} pagesNumber={book.pagesNumber}/>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>  
            </>
        )
    }



}
            
                    
export default Books;