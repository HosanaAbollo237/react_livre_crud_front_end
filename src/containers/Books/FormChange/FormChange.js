import React,{Component} from 'react'
import Button from '../../../components/Button/Button'

// Container formulaire de modification de livre
class ChangeForm extends Component {

    // Técupératinn des data des propriétés envoyées depuis le composant Books
    state = {
        titleInput: this.props.title,
        authorInput: this.props.author,
        pagesNumberInput: this.props.pagesNumber
    }
    
    // Fonction permettant de valider le formulaire
    validateFormHandler = () => {
        console.log(this.state.pagesNumberInput)

        // function récupérant la ref de la methode parente. (au niveau parent : validation={this.changeBookHandler}
        // Le composant book recupere les data via sa methode changeBookHandler
        this.props.validation(this.props.id,this.state.titleInput, this.state.authorInput, this.state.pagesNumberInput)
    }

    render(){
        return(
            <>
                    <td><input type="text" 
                               value={this.state.titleInput} 
                               onChange={(event) => {
                                   // MAJ du state lors de la saisie utilisateur
                                    this.setState({
                                        titleInput: event.target.value
                                    })
                               }} />
                    </td>
                    <td><input type="text" 
                               value={this.state.authorInput} 
                               onChange={(event) => {
                                    this.setState({
                                        authorInput: event.target.value
                                    })
                               }} />
                    </td>
                    <td><input type="number" 
                               value={this.state.pagesNumberInput} 
                               onChange={(event) => {
                                    this.setState({
                                        pagesNumberInput: event.target.value
                                    })
                               }} />
                    </td>
                               
                    <td colSpan="2"><Button clic={this.validateFormHandler} typeBtn="btn-success">validateChange</Button></td> 
            </>
        )
    }
}

export default ChangeForm;