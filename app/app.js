// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const store = require('./store')
const authEvents = require('./events')
const gameEvents = require('./game')

$(() => {
  // your JS code goes here
  // hiding buttons on load
  $('#log-out-btn').hide()
  $('#show-games-btn').hide()
  $('#create-game-btn').hide()
  $('.board').hide()
  $('.change-password').hide()
  $('#end-game-btn').hide()
  //
  store.currentPlayer = 'x'
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#log-in-form').on('submit', authEvents.onLogIn)
  $('#log-out-btn').on('click', authEvents.onLogOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#show-games').on('click', gameEvents.onShowGames)
  $('#create-game-btn').on('click', gameEvents.onCreateGame)
  $('.play-new-game').on('click', gameEvents.onCreateGame)
  $('.cell').on('click', gameEvents.onUpdateGame)
  $('body').on('click', '.pick-game-btn', gameEvents.onPickGame)
})
