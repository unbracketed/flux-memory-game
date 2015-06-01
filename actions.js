import alt from './alt'

class GameActions {
  toggleCard(idx) {

    const cards = GameStore.getCards()
    const openCard = _.filter(cards, {state: 'open'})
    let card = cards[idx]
    let updateCards = []

    if (card.state == 'closed') {
      if (openCard) {
         if (openCard.value == card.value) {
            card.state = 'matched'
            openCard.state = 'matched'
            updateCards = [card, openCard]
          } else {
            openCard.state = 'closed'
            updateCards = [openCard]
          }
      } else {
        card.state = 'open'
      }
    } else if (card.state == 'open') {
      card.state = 'closed'
    }

    this.dispatch()
  }
}
