import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        //<label htmlFor="toggle-all" onClick={this.props.toggledState.bind(this, this.props.todoCounter === 0 ? false : true)}>Mark all as complete</label>
        <label htmlFor="toggle-all" onClick={this.props.toggledState.bind(this)}>Mark all as complete</label>
        <ul className="todo-list">
        {/*<!-- These are here just to show the structure of the list items -->*/}
        {/*<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->*/}
          {this.props.todos.map((todo, index) =>{
            return (
              <li className={todo.complete ? "completed" : null} key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox"
                  checked={todo.completed} onClick={this.props.markedComplete.bind(this, todo)}/>
                  <label>{todo.task}</label>
                  <button className="destroy" onClick={this.props.deletedTodos.bind(this, todo)}></button>
                </div>
                <input className="edit" value="Create a TodoMVC template"/>
              </li>
            )
          })}

        </ul>
      </section>

    )
  }
}

export default Main
