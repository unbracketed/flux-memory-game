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
            openCard.state = 'closed'
          }
      } else {
        card.state = 'open'
      }
    } else if (card.state == 'open') {
      card.state = 'closed'
    }


    this.dispatch(cards)
  }

  resetGame() {
    this.dispatch()
  }
}

module.exports = alt.createActions(GameActions)
