import React, {Component} from 'react';
import Encabezado from './Encabezado';
import List from './List';


export default class ViewList extends Component {
    render() { 
      const {data, newUserClickHandler, editUserClickHandler} = this.props;
      return (
        <div>
          <Encabezado newUserClickHandler = {newUserClickHandler}/>
          <List data={data} editUserClickHandler={editUserClickHandler}/>
        </div>
        )
      }
  }