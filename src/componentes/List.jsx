import React, {Component} from 'react';


export default class List extends Component {
    
  handleclick = id => e => {
     const {editUserClickHandler} = this.props
     editUserClickHandler(id);
  }

  render() { 
      const {data} = this.props;
      return (
        <ul>
           { data.map(x=>
                <li key={x.id}>{x.name} <button onClick={this.handleclick(x.id)}>Editar</button></li>)}
        </ul>
        )
      }
  }