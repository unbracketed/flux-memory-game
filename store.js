import alt from './alt'
import GameActions from './actions'
import {createCards, numItems} from './card-themes/bologne'

class GameStore {
  constructor() {
    this.numberOfPairs = 3
    this.maxPairs = numItems
    this.gameComplete = false
    this.cards = this.initCards(this.numberOfPairs)

    this.bindListeners({
      handleUpdateCards: GameActions.TOGGLE_CARD,
      handleUnmatchedCards: GameActions.CLOSE_UNMATCHED_CARDS,
      handleDecreaseCards: GameActions.DECREASE_CARDS,
      handleIncreaseCards: GameActions.INCREASE_CARDS,
      handleReset: GameActions.RESET_GAME
    })

    this.exportPublicMethods({
      getCards: this.getCards
    })
  }

  initCards(numPairs) {
    let cards = createCards(numPairs)
    return _.map(cards, item => {
      return {
        state: 'closed',
        value: item.displayName,
        component: item}
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

  handleDecreaseCards() {
    this.numberOfPairs -= 1
    this.cards = this.initCards(this.numberOfPairs)
  }

  handleIncreaseCards() {
    this.numberOfPairs += 1
    this.cards = this.initCards(this.numberOfPairs)
  }

  handleReset() {
    this.cards = this.initCards(this.numberOfPairs)
    this.gameComplete = false
  }

  getCards() {
    console.log('getCARDS', this)
    return this.getState().cards
  }
}

module.exports = alt.createStore(GameStore, 'GameStore')
