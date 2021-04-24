import React, {Component} from 'react'
import Book from '../../components/Book/Book'
import FormAdd from '../../components/FormAdd/FormAdd'


class Books extends Component{

    state = {
        books: [
            {id:1, title: "Tattwa shuddhi", author:"Swami Satyananda", pagesNumber:200},
            {id:2, title: "Vault of Heaven", author:"Unknown author", pagesNumber:400},
            {id:3, title: "The 7 principles", author:"Ankh Thot", pagesNumber:150},
            {id:4, title: "Dharana Darshan", author:"Swami Nirajanananda", pagesNumber:400}
        ]
    }

    deleteBookHandler = (bookId) => {
        
        const posDelBook = this.state.books.findIndex((elem,bookId) => {
            return elem.id === bookId
        })

        if(posDelBook){

            // Copy du books state (immutabilityx)
            const copyBooks = [...this.state.books]
            
            const newState = copyBooks.filter(elem => {
                return elem.id !== bookId
            })

            // ou newState = copyBooks.splice(posDelBook,1)
            this.setState({
                books: newState
            })
        }
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
                                        <Book 
                                            title={book.title} 
                                            author={book.author} 
                                            pagesNumber={book.pagesNumber}
                                            deleteBook={() => this.deleteBookHandler(book.id)}
                                        />
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>  

                {/* If my boolean is true so I add a form */}
                {this.props.addBook && <FormAdd />}
            </>
        )
    }



}
            
                    
export default Books;