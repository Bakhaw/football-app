import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../../key'

class ChampionsLeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      fetched: false
    };
  }

  async componentWillMount() {
    const config = {
      headers: {
        "X-Auth-Token": apiKey
      }
    };

    const res = await axios
    .get(`http://api.football-data.org/v1/competitions/${this.props.teamUrl}/leagueTable/`, config)
    await console.log(...res.data.standings.A)
  }

  render() {
    return (
      <div>
        <h5 style={{ textAlign: 'center' }}>Classement à venir ...</h5>
      </div>
    );
  }
}

export default ChampionsLeagueTable;