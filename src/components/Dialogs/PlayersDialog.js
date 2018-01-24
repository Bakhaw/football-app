import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from 'material-ui/TextField';

import Players from "../Players/Players";

export default class PlayersDialog extends React.Component {
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

    const title = (
      <div className="dialogTitle">
        <div className="dialogTeamInfos">
          <img
            src={this.props.teamLogo}
            alt="écusson de l'équipe"
            className="flag"
          />
          {this.props.teamName}
        </div>
        <div>
          <TextField hintText="Rehercher un joueur"
            onChange={this.props.updateSearch}
            defaultValue={this.props.searchPlayer}
          />
        </div>
    </div>
    )

    return (
      <div className="dialog">
        <button onClick={this.handleOpen}>
          <i className="ion-tshirt"></i>
        </button>
        <Dialog
          contentStyle={style}
          title={title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          paperClassName="dialogPaper"
          contentClassName="dialogContent"
          bodyClassName="dialogBody"
        >
          <Players
            playersUrl={this.props.playersUrl}
            searchPlayer={this.props.searchPlayer}
          />
        </Dialog>
      </div>
    );
  }
}
