import React from 'react'
import AltContainer from 'alt/AltContainer'
import classNames from 'classnames'
import _ from 'lodash'
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
    let tile
    if (_.contains([4], cards.length)) {
      tile = 2
    } else {
      tile = 3
    }
    const containerClasses = {
      container: true,
      ['tile--1of' + tile]: true
    }

    return (

      <span className="grid">
        {cards.map((card, idx) => {

            const cardClasses = {
              card: true,
              flipped: card.state === 'matched' || card.state === 'open' || card.state === 'did-not-match',
              noMatch: card.state === 'did-not-match',
              matched: card.state === 'matched'
            }

              return (

                <div className={classNames(containerClasses)} onClick={this.handleClick.bind(this, idx)}>
                  <div className={classNames(cardClasses)}>
                    <div className="front"><span className="numberCircle">?</span></div>
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

  handleLessCards: function () {
    if (this.props.numberOfPairs > 2)
      GameActions.decreaseCards()
  },

  handleMoreCards: function () {
    if (this.props.numberOfPairs < this.props.maxPairs)
      GameActions.increaseCards()
  },

  render: function () {
      console.log('CONTROL', this.props)
      const incClasses = {
        disabled: this.props.numberOfPairs === this.props.maxPairs
      }
      const decClasses = {
        disabled: this.props.numberOfPairs === 2
      }
      console.log(classNames(incClasses))
      console.log(classNames(decClasses))

      return (
      <div>
        <button
          className="button-primary"
          onClick={this.handleNewGame}
        >
          New Game
        </button>
        <button
          className={classNames(decClasses)}
          onClick={this.handleLessCards}
        >
          Less Cards
        </button>
        <button
          className={classNames(incClasses)}
          onClick={this.handleMoreCards}
        >
          More Cards
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
