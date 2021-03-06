import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Championnats from '../Championnats/Championnats';

// Constans imports for the Dynamic Fetch
import { ChampionsLeague,
         PremierLeague,
         Ligue_1,
         Ligue_2,
         PrimeraDivision,
         Bundesliga,
         Serie_A,
         Serie_B } from './constants';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import './NavBar.scss';

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
          
            <Link to="/championnats/champions-league" onClick={this.handleClose}>
              <MenuItem>Champions League</MenuItem>
            </Link>

            <Link to="/championnats/premier-league" onClick={this.handleClose}>
              <MenuItem>Premier League</MenuItem>
            </Link>

            <Link to="/championnats/ligue-1" onClick={this.handleClose}>
              <MenuItem>Ligue 1</MenuItem>
            </Link>

            <Link to="/championnats/ligue-2" onClick={this.handleClose}>
              <MenuItem>Ligue 2</MenuItem>
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

            <Link to="/championnats/serie-b" onClick={this.handleClose}>
              <MenuItem>Serie B</MenuItem>
            </Link>
          
        </Drawer>


          <Switch>
            <Route path="/championnats/champions-league" render={ChampionsLeague}/>
            <Route path="/championnats/premier-league" render={PremierLeague}/>
            <Route path="/championnats/ligue-1" render={Ligue_1}/>
            <Route path="/championnats/ligue-2" render={Ligue_2}/>
            <Route path="/championnats/primera-division" render={PrimeraDivision}/>
            <Route path="/championnats/bundesliga" render={Bundesliga}/>
            <Route path="/championnats/serie-a" render={Serie_A}/>
            <Route path="/championnats/serie-b" render={Serie_B}/>
            <Route path="/" component={Championnats}/>
          </Switch>

      </div>
    </Router>    
    );
  }
}

export default NavBar;
