import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import FormList from './componentes/FormList';
import ViewList from './componentes/ViewList';


export default class App extends Component {
    state = {
        data:[],
        route:'List'
    }

    constructor(){
       super();
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(({data}) => this.setState({data})) 
          .catch((err) => console.log(err));
    }
    

    newUserClickHandler = ()=>{
        this.setState({
            route:'Form', 
            selectedUser:undefined
        })
    }

    editUserClickHandler = (id)=>{
        this.setState({
            route:'Form', 
            selectedUser:id
        })
    }

    saveNewUserHandler = (user)=>{
        axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(({data}) => {
           const newData = this.state.data.concat(data)
           this.setState({
               route:'List', 
               data:newData
            })
        }) 
        .catch((err) => console.log(err));
    }

    updateUserClickHandler = (id, values)=>{
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,values)
        .then(() => {
           const newData = this.state.data.map(x => x.id === id? values:x)
           this.setState({
               route:'List', 
               data:newData
            })
        }) 
        .catch((err) => console.log(err));
    }



    render() { 
      const {route, data, selectedUser} = this.state;
      const initialValues = selectedUser && data.find(x => x.id === selectedUser)
      return (
        <div className='App'>
            { route === 'List' && <ViewList
              newUserClickHandler={this.newUserClickHandler} 
              editUserClickHandler={this.editUserClickHandler}
              data={data}
              />} 

            { route === 'Form' && <FormList 
              saveNewUserHandler={this.saveNewUserHandler} 
              initialValues={initialValues || {}}
              updateUserClickHandler={this.updateUserClickHandler} 
             />}
        </div>       
        )
    }
}