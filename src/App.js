import React, {Component} from 'react'
import TitleH1 from './components/Title/TitleH1'
import MyButton from './components/Button/MyButton'

class App extends Component {
  render(){
    
    return(
      <div className="container">
        <TitleH1> Page listant les livres</TitleH1>
        <div>Livres</div>
        <MyButton typeBtn="btn-success" clic={() => console.log('ajout')}>AJouter</MyButton>
        <MyButton typeBtn="btn-warning" clic={() => console.log('modifier')}>Modifier</MyButton>
        <MyButton typeBtn="btn-danger"  clic={() => console.log('supprimer')}>Supprimer</MyButton>
      </div>
    )
  }
}
export default App;