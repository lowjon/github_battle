const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const githubHelpers = require('../utils/githubHelpers');

const ConfirmBattleContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function () {
    let query = this.props.location.query
    // Fetch information from github then update state

    //for more help with the this keyword goto
    // https://egghead.io/playlists/the-this-keyword-250c37d9
     
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },
  render: function () {
    return (
      <ConfirmBattle
      isLoading = {this.state.isLoading}
      playersInfo = {this.state.playersInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer
