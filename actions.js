import alt from './alt'
import _ from 'lodash'


class GameActions {
  toggleCard(idx) {

    //
    // flip the state of the card
    // start a state checker action



    // let card = GameStore.getCardByIdx(idx)
    // if (card.state === 'open') {
    //   card.state = 'closed'
    // } else if (card.state === 'closed') {
    //   card.state = 'open'
    // }
    // this.dispatch({idx, card, isAnimating: true})
  //   console.log('toggleCard', idx)
  //   this.dispatch({gridState: [[1, 1], [1, 1]]})
  //
  //
  //
  // }
  //
  // checkGameState() {

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
}

module.exports = alt.createActions(GameActions)
