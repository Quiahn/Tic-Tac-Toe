const store = require('./store')

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
}

const onLogInFailure = () => {
  console.log('Failure')
  $('#message').text('Sign up failure')
  $('#log-in-form').trigger('reset')
}

const onLogOutSuccess = (response) => {
  console.log(response)
}

const onLogOutFailure = () => {
  console.log('failure')
}

const onShowGamesSuccess = (response) => {
  console.log(response)
}

const onShowGamesFailure = () => {
  console.log('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onLogInSuccess,
  onLogInFailure,
  onLogOutSuccess,
  onLogOutFailure,
  onShowGamesSuccess,
  onShowGamesFailure
}
