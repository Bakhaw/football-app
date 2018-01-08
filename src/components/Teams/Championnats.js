import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TableDialog from './TableDialog';

import logoBpl from './images/bg-bpl.png';
import logoLigue1 from './images/bg-ligue1.png';
import logoPrimeiraDivision from './images/bg-primeira-division.png';
import logoBundesliga from './images/bg-bundesliga.png';
import logoSerieA from './images/bg-serieA.png';

import './stylesheets/Championnats.css';

class Championnats extends Component {

  render() {
    return (
      <div className="championnats">
        <h1>CHAMPIONNATS</h1>
        <div className="cardsContainer">

        <div className="champCard">
          <img src={logoBpl} alt="Barclays Premier League"/>
          <div className="champButtons">
              <div>
                <Link to="/championnats/premier-league"
                      className="championnatCard button">
                  <i className="ion-flag"></i>
                </Link>
              </div>

              <div>
                <TableDialog teamUrl='445'
                             teamName='PREMIER LEAGUE'/>
              </div>
            </div>
        </div>

        <div className="champCard">
          <img src={logoLigue1} alt="Ligue 1"/>
          <div className="champButtons">
              <div>
                <Link to="/championnats/ligue-1"
                      className="championnatCard button">
                  <i className="ion-flag"></i>
                </Link>
              </div>

              <div>
                <TableDialog teamUrl='450'
                             teamName='LIGUE 1'/>
              </div>
            </div>
        </div>

        <div className="champCard">
          <img src={logoPrimeiraDivision} alt="Primeira Division"/>
          <div className="champButtons">
              <div>
                <Link to="/championnats/primeira-division"
                      className="championnatCard button">
                  <i className="ion-flag"></i>
                </Link>
              </div>

              <div>
                <TableDialog teamUrl='455'
                             teamName='PRIMEIRA DIVISION'/>
              </div>
            </div>
        </div>

        <div className="champCard">
          <img src={logoBundesliga} alt="Bundesliga"/>
          <div className="champButtons">
              <div>
                <Link to="/championnats/bundesliga"
                      className="championnatCard button">
                  <i className="ion-flag"></i>
                </Link>
              </div>

              <div>
                <TableDialog teamUrl='452'
                             teamName='BUNDESLIGA'/>
              </div>
            </div>
        </div>

        <div className="champCard">
          <img src={logoSerieA} alt="Serie A"/>
          <div className="champButtons">
              <div>
                <Link to="/championnats/serie-a"
                      className="championnatCard button">
                  <i className="ion-flag"></i>
                </Link>
              </div>

              <div>
                <TableDialog teamUrl='456'
                             teamName='SERIE A'/>
              </div>
            </div>
        </div>

        </div>
      </div>
    );
  }

}

export default Championnats;
