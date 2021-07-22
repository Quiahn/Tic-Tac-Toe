const store = require('./store')

// Auth ui

const onSignUpSuccess = (response) => {
  console.log(response)
  $('#message').text(`thank you for signing up ${response.user.email}`)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-btn').trigger('click')
}

const onSignUpFailure = () => {
  console.log('Failure')
  $('#game-message').text('Sign up failure')
  $('#sign-up-form').trigger('reset')
}

const onLogInSuccess = (response) => {
  console.log(response)
  store.token = response.user.token
  $('#message').text(`Logged in as: ${response.user.email}`)
  $('#log-in-form').trigger('reset')
  //
  $('#game-message').text = ''
  $('#log-in-btn').hide()
  $('#sign-up-btn').hide()
  $('#log-out-btn').show()
  $('#create-game-btn').show()
  $('#log-in-btn').trigger('click')
}

const onLogInFailure = () => {
  console.log('Failure')
  $('#game-message').text('Log In failure')
  $('#log-in-form').trigger('reset')
}

const onLogOutSuccess = (response) => {
  console.log(response)
  $('#message').text('Logged Out Successfully')
  $('#game-message').text('')
  $('#log-out-btn').hide()
  $('#show-games-btn').hide()
  $('#create-game-btn').hide()
  $('.board').hide()
  $('#log-in-btn').show()
  $('#sign-up-btn').show()
  store.token = ''
  store._id = ''
}

const onLogOutFailure = () => {
  console.log('failure')
  $('#game-message').text('Log Out failure')
}

const onChangePasswordSuccess = (response) => {
  console.log(response)
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = () => {
  console.log('failure')
  $('#change-password-form').trigger('reset')
}

// Game ui

const onShowGamesSuccess = (response) => {
  let div = ''
  console.log(response)
  response.games.forEach(game => {
    console.log(game)
    div += `
    <h3>${game._id}</h3>
    <p>Time created: ${game.createdAt}</p>
    <button data-id="${game._id}" class="pick-game-btn btn btn-secondary">Load game</button>
    <hr>
    `
  })
  $('#past-games').append(div)
}

const onShowGamesFailure = () => {
  console.log('failure')
}

const onCreateGameSuccess = (response) => {
  store.currentPlayer = 'X'
  $('.board').show('slow')
  $('#game-message').text('Game Created')
  console.log(response)
  store._id = response.game._id
  $('.cell').text('')
  $('.board').css('pointer-events', 'auto')
  store.game = []
}

const onCreateGameFailure = () => {
  console.log('failure')
}

const onPickGameSuccess = (response) => {
  console.log(response)
}

const onPickGameFailure = (error) => {
  console.error('failure: ' + error)
}

const onUpdateGameSuccessful = (response) => {
  $('#game-message').text('')
  console.log(response)
  store.game = response.game.cells
  let tieCounter = 0
  store.game.forEach(cell => cell !== '' ? tieCounter++ : '')
  if (tieCounter === 9 && response.game.over === false) {
    console.log('Tie')
    $('#end-game-modal-label').text('You Tied!')
    $('#end-game-btn').trigger('click')
    $('.board').css('pointer-events', 'none')
  }
  console.log(tieCounter)
}

const onUpdateGameFailure = (error) => {
  console.log(error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onLogInSuccess,
  onLogInFailure,
  onLogOutSuccess,
  onLogOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onShowGamesSuccess,
  onShowGamesFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onPickGameSuccess,
  onPickGameFailure,
  onUpdateGameSuccessful,
  onUpdateGameFailure
}
