import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoFile extends Component {
    getStyle = ()=>{
        return {
            background: 'blue',
            padding: '10px',
            borderBottom: '1px red dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }



    render() {
        const { id, title } = this.props.todo;
        return (
            // Pode escrever como {{ backgroundColor: 'blue'}}
            <div style={this.getStyle()}>
                <p>
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this, id)}></input>
                    {title}
                </p>

            </div>
        )
    }
}

TodoFile.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: 'red'
}

export default TodoFile
