const store = require('./store')

// Auth api calls
const signUp = (data) => {
  console.log(data, ' Sign Up')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}

const logIn = (data) => {
  console.log(data, ' Log In')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}

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

const changePassword = (data) => {
  console.log('Password Changed')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/change-password',
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

// Game api calls
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

const updateGame = (data) => {
  console.log('Updating game')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store._id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const pickGame = (data) => {
  console.log('Picking game')
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

module.exports = {
  signUp,
  logIn,
  logOut,
  changePassword,
  showGames,
  createGame,
  updateGame,
  pickGame
}
