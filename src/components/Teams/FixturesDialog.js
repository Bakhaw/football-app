import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

import Fixtures from "../Fixtures/Fixtures";

export default class FixturesDialog extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const style = {
      width: "95%",
      maxWidth: "none",
    };

    const actions = [
      <FlatButton label="Retour" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div className="dialog">
        <button onClick={this.handleOpen}>
          <i className="ion-ios-football" />
        </button>
        <Dialog
          contentStyle={style}
          title={
            <div>
              <img
                src={this.props.teamLogo}
                alt="écusson de l'équipe"
                className="flag"
              />
              {this.props.teamName}
              <input
                type="text"
                placeholder="Rechercher un match"
                onChange={this.props.updateSearch}
                defaultValue={this.props.searchFixture}
              />
            </div>
          }
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <Fixtures
            fixturesUrl={this.props.fixturesUrl}
            searchFixture={this.props.searchFixture}
            teamLogo={this.props.teamLogo}
            teamName={this.props.teamName}
          />
        </Dialog>
      </div>
    );
  }
}
