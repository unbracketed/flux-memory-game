import React from 'react'
import AltContainer from 'alt/AltContainer'
import classNames from 'classnames'
import GameStore from './store'
import GameActions from './actions'
import _normalize from './styles/Skeleton-2.0.4/css/normalize.css'
import _skeleton from './styles/Skeleton-2.0.4/css/skeleton.css'
import _style from './styles/style.css'



const Grid = React.createClass({
  handleClick: function (idx, e) {
    console.log('handleclick', idx, e)
    GameActions.toggleCard(idx)
  },
  render: function () {
    console.log('Grid', this.props, this.state)
    const cards = this.props.cards

    return (

      <span className="grid">
        {cards.map((card, idx) => {

            const cardClass = {
              card: true,
              flipped: card.state === 'matched' || card.state === 'open' || card.state === 'did-not-match',
              noMatch: card.state === 'did-not-match',
              matched: card.state === 'matched'
            }
            console.log('classNames', cardClass)

              return (

                <div className="container tile--1of2" onClick={this.handleClick.bind(this, idx)}>
                  <div className={classNames(cardClass)}>
                    <div className="front">?</div>
                    <div className="back">
                      <card.component/>
                    </div>
                  </div>
                </div>
              )
        })}
      </span>

    )
  }

})


const Controls = React.createClass({

  handleNewGame: function () {
    GameActions.resetGame()
  },

  render: function () {

      return (
      <div>
        <button
          className="button-primary"
          onClick={this.handleNewGame}
        >
          New Game
        </button>
        {this.props.gameComplete ? <span>Hooray</span> : ''}
      </div>
      )
  }
})


const GridContainer = React.createClass({
  render: function () {
    console.log('GridCon', this)
    return (
      <AltContainer store={GameStore}>
        <Controls/>
        <Grid/>
      </AltContainer>
    )
  }
})

module.exports = GridContainer
