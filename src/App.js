import React, {Component} from 'react'
import TitleH1 from './components/Title/TitleH1'
import Button from './components/Button/Button'
import Books from './containers/Books/Books'

class App extends Component {

  state = {
    isClickedAddBook: false,
    isClickedchangeBook: false
  }
  
  /* Fonction permetttant de savoir si l'user a clické sur le boutton add pour ajouter un livre */
  addBookClicHandler = () =>{
    this.setState((oldstate,props) => {
      return {
        isClickedAddBook: !oldstate.isClickedAddBook,
      }
    })
  }

 
  render(){

    return(
      <div className="container">
        <TitleH1> Page listing books</TitleH1>
        <Books addBook={this.state.isClickedAddBook} closeAddBookForm={() => {this.setState({
            isClickedAddBook: false
        })}} />
        {/* Bouton d'ajout d'un livre */}
        <Button typeBtn="btn-success" css="w-100" clic={this.addBookClicHandler}>{!this.state.isClickedAddBook ? "Add" : "Close add"}</Button>
      </div>
    )
  }
}
export default App;