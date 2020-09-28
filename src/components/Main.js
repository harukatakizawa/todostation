import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const todos = [];
const TODO_ENDPOINT = "http://localhost:4000/api/todos"

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      todos: todos
    };
  }

  getTodos = todo => {
    axios
    .get(TODO_ENDPOINT)
    .then(results => {
      const TodoData = results.data;
      this.setState({
        todos: [...this.state.todos, TodoData]
      })
    })
  }

  addTodo = todo => {
    if (todo == false) {
      alert("タスクを入力してください")
      return;
    } else {
      this.setState({ 
        todos: [...this.state.todos, todo]
      })
    }
  }

  addId = id => {
    this.setState({
      id: id
    })
  }

  render() {
    return(
      <div className='Main'>
        <TodoForm
          addTodo={this.addTodo.bind(this)}
        />
        <TodoList
          id={this.state.id}
          todos={this.state.todos}
        />
      </div>
    );
  }
}


export default Main;