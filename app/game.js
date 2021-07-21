const api = require('./api')
const store = require('./store')
const ui = require('./ui')

const onShowGames = () => {
  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onShowGamesFailure)
}

const onCreateGame = () => {
  $('.board').show('slow')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onCellClicked = (event) => {
  const cell = $(event.target)
  cell.text(store.currentPlayer)
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
}

const onPickGame = (event) => {
  const gameId = event.target.getAttribute('data-id')
  api.pickGame(gameId)
    .then(ui.onPickGameSuccess)
    .catch(ui.onPickGameFailure)
}

module.exports = {
  onShowGames,
  onCreateGame,
  onCellClicked,
  onPickGame
}
