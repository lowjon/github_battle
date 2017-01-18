const React = require('react');
const Prompt = require('../components/Prompt');

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: ''
    }
  },

    handleSubmitUser: function (e) {
    e.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ''
    });

    if(this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      //go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
      console.log(this);
    }
  },

  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },

  render: function (){
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
