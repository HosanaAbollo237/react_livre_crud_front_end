import React,{Component} from 'react'
import Button from '../../../components/Button/Button'

class ChangeForm extends Component {

    state = {
        titleInput: this.props.title,
        authorInput: this.props.author,
        pagesNumberInput: this.props.pagesNumber
    }
    
    validateFormHandler = () => {
        console.log(this.state.pagesNumberInput)
        this.props.validation(this.props.id,this.state.titleInput, this.state.authorInput, this.state.pagesNumberInput)
    }

    render(){
        return(
            <>
                    <td><input type="text" 
                               value={this.state.titleInput} 
                               onChange={(event) => {
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