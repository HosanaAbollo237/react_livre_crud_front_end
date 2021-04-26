import React, {Component} from 'react'
import Book from '../../components/Book/Book'
import FormAdd from './FormAdd/FormAdd'
import ChangeForm from './FormChange/FormChange'

class Books extends Component{

    state = {
        books: [
            {id:1, title: "Tattwa shuddhi", author:"Swami Satyananda", pagesNumber:200},
            {id:2, title: "Vault of Heaven", author:"Unknown author", pagesNumber:400},
            {id:3, title: "The 7 principles", author:"Ankh Thot", pagesNumber:150},
            {id:4, title: "Dharana Darshan", author:"Swami Nirajanananda", pagesNumber:400},
        ],
        idLastBook: 4,
        idBookToChange: 0
    }

    /* Fonction permettant d'ajouter un livre, a envoyer au formAdd */
    addBookHandler = (titleInput, authorInput, pagesNumberInput) => {
        
        // Création d'un nouveau livre
        const newBook = {
            id: this.state.idLastBook + 1,
            title: titleInput,
            author: authorInput,
            pagesNumber: pagesNumberInput
        };

        const newBooksArr = [...this.state.books] // copie du tableau de livres
        newBooksArr.push(newBook) // ajout du livre dans notre copie du tableau de livres

        // immitabilité pour idLastBook car l'id s'incrémenteggggds
        this.setState((prevState) => 
        {
            return {
                books: newBooksArr,
                idLastBook: prevState.idLastBook + 1
            }
        })

        this.props.closeAddBookForm()
    }

    /* Fonction permettant de supprimer un livre */
    deleteBookHandler = (bookId) => {
        
        const posDelBook = this.state.books.findIndex((elem,bookId) => {
            return elem.id === bookId
        })

        if(posDelBook){

            // Copy du books state (immutabilityx)
            const copyBooks = [...this.state.books]
            
            const newBooksArr = copyBooks.filter(elem => {
                return elem.id !== bookId
            })

            // ou newState = copyBooks.splice(posDelBook,1)
            this.setState({
                books: newBooksArr
            })
        }
    }

    changeBookHandler = (id,title,author,pagesNumber) =>{

        // On recupere l'index du livre qu'on a changé 
        const bookIndex = this.state.books.findIndex(elem => {
            return elem.id === id
        })

        // On creér un nouveau livre
        const newBook = {
            id:id,
            title:title,
            author:author,
            pagesNumber: pagesNumber
        }
        // Ca aurait pu s'ecrire au aussi ainsi newBook{id,title,author,pagesNumber}

        const newBooksArr = [...this.state.books]
        newBooksArr[bookIndex] = newBook

        this.setState({
                books: newBooksArr,
                idBookToChange: 0
        })

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
                         {/* Iteration de l'objet books et affichage en tableau*/}
                        {
                            this.state.books.map(book => {
                                if(book.id !== this.state.idBookToChange){

                                    return(
                                        <tr key={book.id}>
                                            <Book 
                                                title={book.title} 
                                                author={book.author} 
                                                pagesNumber={book.pagesNumber}
                                                deleteBook={() => this.deleteBookHandler(book.id)}
                                                changeBook={() => this.setState({
                                                    idBookToChange: book.id
                                                })}
                                            />
                                        </tr>
                                    )
                                } else {

                                    return(
                                        <tr key={book.id}>
                                            <ChangeForm 
                                                id={book.id}
                                                title={book.title}
                                                author={book.author}
                                                pagesNumber={book.pagesNumber}
                                                validation={this.changeBookHandler}
                                            />
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>  

                {/* La propriété addBook a pour valeur soit true ou false et est envoyée par App.js via isClickedAddBook
                    La reference this.addBookHandler permet d'nevoyer un livre au formulaire d'ajout
                    La propriéré validation sera exécutée au niveau du formAdd afin de récupérer les donnée d'un livre
                */}
                {this.props.addBook && <FormAdd validation={this.addBookHandler} />}}
            </>
        )
    }



}
            
                    
export default Books;