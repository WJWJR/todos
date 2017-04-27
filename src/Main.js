import React, { Component } from 'react';

class Main extends Component {

  constructor(){
    super();
    this.state = {}
  }

togglingThis(todo) {
  this.props.togglingThis(todo)
}

setEditable(todo){
  console.log('double clicked on', todo)
  this.setState({
    editable: todo
  })
}

classNameFor (todo){
  if(todo === this.state.editable){
    return "editing"
  } else if (todo.complete) {
    return "completed"
  }
}

editTodo(todo, event) {
  this.props.updatesTodo(event.target.value)
}

finishEdit (){
  if (this.state.editable.task.trim().length === 0) {
    this.props.deletedTodo(this.stat.editable)
  }
  this.setState({
    editable:null
  })
}

  render () {

    return (
      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all" onClick={this.props.togglingThis.bind(this)}>Mark all as complete</label>
        <ul className="todo-list">
        {/*<!-- These are here just to show the structure of the list items -->*/}
        {/*<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->*/}
          {this.props.todos.map((todo, index) =>{
            return (
              <li className={this.classNameFor(todo)} key={index}>
                <div className="view" onDoubleClick={this.setEditable.bind(this, todo)}>
                  <input className="toggle" type="checkbox"
                  checked={todo.completed} onClick={this.props.markedComplete.bind(this, todo)}/>
                  <label>{todo.task}</label>
                  <button className="destroy"
                  onClick={this.props.deletedTodos.bind(this, todo)}></button>
                </div>
                <input className="edit"
                defaultValue={todo.task}
                onBlur={this.finishEdit.bind(this)}
                onChange={this.editTodo.bind(this, todo)}/>
              </li>
            )
          })}

        </ul>
      </section>

    )
  }
}

export default Main
