import React, {Component} from 'react';


const validate = values=>{
  const errors = {}
  if(!values.name){
    errors.name = 'El campo Nombre esta vacio!'
  } 
  if(!values.email){
    errors.email = 'El campo E-mail esta vacio!'
  } 
  if(!values.website){
    errors.website = 'El campo website esta vacio!'
  } 
  return errors;
}


export default class FromList extends Component {
  state = {
    errors:{}
  }

 constructor(props){ 
   super(props)
   this.state = {
     ...this.state,
     ...props.initialValues
  }
 }

  handlerChange=({target})=>{
    this.setState({[target.name]: target.value})
  }

  handlerSubmit=e=>{
    e.preventDefault();
    const {errors, ...sinErrors} = this.state
    const result = validate(sinErrors);
    if(!Object.keys(result).length){
       const {saveNewUserHandler, updateUserClickHandler, initialValues} = this.props
       if(initialValues.id){
        updateUserClickHandler(initialValues.id, sinErrors)
       }else {
        saveNewUserHandler(sinErrors);
       }
    } else{
        this.setState({errors:result})
     }
  }


  render() {
    const {errors} = this.state 
    const {initialValues} = this.props
    return (
        <form onSubmit={this.handlerSubmit}>
           <input defaultValue={initialValues.name} name='name' onChange={this.handlerChange} placeholder="Name"/> 
            {errors.name && <p>{errors.name}</p>}
           <input defaultValue={initialValues.email} name='email' onChange={this.handlerChange} placeholder="E-mail"/> 
            {errors.email && <p>{errors.email}</p>}
           <input defaultValue={initialValues.website} name='website' onChange={this.handlerChange} placeholder="Website"/>
            {errors.website && <p>{errors.website}</p>}
           <input type="submit" value="Enviar" /> 
        </form>
        )
     }
  }