// Dynamic Fetch Constants
import React from 'react';
import Teams from '../Teams/Teams';

// CHAMPIONS LEAGUE
export const CL = (props) => {
  return <Teams teamUrl='464'
                champUrl='champions-league'
                title='CHAMPIONS LEAGUE' {...props}/>;
};

// PREMIER LEAGUE
export const PL = (props) => {
  return <Teams teamUrl='445'
                champUrl='premier-league'
                title='PREMIER LEAGUE' {...props}/>;
};

// LIGUE 1
export const L1 = (props) => {
  return <Teams teamUrl='450'
                champUrl='ligue-1'
                title='LIGUE 1' {...props}/>;
};

// LIGUE 2
export const L2 = (props) => {
  return <Teams teamUrl='451'
                champUrl='ligue-2'
                title='LIGUE 2' {...props}/>;
};

// PRIMEIRA DIVISION
export const PD = (props) => {
  return <Teams teamUrl='455'
                champUrl='primera-division'
                title='PRIMERA DIVISION' {...props}/>;
};

// BUNDESLIGA
export const B = (props) => {
  return <Teams teamUrl='452'
                champUrl='bundesliga'
                title='BUNDESLIGA' {...props}/>;
};

// SERIE A
export const SA = (props) => {
  return <Teams teamUrl='456'
                champUrl='serie-a'
                title='SERIE A' {...props}/>;
};

// SERIE B
export const SB = (props) => {
  return <Teams teamUrl='459'
                champUrl='serie-b'
                title='SERIE B' {...props}/>;
};
