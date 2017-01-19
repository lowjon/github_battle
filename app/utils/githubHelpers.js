const axios = require('axios');

let id = "YOUR_CLIENT_ID"
let sec = "YOUR_SECRET_ID"
// let param = "?client_id=" + id + "&client_secret=" = sec;

function getUserInfo (username) {
  return axios.get('http://api.github.com/users/' + username) //+ param)
}

const helpers = {
  getPlayersInfo: function (players) {
    //fetch some datea from github
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      console.log('INFO', info);
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;
