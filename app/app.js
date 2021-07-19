// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events')
const gameEvents = require('./game')

$(() => {
  // your JS code goes here
  $('.forms').hide('fast')
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#log-in-form').on('submit', authEvents.onLogIn)
  $('#log-out-btn').on('click', authEvents.onLogOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#show-games').on('click', gameEvents.onShowGames)
  $('#create-game').on('click', gameEvents.onCreateGame)
  $('#sign-up-btn').on('click', () => $('#sign-up-form').toggle('slow', () => $('#log-in-form').toggle(false)))
  $('#log-in-btn').on('click', () => $('#log-in-form').toggle('slow', () => $('#sign-up-form').toggle(false)))
})
