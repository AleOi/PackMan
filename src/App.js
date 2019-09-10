import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component{

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id == id){github
        
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  state = {
    todos:[
      {
        id:1,
        title:'Trash',
        completed: false
      },
      {
        id:2,
        title:'Dinner',
        completed: false
      },
      {
        id:3,
        title:'Meeting',
        completed: true
      }

    ]

  }

  render(){
    console.log(this.state.todos);
    return (
      <div className = "App">
        <Todo fazer = {this.state.todos} markComplete = {this.markComplete}></Todo>
      </div>
    );
  }


}

export default App;
