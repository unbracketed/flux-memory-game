import React from 'react'
import AltContainer from 'alt/AltContainer'
import GameStore from './store'
import _style from './style.css'


const Grid = React.createClass({
  handleClick: function (row, col, e) {
    console.log('handleclick', row, col, e)
    //GameActions.toggleCard(row, col)
  },
  render: function () {
    const gridState = this.props.gridState

    return (

      <span className="grid">
        {gridState.map((row, rowIdx) => {
          return row.map((col, colIdx) => {
            if (col) {
              return (
                <span
                  className="tile--1of2"
                  onClick={this.handleClick.bind(this, rowIdx, colIdx)}>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"/>
                </span>
              )
            } else {
              return (
                <span
                  className="tile--1of2"
                  onClick={this.handleClick.bind(this, rowIdx, colIdx)}
                >
                  ?
                </span>
              )
            }
          })
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
