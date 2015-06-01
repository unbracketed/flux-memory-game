import React from 'react'
import AltContainer from 'alt/AltContainer'
import classNames from 'classnames'
import GameStore from './store'
import GameActions from './actions'
import _style from './style.css'


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
              flipped: card.state === 'matched' || card.state === 'open',
              matched: card.state === 'matched'
            }
            console.log('classNames', cardClass)

              return (

                <div className="container tile--1of2" onClick={this.handleClick.bind(this, idx)}>
                  <div className={classNames(cardClass)}>
                    <div className="front">?</div>
                    <div className="back">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"/>
                    </div>
                  </div>
                </div>
              )
        })}
      </span>

    )
  }

})


const GridContainer = React.createClass({
  render: function () {
    return (
      <AltContainer store={GameStore}>

        <button>New Game</button>
        <button>2x2</button>
        <button>3x3</button>
        <button>4x4</button>
        <button>5x5</button>

        <Grid/>
      </AltContainer>
    )
  }
})

module.exports = GridContainer
