import React, { Component } from "react";
import axios from "axios";
import config from "../../key";

import CircularProgress from "material-ui/CircularProgress";

import "./Fixtures.scss";

const sortStatus = (status, date) => {
  switch (status) {
    case "FINISHED":
      console.log("ici", { status, date });
      return (
        <div>
          <p className="date">{date.slice(0, 10)}</p>
          <h4 style={{ color: "red" }}>{status}</h4>
        </div>
      );
      break;

    case "SCHEDULED":
      return (
        <div>
          <h4 style={{ color: "green" }}>{status}</h4>
          <p>{date.slice(0, 10)}</p>
          <h5>{date.slice(11, -4)}</h5>
        </div>
      );

    default:
      return (
        <div>
          <h4 style={{ color: "black" }}>{status}</h4>
          <p>{date.slice(0, 10)}</p>
          <h5>{date.slice(11, -4)}</h5>
        </div>
      );
      break;
  }
};

class Fixtures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      fixtures: []
    };
  }

  // fetch players
  async componentWillMount() {
    const res = await axios.get(
      `http://api.football-data.org/v2/teams/${this.props.fixturesUrl}/matches`,
      config
    );
    const fixtures = res.data.matches;
    this.setState({ fixtures, fetched: true });
  }

  render() {
    const fixtures = this.state.fixtures.filter(fixture => {
      const str = fixture.homeTeam.name + fixture.awayTeam.name;
      return str.toLowerCase().indexOf(this.props.searchFixture) !== -1;
    });

    return (
      <div>
        {!this.state.fetched && (
          <div className="loading">
            <CircularProgress thickness={5} color="black" />
          </div>
        )}

        {this.state.fetched && (
          <div>
            <ul className="fixturesContainer">
              {fixtures.map(
                (data, index) => (
                  console.log("dataaa", data),
                  (
                    <li key={index}>
                      <div className="fixtureCard">
                        {/* <p>Match {data.matchday}</p> */}

                        {/* Looks like: Arsenal 1 : 2 Chelsea */}
                        <div className="cardContent">
                          <p>{data.homeTeam.name}</p>

                          {/* The winner have a number bigger than the loser */}
                          {data.score.fullTime.homeTeam >
                          data.score.fullTime.awayTeam ? (
                            <h2>{data.score.fullTime.homeTeam}</h2>
                          ) : (
                            <h5>{data.score.fullTime.homeTeam}</h5>
                          )}
                        </div>
                        <div>
                          {/* Function to sort the status of the match */}
                          {sortStatus(data.status, data.utcDate)}
                        </div>
                        <div className="cardContent">
                          {data.score.fullTime.homeTeam <
                          data.score.fullTime.awayTeam ? (
                            <h2>{data.score.fullTime.awayTeam}</h2>
                          ) : (
                            <h5>{data.score.fullTime.awayTeam}</h5>
                          )}

                          <p>{data.awayTeam.name}</p>
                        </div>
                      </div>
                    </li>
                  )
                )
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Fixtures;
