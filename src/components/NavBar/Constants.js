// Dynamic Fetch Constants
import React from 'react';
import Teams from '../Teams/Teams';

export const PL = (props) => {
  return <Teams teamUrl='445'
                champUrl='premier-league'
                title='PREMIER LEAGUE' {...props}/>;
};

export const L1 = (props) => {
  return <Teams teamUrl='450'
                champUrl='ligue-1'
                title='LIGUE 1' {...props}/>;
};

export const PD = (props) => {
  return <Teams teamUrl='455'
                champUrl='primeira-division'
                title='PRIMEIRA DIVISION' {...props}/>;
};

export const B = (props) => {
  return <Teams teamUrl='452'
                champUrl='bundesliga'
                title='BUNDESLIGA' {...props}/>;
};

export const SA = (props) => {
  return <Teams teamUrl='456'
                champUrl='serie-a'
                title='SERIE A' {...props}/>;
};
