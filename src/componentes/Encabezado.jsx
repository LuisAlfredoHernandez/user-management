import React, {Component} from 'react';


const style = {
    inline:{
        display: 'inline'
    } 
  }
  
export default class Encabezado extends Component {
  render() { 
    const {newUserClickHandler} = this.props
    return (
        <div>
           <h1 style ={style.inline}>Usuarios</h1>
           <button style ={style.inline} onClick={newUserClickHandler}>Nuevo Usuario</button>
        </div>
        )
      }
  }