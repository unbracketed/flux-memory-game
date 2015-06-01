import alt from './alt'
import GameActions from './actions'

class GameStore {
  constructor() {
    this.gridSize = 2
    this.cards = [
      {state: 'closed', value: 'girl'},
      {state: 'closed', value: 'girl'},
      {state: 'closed', value: 'girl'},
      {state: 'closed', value: 'girl'},
    ]

    this.bindListeners({
      handleUpdateCards: GameActions.TOGGLE_CARD
    })

    this.exportPublicMethods({
      getCards: this.getCards
    })
  }

  handleUpdateCards(cards) {
    console.log('updateCards', cards)
    this.cards = cards
  }

  getCards() {
    console.log('getCARDS', this)
    return this.getState().cards
  }
}

module.exports = alt.createStore(GameStore, 'GameStore')
