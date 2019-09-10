import React, { Component } from 'react';
import TodoFile from './TodoFile';
import PropTypes from 'prop-types';

class Todo extends Component{


    render(){
        // Note que se der console log de this.props
        // o javascript vai entender que this se
        // refere a Todo
        // Lembrar que map precisa de parenteses e não chave
      return  this.props.fazer.map((valor) =>(
        <TodoFile key = { valor.id } todo = { valor } markComplete = {this.props.markComplete}></TodoFile>
      ))

  }
}

Todo.propTypes = {
    fazer: PropTypes.array.isRequired
}

export default Todo;
