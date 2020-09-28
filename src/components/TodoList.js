import React from 'react';


class TodoList extends React.Component {

  todoList() {
      return(
        this.props.todos.map((todo, index) => (
          <li key={index} id={index}>
            {todo}
            <div className='hr'/>
          </li>
        ))
      )
  }
  
  render() {
    return(
      <div className='TodoList'>
        <ul>
          {this.todoList()}
        </ul>
      </div>
    )
  }
}

export default TodoList;

