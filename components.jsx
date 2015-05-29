import React from 'react'
import AltContainer from 'alt/AltContainer'
import GameStore from './store'
import _gridCss from './grid.css'


const Grid = React.createClass({
  handleClick: function (row, col, e) {
    console.log('handleclick', row, col, e)
    //GameActions.toggleCard(row, col)
  },
  render: function () {
    const gridState = this.props.gridState

    return (
      <div>
        {gridState.map((row, rowIdx) => {

          return (
            <div className="Grid">

              {row.map((col, colIdx) => {
                  let cell = null
                  if (col) {
                    cell = (
                      <img
                        width="100%"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg"

                      />
                    )
                  } else {
                    cell = (
                      <p>?</p>
                    )
                  }

                  return (
                    <div className="Grid-cell" onClick={this.handleClick.bind(this, rowIdx, colIdx)}>
                      {cell}
                    </div>
                  )
                }
              )}
            </div>
          )
        })}
      </div>
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
