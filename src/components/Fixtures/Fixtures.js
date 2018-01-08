import React, { Component } from "react";
import axios from "axios";

import CircularProgress from 'material-ui/CircularProgress';

import "./Fixtures.css";

const sortStatus = (status, date) => {
  switch (status) {
    case 'FINISHED':
      return (
      <div>
        <p>{date.slice(0, 10)}</p>
        <h4 style={{ color: 'red' }}>{status}</h4>
      </div>
      )
      break;
  
    case 'SCHEDULED':
      return (
      <div>
        <p>{date.slice(0, 10)}</p>
        <h4 style={{ color: 'green' }}>{status}</h4>
        <h5>{date.slice(11, -4)}</h5>
      </div>
      )

    default:
      return (
        <div>
          <p>{date.slice(0, 10)}</p>
          <h4 style={{ color: 'black' }}>{status}</h4>
          <h5>{date.slice(11, -4)}</h5>
        </div>
      )
      break;
  }
}

class Fixtures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      fixtures: [],
    };
  }

  // fetch players
  async componentWillMount() {
    const config = {
      headers: {
        'X-Auth-Token': "30ea7fb651f44392abedbb05d36eec2b",
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      }
    };

    const res = await axios.get(this.props.fixturesUrl, config);
    const fixtures = res.data.fixtures;
    this.setState({ fixtures, fetched: true })
  }

  render() {

    const fixtures = this.state.fixtures.filter(fixture => {
      const str = (fixture.homeTeamName) + (fixture.awayTeamName);
      return str.toLowerCase().indexOf(this.props.searchFixture) !== -1;
    });

    return (
      <div>

        {!this.state.fetched &&
          <div className="loading">
            <CircularProgress thickness={5} color="black"/>
          </div>
        }

        {this.state.fetched && 
          <div>
            <ul className="fixturesContainer">
            {console.log(this.props.fixturesUrl)}
            {
              fixtures.map((data, index) => 
            <li key={index}>
                <div className="fixtureCard">
                  {/* <p>Match {data.matchday}</p> */}


                  {/* Looks like: Arsenal 1 : 2 Chelsea */}
                  <div className="cardContent">
                    <p>{data.homeTeamName}</p>

                    {/* The winner have a number bigger than the loser */}
                    {
                      (data.result.goalsHomeTeam > data.result.goalsAwayTeam)
                        ? <h2>{data.result.goalsHomeTeam}</h2>
                        : <h5>{data.result.goalsHomeTeam}</h5>
                    }
                  </div>
                  <div>
                    {/* Function to sort the status of the match */}
                    {sortStatus(data.status, data.date)}
                  </div>
                  <div className="cardContent">
                    
                    {(data.result.goalsHomeTeam < data.result.goalsAwayTeam)
                     ?  <h2>{data.result.goalsAwayTeam}</h2>
                     :  <h5>{data.result.goalsAwayTeam}</h5>
                    }

                    <p>{data.awayTeamName}</p>                    
                  </div>
                </div>
              </li>
            )}
          </ul>
          </div>
        }
      </div>
    )
  }
}

export default Fixtures;
