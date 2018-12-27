import React from 'react';
import './App.css';

//smart components (with state)
import CouncilsContainer from './components/CouncilsContainer'

//dumb components (without state)


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Registered Councils</h1>
        </header>
        <CouncilsContainer />
      </div>
    );
  }
}

export default App;