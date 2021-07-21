const store = require('./store')

// Auth ui

const onSignUpSuccess = (response) => {
  console.log(response)
  $('#message').text(`thank you for signing up ${response.user.email}`)
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = () => {
  console.log('Failure')
  $('#message').text('Sign up failure')
  $('#sign-up-form').trigger('reset')
}

const onLogInSuccess = (response) => {
  console.log(response)
  store.token = response.user.token
  $('#message').text(`Logged in as: ${response.user.email}`)
  $('#log-in-form').trigger('reset')
  //
  $('#log-in-btn').hide()
  $('#sign-up-btn').hide()
  $('#log-out-btn').show()
  $('.board').show()
}

const onLogInFailure = () => {
  console.log('Failure')
  $('#message').text('Sign up failure')
  $('#log-in-form').trigger('reset')
}

const onLogOutSuccess = (response) => {
  console.log(response)
  $('#log-out-btn').hide()
  $('#show-games-btn').hide()
  $('#create-game-btn').hide()
  $('.board').hide()
}

const onLogOutFailure = () => {
  console.log('failure')
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
  console.log(response)
  store._id = response.game._id
  console.log(store._id)
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
  onPickGameFailure
}
