import React, {Component} from 'react'
import Button from '../../../components/Button/Button'


class FormAdd extends Component{
    
    /* State contenant les saisies utilisateur pour ajout de livre */
    state = {
        titleInput: "",
        authorInput: "",
        pagesNumberInput: 0,
    }

    /* Fonction permettant de valider les saisies utilisateur */
    validateFormHandler = (event) =>{
        event.preventDefault() //Pas de rechargement de la page
        // Cettre propriété fait récupère la référence de la fonction addBookHandler envoyé depuis Books
        // C'est ainsi que le transfert des data du FormAdd vers Books se fait afin d'ajouter un nouveau livre
        this.props.validation(this.state.titleInput,this.state.authorInput,this.state.pagesNumberInput)

        // réinitialisation du state
        this.setState({
            titleInput: "",
            authorInput: "",
            pagesNumberInput: 0,
        })

    }

    render()
    {
        
        return(
            <div className="container">
                <h2 className="text-center text-primary" style={{fontFamily:'Sigmar One'}}>Add Book form</h2>
                <form  action="">
                    <fieldset>
                        <legend>Book informations</legend>

                        <div className="form-control">    
                            <label htmlFor="title" />Title<label />
                            <input onChange={(event) => {
                                this.setState({titleInput: event.target.value})}}  
                                   value={this.state.titleInput} 
                                   type="text" 
                                   className="form-control" 
                                   name="title" 
                                   id="title"/>
                        </div> 

                        <div className="form-control">
                            <label htmlFor="author" />Author<label />

                            <input onChange={(event) => {this.setState({authorInput: event.target.value})}}  
                                   value={this.state.authorInput}
                                   type="text" 
                                   className="form-control" 
                                   name="author" 
                                   id="author"/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="pagesNumber" />Pages Number<label />
                            <input onChange={(event) => {this.setState({pagesNumberInput: event.target.value})}}  
                                   value={this.state.pagesNumberInput}
                                   type="text" 
                                   className="form-control" 
                                   name="pagesNumber" 
                                   id="pagesNumber"/>
                        </div>
                        
                    </fieldset>
                    <Button typeBtn="btn-primary" clic={this.validateFormHandler}>Submit</Button>               
                </form>
            </div>  
        )
    }
}

export default FormAdd;