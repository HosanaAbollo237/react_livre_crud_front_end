import React, {Component} from 'react'
import TitleH1 from './components/Title/TitleH1'
import MyButton from './components/Button/MyButton'
import Books from './containers/Books/Books'

class App extends Component {

  state = {
    isClickedAddBook: false,
  }
  
  addBookHandler(){
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
        <Books addBook={this.state.isClickedAddBook} />
        <MyButton typeBtn="btn-success" css="w-100" clic={() => this.addBookHandler()}>{!this.state.isClickedAddBook ? "Add" : "Close add"}</MyButton>
      </div>
    )
  }
}
export default App;