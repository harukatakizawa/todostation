import React from 'react';

class TodoForm extends React.Component {

  onSubmit(e) {
      e.preventDefault();
      this.props.addTodo(e.target.text.value);
      e.target.reset();
  }

  render() {
    return(
      <div className="TodoForm">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input name="text" type="text" placeholder="タスクを追加" autoComplete="off"/>
          <button>＋</button>
        </form>
        <div className="hr"/>
      </div>
    );
  }
}

export default TodoForm;