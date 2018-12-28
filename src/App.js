import React from 'react';
import './assets/styling/App.css';
import Navigation from './components/Navigation'
import LandingPage from './components/LandingPage'

//smart components (with state)
import CouncilsContainer from './components/CouncilsContainer'

//dumb components (without state)


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <LandingPage />
      </div>
    );
  }
}

export default App;




/* <header className="App-header">
<h1>Registered Councils</h1>
</header>
<CouncilsContainer /> */

