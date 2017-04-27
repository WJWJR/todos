import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {

constructor (){
  super();
  this.state = {
    todos: [
      {task: 'Taste Javascript', complete: true},
      {task: 'Buy a unicorn', complete: false}
    ]
  }
}
/*Main*/
addTodo (words) {
  let newTodo = { task: words, complete: false }
  let newTodosArray = this.state.todos.concat(newTodo)
  this.setState({
    todos: newTodosArray
  })
}

deletedTodos(todo){
 this.setState({
   todos: this.state.todos.filter(current => {
     return current !== todo;
   })
 })
 console.log('hello');
}

markedComplete(todo){
  this.setState({
    todos: this.state.todos.map(current => {
        if (current === todo) {
          todo.complete = !todo.complete;
        }
        return current;
    })
  })
}

toggledState(todo){

}


/*Footer this was called itemsLeft*/
itemsLeft() {
  if (this.state.todos.length === 0) {
    return "0"
  } else {
    return this.state.todos.length
  }

}

  render() {
    return (

      <section className="todoapp">
        <Header sendWordsToApp={this.addTodo.bind(this)}/>

        {/*<!-- This section should be hidden by default and shown when there are todos -->*/}

        <Main todos={this.state.todos}
        deletedTodos={this.deletedTodos.bind(this)}
        markedComplete={this.markedComplete.bind(this)}
        toggledState={this.toggledState.bind(this)}
        />

        {/*<!-- This footer should hidden by default and shown when there are todos -->*/}
        {this.state.todos.length === 0 ? null : <Footer counter={this.itemsLeft()} />}

      </section>

    );
  }
}

export default App;
