import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
        <NavBar />
    </MuiThemeProvider>
    );
  }
}

export default App;
