import React, {Component} from 'react';
import Whiteboard from './whiteboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Whiteboard className="Board"/>
      </div>
    );
  }
}

export default App;
