const getFormFields = require('./../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  // Get info from event
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onLogIn = (event) => {
  event.preventDefault()
  // Get info from event
  const data = getFormFields(event.target)
  api.logIn(data)
    .then(ui.onLogInSuccess)
    .catch(ui.onLogInFailure)
}

const onLogOut = () => {
  api.logOut()
    .then(ui.onLogOutSuccess)
    .catch(ui.onLogOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  // Get info from event
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then()
    .catch()
}

module.exports = {
  onSignUp,
  onLogIn,
  onLogOut,
  onChangePassword
}
