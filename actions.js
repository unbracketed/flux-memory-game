import alt from './alt'
import _ from 'lodash'


class GameActions {
  toggleCard(idx) {

    const cards = this.alt.stores.GameStore.getCards()
    const openCard = _.find(cards, {state: 'open'})
    let card = cards[idx]

    if (card.state == 'closed') {
      if (openCard) {
         if (openCard.value == card.value) {
            card.state = 'matched'
            openCard.state = 'matched'
          } else {
            openCard.state = 'did-not-match'
            card.state = 'did-not-match'

            //close the cards in one second
            setTimeout(this.actions.closeUnmatchedCards, 1000)
          }
      } else {
        card.state = 'open'
      }
    } else if (card.state == 'open') {
      card.state = 'closed'
    }


    this.dispatch(cards)
  }

  closeUnmatchedCards() {
    console.log('closeUnmatchedCards')
    const cards = this.alt.stores.GameStore.getCards()
    const openCards = _.filter(cards, {state: 'did-not-match'})
    _.forEach(openCards, card => {card.state = 'closed'})
    this.dispatch(cards)
  }

  resetGame() {
    this.dispatch()
  }
}

module.exports = alt.createActions(GameActions)
