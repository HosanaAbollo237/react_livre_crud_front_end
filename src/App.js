import React, {Component} from 'react'
import TitreH1 from './components/Titre/TitreH1'
import Button from './components/Button/Button'

class App extends Component {
  render(){
    
    return(
      <div className="container">
        <TitreH1> Page listant les livres</TitreH1>
        <div>Livres</div>
        <Button typeBtn="btn-success" clic={() => console.log('ajout')}>AJouter</Button>
        <Button typeBtn="btn-warning" clic={() => console.log('modifier')}>Modifier</Button>
        <Button typeBtn="btn-danger" clic={() => console.log('supprimer')}>Supprimer</Button>
      </div>
    )
  }
}
export default App;