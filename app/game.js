const getFormFields = require('./../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowGames = () => {
  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onShowGamesFailure)
}

const onCreateGame = () => {
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

module.exports = {
  onShowGames,
  onCreateGame
}
