const store = require('./store')
// API call // sign user up
const signUp = (data) => {
  console.log(data, ' Sign Up')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}
// API call // log user in
const logIn = (data) => {
  console.log(data, ' Log In')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}
// API call // log user out
const logOut = () => {
  console.log('Log Out')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// API call // show user all games
const showGames = () => {
  console.log('Show Games')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// API call // create a new game
const createGame = () => {
  console.log('Create Game')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

module.exports = {
  signUp,
  logIn,
  logOut,
  showGames,
  createGame
}
