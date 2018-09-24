import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Form, Button, Input, Label, FormGroup} from 'reactstrap'
import './css/AddQuestion.css'
import serializeForm from 'form-serialize';
import{Redirect} from 'react-router-dom'
import {handleAddQuestion} from "../actions/Questions"
class AddQuestion extends Component{
    state={
        textOne:'',
        textTwo:'',
        change:false
    }

handleSubmit=(e)=>{
    e.preventDefault()
    const { textOne, textTwo }= serializeForm(e.target, {hash: true})
    const {dispatch} = this.props
 dispatch(handleAddQuestion(textOne, textTwo))
    this.setState(()=>({
        textOne:'',
        textTwo:'',
       change:true
    }))
}
    render(){
     if (this.state.change === true) {
            return <Redirect to='/'/>
        }
        return(
        <div>
                <h1>Would You Rather :</h1>
             <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="optionOne"><h4>Option One:</h4></Label>
                        <Input className="input"
                            type="text"
                            name="textOne"
                            placeholder="Write Option"
                            required
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="optionTwo"><h4>Option Two:</h4></Label>
                        <Input className="input"
                            type="text"
                            name="textTwo"
                            placeholder="Write Option"
                            required
                            />
                    </FormGroup>
                    <Button className="btns">Add Question</Button>
                </Form>
            </div>
        
        )
    }
}

export default connect()(AddQuestion)