const store = require('./store')
const config = require('./config')

// Auth api calls
const signUp = (data) => {
  console.log(data, ' Sign Up')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const logIn = (data) => {
  console.log(data, ' Log In')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const logOut = () => {
  console.log('Log Out')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const changePassword = (data) => {
  console.log('Password Changed')
  return $.ajax({
    url: config.apiUrl + '/change-password',
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
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const createGame = () => {
  console.log('Create Game')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const updateGame = (data) => {
  console.log('Updating game')
  return $.ajax({
    url: config.apiUrl + '/games/' + store._id,
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
    url: config.apiUrl + '/games/' + data,
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
