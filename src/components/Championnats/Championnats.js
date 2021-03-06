import React, { Component } from "react";
import { Link } from "react-router-dom";

import ChampCard from "./ChampCard";
import ChampionsLeagueCard from "./ChampionsLeagueCard";
import TableDialog from "../Dialogs/TableDialog";

import logoBpl from "./images/logo-bpl.png";
import logoLigue1 from "./images/logo-ligue-1.png";
import logoLigue2 from "./images/logo-ligue-2.png";
import logoPrimeraDivision from "./images/logo-primera-division.png";
import logoBundesliga from "./images/logo-bundesliga.png";
import logoSerieA from "./images/logo-serie-a.png";
import logoSerieB from "./images/logo-serie-b.png";
import logoChampionsLeague from "./images/logo-champions-league.png";

import "./Championnats.scss";

class Championnats extends Component {
  render() {
    return (
      <div className="championnats">
        <h1>CHAMPIONNATS</h1>
        <div className="cardsContainer">
          <ChampCard
            logo={logoBpl}
            champUrl="premier-league"
            teamUrl="2021"
            title="PREMIER LEAGUE"
          />

          <ChampCard
            logo={logoLigue1}
            champUrl="ligue-1"
            teamUrl="2015"
            title="LIGUE 1"
          />

          {/* <ChampCard
            logo={logoLigue2}
            champUrl="ligue-2"
            teamUrl="2142"
            title="LIGUE 2"
          /> */}

          {/* <ChampCard
            logo={logoPrimeraDivision}
            champUrl="primera-division"
            teamUrl="2101"
            title="PRIMERA DIVISION"
          /> */}

          {/* <ChampCard
            logo={logoBundesliga}
            champUrl="bundesliga"
            teamUrl="2012"
            title="BUNDESLIGA"
          /> */}

          <ChampCard
            logo={logoSerieA}
            champUrl="serie-a"
            teamUrl="2013"
            title="SERIE A"
          />

          {/* <ChampCard
            logo={logoSerieB}
            champUrl="serie-b"
            teamUrl="2029"
            title="SERIE B"
          /> */}

          <ChampionsLeagueCard
            logo={logoChampionsLeague}
            champUrl="champions-league"
            teamUrl="2001"
            title="CHAMPIONS LEAGUE"
          />
        </div>
      </div>
    );
  }
}

export default Championnats;
