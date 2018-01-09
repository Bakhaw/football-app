import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

import ChampionsLeagueTable from "../Table/ChampionsLeagueTable";

export default class TableDialog extends React.Component {
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
      contentStyle: {
        width: "95%",
        maxWidth: "none",
      }
    };

    const actions = [
      <FlatButton label="Retour" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div className="dialog">
        <button onClick={this.handleOpen} className="button">
          <i className="ion-podium"></i>
        </button>
        <Dialog
          contentStyle={style.contentStyle}
          title={`${this.props.teamName} Classement 2017-2018`}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          paperClassName="dialogPaper"
          contentClassName="dialogContent"
          bodyClassName="dialogBody"
        >
          <ChampionsLeagueTable teamUrl={this.props.teamUrl}/>
        </Dialog>
      </div>
    );
  }
}
