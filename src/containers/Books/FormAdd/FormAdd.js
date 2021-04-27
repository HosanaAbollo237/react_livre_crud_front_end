import React, {Component} from 'react'
import Button from '../../../components/Button/Button'
import {withFormik} from 'formik'

class FormAdd extends Component{
    
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
                            <input onChange={this.props.handleChange}
                                   onBlur={this.props.handleBlur}  
                                   value={this.props.values.title} 
                                   type="text" 
                                   className="form-control" 
                                   name="title" 
                                   id="title"/>
                            {
                                this.props.errors.title && this.props.touched.title && 
                                <span style={{color:'red'}}> 
                                    {this.props.errors.title}
                                </span>
                            } 

                        </div>

                        <div className="form-control">
                            <label htmlFor="author" />Author<label />
                            <input onChange={this.props.handleChange}
                                   onBlur={this.props.handleBlur}  
                                   value={this.props.values.author}
                                   type="text" 
                                   className="form-control" 
                                   name="author" 
                                   id="author"/>
                            {this.props.errors.author && this.props.touched.author &&
                             <span style={{color:'red'}}> 
                                {this.props.errors.author}
                            </span>} 

                        </div>

                        <div className="form-control">
                            <label htmlFor="pagesNumber" />Pages Number<label />
                            <input onChange={this.props.handleChange}  
                                   value={this.props.values.pagesNumber}
                                   type="text" 
                                   className="form-control" 
                                   name="pagesNumber" 
                                   id="pagesNumber"/>
                        </div>
                        {this.props.errors.pagesNumber && <span style={{color:"red"}}>{this.props.errors.pagesNumber}</span>}
                    </fieldset>
                    <Button typeBtn="btn-primary" type="submit" clic={this.props.handleSubmit}>Submit</Button>               
                </form>
            </div>  
        )
    }
}

export default withFormik({
    // Retourne un objet de props correspondant a l'attribut name du formulaire
    mapPropsToValues: () => ({
        title:'',
        author:'',
        pagesNumber:''
    }),
    validate: values => {
        const errors = {};
        if(values.title.length < 3){
            errors.title = "Le titre dois avoir au moins 3 caracères"
        }
        if(values.title.length > 15){
            errors.title = "Le titre dois avoir moins de 15 caracères"
        }
        if(!values.author){
            errors.author= "Veuillez renseigner un auteur"
        }
        if(isNaN(values.pagesNumber)){
            errors.pagesNumber = "Veuillez renseigner une valeur numérique"
        } else if(values.pagesNumber < 1 || values.pageNumber > 1000){
            errors.pagesNumber = "Veuillez insérer une valeur entre 1 et 1000"
        }

        return errors
    },
    handleSubmit: (values,{props}) => {
        props.validation(values.title,values.author,values.pagesNumber)
    }
})(FormAdd);


















