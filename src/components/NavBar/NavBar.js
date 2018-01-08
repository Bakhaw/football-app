import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Championnats from '../Teams/Championnats';

// Constans imports for the Dynamic Fetch
import { PL, L1, PD, B, SA } from './Constants';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import './NavBar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
    <Router>            
      <div className="navigation">
      
        <div className="buttonContainer">
          <RaisedButton
              label={<i className="ion-navicon"></i>}
              onClick={this.handleToggle}
              buttonStyle={{ backgroundColor: 'transparent' }}
              className="navigationButton"
            />
        </div>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
          containerStyle={{ backgroundColor: 'white' }}
        >
          
            <Link to="/" onClick={this.handleClose}>
              <MenuItem>Accueil</MenuItem>
            </Link>
          
            <Link to="/championnats/premier-league" onClick={this.handleClose}>
              <MenuItem>Premier League</MenuItem>
            </Link>
            <Link to="/championnats/ligue-1" onClick={this.handleClose}>
              <MenuItem>Ligue 1</MenuItem>
            </Link>
            <Link to="/championnats/primeira-division" onClick={this.handleClose}>
              <MenuItem>Primeria Division</MenuItem>
            </Link>

            <Link to="/championnats/bundesliga" onClick={this.handleClose}>
              <MenuItem>Bundesliga</MenuItem>
            </Link>

            <Link to="/championnats/serie-a" onClick={this.handleClose}>
              <MenuItem>Serie A</MenuItem>
            </Link>
          
        </Drawer>


          <Switch>
            <Route path="/championnats/premier-league" render={PL}/>
            <Route path="/championnats/ligue-1" render={L1}/>
            <Route path="/championnats/primeira-division" render={PD}/>
            <Route path="/championnats/bundesliga" render={B}/>
            <Route path="/championnats/serie-a" render={SA}/>
            <Route path="/" component={Championnats}/>
          </Switch>

      </div>
    </Router>    
    );
  }
}

export default NavBar;
