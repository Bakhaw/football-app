import React, { Component } from "react";
import axios from "axios";
import config from "../../key";

import CircularProgress from "material-ui/CircularProgress";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

import "./Table.scss";

class LeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      table: []
    };
  }

  // fetch players
  async componentWillMount() {
    try {
      const res = await axios.get(
        `http://api.football-data.org/v2/competitions/${
          this.props.teamUrl
        }/standings/`,
        config
      );
      const table = await res.data.standings[0].table;
      this.setState({ table, fetched: true });
    } catch (error) {
      console.log(error.response);
    }
  }

  render() {
    console.log(this.state.table);
    return (
      <div>
        {!this.state.fetched && (
          <div className="loading">
            <CircularProgress thickness={5} color="black" />
          </div>
        )}

        {this.state.fetched && (
          <ul>
            <li>
              {console.log(
                `http://api.football-data.org/v1/competitions/${
                  this.props.teamUrl
                }/leagueTable`
              )}
              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn className="posRow">
                      Pos
                    </TableHeaderColumn>
                    <TableHeaderColumn className="teamRow">
                      Équipe
                    </TableHeaderColumn>
                    <TableHeaderColumn className="pointsRow">
                      Pts
                    </TableHeaderColumn>
                    <TableHeaderColumn className="playedRow">
                      Joués
                    </TableHeaderColumn>
                    <TableHeaderColumn className="winRow">
                      Victoires
                    </TableHeaderColumn>
                    <TableHeaderColumn className="drawRow">
                      Nuls
                    </TableHeaderColumn>
                    <TableHeaderColumn className="loseRow">
                      Défaites
                    </TableHeaderColumn>
                    <TableHeaderColumn className="goalsRow">
                      Pour
                    </TableHeaderColumn>
                    <TableHeaderColumn className="goalsRow">
                      Contre
                    </TableHeaderColumn>
                    <TableHeaderColumn className="goalsRow">
                      Différence
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
              </Table>
            </li>
            {this.state.table.map((data, index) => (
              <li key={index}>
                <Table>
                  <TableBody displayRowCheckbox={false} showRowHover={true}>
                    <TableRow>
                      <TableRowColumn className="posRow">
                        {data.position}
                      </TableRowColumn>
                      <TableRowColumn className="teamRow">
                        <img
                          src={data.team.crestUrl}
                          alt="écusson"
                          className="imgRow"
                        />{" "}
                        {data.team.name}
                      </TableRowColumn>
                      <TableRowColumn className="pointsRow">
                        {data.points}
                      </TableRowColumn>
                      <TableRowColumn className="playedRow">
                        {data.playedGames}
                      </TableRowColumn>
                      <TableRowColumn className="winRow">
                        {data.won}
                      </TableRowColumn>
                      <TableRowColumn className="drawRow">
                        {data.draw}
                      </TableRowColumn>
                      <TableRowColumn className="loseRow">
                        {data.lost}
                      </TableRowColumn>
                      <TableRowColumn className="goalsRow">
                        {data.goalsFor}
                      </TableRowColumn>
                      <TableRowColumn className="goalsRow">
                        {data.goalsAgainst}
                      </TableRowColumn>
                      <TableRowColumn className="goalsRow">
                        {data.goalDifference > 0
                          ? `+ ${data.goalDifference}`
                          : data.goalDifference}
                      </TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default LeagueTable;
