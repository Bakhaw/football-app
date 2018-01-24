// Dynamic Fetch Constants
import React from 'react';
import Teams from '../Teams/Teams';

// CHAMPIONS LEAGUE
export const ChampionsLeague = (props) => {
  return <Teams teamUrl='464'
                champUrl='champions-league'
                title='CHAMPIONS LEAGUE' {...props}/>;
};

// PREMIER LEAGUE
export const PremierLeague = (props) => {
  return <Teams teamUrl='445'
                champUrl='premier-league'
                title='PREMIER LEAGUE' {...props}/>;
};

// LIGUE 1
export const Ligue_1 = (props) => {
  return <Teams teamUrl='450'
                champUrl='ligue-1'
                title='LIGUE 1' {...props}/>;
};

// LIGUE 2
export const Ligue_2 = (props) => {
  return <Teams teamUrl='451'
                champUrl='ligue-2'
                title='LIGUE 2' {...props}/>;
};

// PRIMERA DIVISION
export const PrimeraDivision = (props) => {
  return <Teams teamUrl='455'
                champUrl='primera-division'
                title='PRIMERA DIVISION' {...props}/>;
};

// BUNDESLIGA
export const Bundesliga = (props) => {
  return <Teams teamUrl='452'
                champUrl='bundesliga'
                title='BUNDESLIGA' {...props}/>;
};

// SERIE A
export const Serie_A = (props) => {
  return <Teams teamUrl='456'
                champUrl='serie-a'
                title='SERIE A' {...props}/>;
};

// SERIE B
export const Serie_B = (props) => {
  return <Teams teamUrl='459'
                champUrl='serie-b'
                title='SERIE B' {...props}/>;
};
