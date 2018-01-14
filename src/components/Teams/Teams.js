import React, { Component } from "react";
import axios from "axios";
import config from '../../key'

import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

import PlayersDialog from "./PlayersDialog";
import FixturesDialog from "./FixturesDialog";

import "./stylesheets/Teams.scss";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      fetchError: false,
      data: [],
      searchTeam: "",
      searchPlayer: "",
      searchFixture: ""
    };
  }

  // Function to sort data by name
  sortData() {
    // this.state.data.sort((a, b) => a.name.localeCompare(b.name))

    this.state.data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : 1;
    });
  }

  // Function that handles the input change
  updateSearchTeam = e => {
    this.setState({
      searchTeam: e.target.value
    });
  };
  updateSearchPlayer = e => {
    this.setState({
      searchPlayer: e.target.value
    });
  };
  updateSearchFixture = e => {
    this.setState({
      searchFixture: e.target.value
    });
  };

  componentWillMount() {

    // Dynamic request => ${this.props.teamUrl} passed in Navbar component
    axios
      .get(`http://api.football-data.org/v1/competitions/${this.props.teamUrl}/teams`, config)
      .then(res => this.setState({ data: res.data.teams, fetched: true }))
      .catch(err => this.setState({ fetchError: true, fetched: false }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.teamUrl !== this.props.teamUrl) {
      this.setState({ fetched: false })

      // Dynamic request => ${this.props.teamUrl} passed in Navbar component
      axios
        .get(`http://api.football-data.org/v1/competitions/${nextProps.teamUrl}/teams`, config)
        .then(res => this.setState({ data: res.data.teams, fetched: true }))
        .catch(err => this.setState({ fetchError: true, fetched: false }))
    }
  }

  render() {

    this.sortData();

    // Function to search a team by her name using the <input /> element

    const teams = this.state.data.filter(team => {
      const str = (team.name) + (team.shortName);

      return (
        str.toLowerCase().indexOf(this.state.searchTeam.toLowerCase()) !== -1
      );
    });

    return (
      <div className="bigContainer">

        <header>
          <h1>{this.props.title}</h1>
        </header>

        {this.state.fetchError &&
          <h3>Erreur...</h3>
        }

        {!this.state.fetched &&
          <div className="loading">
            <CircularProgress thickness={5} color="black" />
          </div>
        }

        {this.state.fetched && (
          <div className="animated fadeIn">
            <TextField hintText="Chercher une équipe"
              onChange={this.updateSearchTeam}
            />
            <ul className="teamsContainer">
              {teams.map((team, index) => (
                <li key={index} className="teamCard">
                  {console.log(`http://api.football-data.org/v1/competitions/${this.props.teamUrl}/teams`)}
                  <div className="teamInfos">
                    <div>
                      <img src={team.crestUrl} alt="écusson de l'équipe" />
                    </div>
                    <div>
                      <p>{team.name}</p>
                      {/* <p>{team.shortName}</p> */}
                      {/* <p>{team.code}</p> */}
                    </div>
                  </div>
                  <div className="buttonsContainer">
                    <div className="animated fadeInUp">
                      <PlayersDialog
                        playersUrl={team._links.players.href}
                        teamName={team.name}
                        teamLogo={team.crestUrl}
                        updateSearch={this.updateSearchPlayer}
                        searchPlayer={this.state.searchPlayer}
                      />
                    </div>
                    <div className="animated fadeInUp">
                      <FixturesDialog
                        fixturesUrl={team._links.fixtures.href}
                        teamName={team.name}
                        teamLogo={team.crestUrl}
                        updateSearch={this.updateSearchFixture}
                        searchFixture={this.state.searchFixture}
                      />
                    </div>
                    {/* <div>
                      <TableDialog teamUrl={this.props.teamUrl}
                                   teamName={this.props.title}/>
                    </div> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Teams;
