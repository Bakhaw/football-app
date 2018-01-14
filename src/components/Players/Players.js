import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import config from '../../key'
import sortFlags from './functions';
import CircularProgress from 'material-ui/CircularProgress';

import './Players.css';

class Players extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      players: [],
      flags: [],
    };
  }

  // fetch players on the football API
  async componentWillMount() {

    const res = await axios.get(this.props.playersUrl, config)
    const players = await res.data.players;
    this.setState({ players, fetched: true })
  }

  // fetch flags on the countries API
  async componentDidMount() {
    console.log('https://restcountries.eu/rest/v2/all')
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    const flags = await res.data;
    this.setState({ flags });
  }

  render() {

    const players = this.state.players.filter(player => {
      const str = (player.name) + (player.nationality);
      return str.toLowerCase().indexOf(this.props.searchPlayer) !== -1;
    });

    return (
      <div>

        {!this.state.fetched &&
          <div className="loading">
            <CircularProgress thickness={5} color="black"/>
          </div>
        }

      {
        this.state.fetched &&
          <ul className="playersContainer">
            {
              players.map((data, index) =>
              <li key={index} className="playerCard">
              {console.log(this.props.playersUrl)}
                <h3>{data.jerseyNumber}. {data.name}</h3>
                <p>{data.position}</p>

                {/* calculate player age with moment.diff() method */}
                <p>
                  {data.dateOfBirth} ({moment(Date.now()).diff(data.dateOfBirth, 'year')} ans)
                </p>
                <p>{data.nationality}</p>
                {/* FLAGS */}
                {
                  this.state.flags.map((flag, index) => {
                    return (
                      sortFlags(flag.name, flag.nativeName, data.nationality, flag.flag, index)
                    )
                  })
                }
              </li>
            )}
          </ul>
      }
    </div>
  )
  }
}

export default Players;
