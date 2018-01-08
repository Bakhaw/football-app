import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

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

    const config = {
      headers: {
        'X-Auth-Token': '30ea7fb651f44392abedbb05d36eec2b',
        'Access-Control-Allow-Origin': '*'
      },
    };

    const res = await axios.get(this.props.playersUrl, config)
    const players = await res.data.players;
    this.setState({ players, fetched: true })
  }

  // fetch flags on the countries API
  async componentDidMount() {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    const flags = await res.data;
    this.setState({ flags });
  }

  // Function to match the countries API names with the football API nationality
  sortFlags(name, nativeName, nationality, flag, index) {
  
    // Flags name on the countries API
    const countryName = name.toLowerCase(); // flag.name
    const countryNativeName = nativeName.toLowerCase(); // flag.nativeName
    
    // Player nationality on the football API
    const player = nationality.toLowerCase(); // data.nationality
  
    const condition1 = countryNativeName === player;
  
    const condition2 = countryName === player;
  
    // match all the countries located in united kingdom                      
    const condition3 = countryNativeName === 'united kingdom'
                       && player === 'england' ||
                       countryNativeName === 'united kingdom'
                       && player === 'wales' ||
                       countryNativeName === 'united kingdom'
                       && player === 'scotland' ||
                       countryNativeName === 'united kingdom'
                       && player === 'northern ireland';

    const condition4 = countryName === 'bosnia and herzegovina'
                       && player === 'bosnia-herzegovina';
  
    const condition5 = countryName === "côte d'ivoire"
                       && player === "cote d'ivoire";
  
    const condition11 = countryName === 'cabo verde'
                        && player === 'cape verde';

    const condition9 = countryName === 'new caledonia'
                       && player === 'neukaledonien';
   
    const condition10 = countryName === 'gambia'
                        && player === 'the gambia';

    const condition6 = countryNativeName === '대한민국'
                       && player === 'korea, south';
  
    const condition7 = countryNativeName === 'république démocratique du congo'
                       && player === 'congo dr';
  
    const condition8 = countryNativeName === 'curaçao'
                       && player === 'curacao';
  
    const condition12 = countryNativeName === 'македонија'
                        && player === 'macedonia'
  
  
    const conditions = condition1 || condition2 || condition3 ||
                       condition4 || condition5 || condition6 ||
                       condition7 || condition8 || condition9 ||
                       condition10 || condition11 || condition12
  
    if(conditions) {
      return <img src={flag} alt="drapeau" key={index} className="flag"/> //flag.flag
    }
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
                      this.sortFlags(flag.name, flag.nativeName, data.nationality, flag.flag, index)
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
