const api = require('./api')
const store = require('./store')
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

const onUpdateGame = (event) => {
  const cell = $(event.target)
  const idx = $(cell).data('cell-index')
  const val = store.currentPlayer.toLowerCase()

  if (cell.html().length !== 0) {
    $('#game-message').text('Click an empty space')
    return console.error('CLICK EMPTY SPACE')
  }

  cell.text(store.currentPlayer)
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
  const game = store.game
  game[idx] = val

  const data = {
    game: {
      cell: {
        index: idx,
        value: val
      },
      over: false
    }
  }

  if (
    (game[0] === 'x' && game[1] === 'x' && game[2] === 'x') ||
    (game[3] === 'x' && game[4] === 'x' && game[5] === 'x') ||
    (game[6] === 'x' && game[7] === 'x' && game[8] === 'x') ||
    (game[0] === 'x' && game[3] === 'x' && game[6] === 'x') ||
    (game[1] === 'x' && game[4] === 'x' && game[7] === 'x') ||
    (game[2] === 'x' && game[5] === 'x' && game[8] === 'x') ||
    (game[0] === 'x' && game[4] === 'x' && game[8] === 'x') ||
    (game[2] === 'x' && game[4] === 'x' && game[6] === 'x')
  ) {
    $('#end-game-modal-label').text('You Win!')
    data.game.over = true
    $('#end-game-btn').trigger('click')
    $('.board').css('pointer-events', 'none')
  } else if (
    (game[0] === 'o' && game[1] === 'o' && game[2] === 'o') ||
    (game[3] === 'o' && game[4] === 'o' && game[5] === 'o') ||
    (game[6] === 'o' && game[7] === 'o' && game[8] === 'o') ||
    (game[0] === 'o' && game[3] === 'o' && game[6] === 'o') ||
    (game[1] === 'o' && game[4] === 'o' && game[7] === 'o') ||
    (game[2] === 'o' && game[5] === 'o' && game[8] === 'o') ||
    (game[0] === 'o' && game[4] === 'o' && game[8] === 'o') ||
    (game[2] === 'o' && game[4] === 'o' && game[6] === 'o')
  ) {
    $('#end-game-modal-label').text('You Lose!')
    data.game.over = true
    $('#end-game-btn').trigger('click')
    $('.board').css('pointer-events', 'none')
  }
  api.updateGame(data)
    .then(ui.onUpdateGameSuccessful)
    .catch(ui.onUpdateGameFailure)
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
  onUpdateGame,
  onPickGame
}
