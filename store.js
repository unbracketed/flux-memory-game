import alt from './alt'
import GameActions from './actions'

class GameStore {
  constructor() {
    this.gridSize = 2
    this.cards = [
      {state: 'closed', value: 'girl'},
      {state: 'closed', value: 'boy'},
      {state: 'closed', value: 'boy'},
      {state: 'closed', value: 'girl'},
    ]
    this.gameComplete = false

    this.bindListeners({
      handleUpdateCards: GameActions.TOGGLE_CARD,
      handleUnmatchedCards: GameActions.CLOSE_UNMATCHED_CARDS,
      handleReset: GameActions.RESET_GAME
    })

    this.exportPublicMethods({
      getCards: this.getCards
    })
  }

  handleUpdateCards(cards) {
    console.log('updateCards', cards)

    //check for end of game state
    if (_.every(cards, {state: 'matched'})) {
      this.gameComplete = true
    }
    this.cards = cards
  }

  handleUnmatchedCards(cards) {
    console.log('handleCloseOpenCards')
    this.cards = cards
  }

  handleReset() {
    this.cards = [
      {state: 'closed', value: 'girl'},
      {state: 'closed', value: 'girl'},
      {state: 'closed', value: 'girl'},
      {state: 'closed', value: 'girl'},
    ]
    this.gameComplete = false
  }

  getCards() {
    console.log('getCARDS', this)
    return this.getState().cards
  }
}

module.exports = alt.createStore(GameStore, 'GameStore')
