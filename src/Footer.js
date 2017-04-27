import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {/*<!-- This should be `0 items left` by default -->*/}
        <span className="todo-count"><strong>{this.props.counter}</strong> todo{this.props.counter === 1 ? "" : "s"}</span>
        {/*<!-- Remove this if you dont implement routing -->*/}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/*<!-- Hidden if no completed items are left ↓ -->*/}
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default Footer
