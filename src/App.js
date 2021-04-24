import React, {Component} from 'react'
import TitleH1 from './components/Title/TitleH1'
import MyButton from './components/Button/MyButton'
import Books from './containers/Books/Books'

class App extends Component {
  
  render(){

    return(
      <div className="container">
        <TitleH1> Page listing books</TitleH1>
        <Books/>
        <MyButton typeBtn="btn-success" css="w-100" clic={() => console.log('add')}>Add</MyButton>
      </div>
    )
  }
}
export default App;