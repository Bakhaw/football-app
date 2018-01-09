import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ChampionsLeagueTableDialog from './ChampionsLeagueTableDialog';

export class ChampionsLeagueCard extends Component {
  render() {
    return (
      <div className="champCard">
        <img src={this.props.logo} alt="Écusson du Championnat" />
        <div className="champButtons">
          <div>
            <Link
              to={`/championnats/${this.props.champUrl}`} //championnats/premier-league
              className="championnatCard button"
            >
              <i className="ion-flag" />
            </Link>
          </div>

          <div>
            <ChampionsLeagueTableDialog teamUrl={this.props.teamUrl} // 445
                         teamName={this.props.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionsLeagueCard;
