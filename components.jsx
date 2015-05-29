import React from 'react'
import AltContainer from 'alt/AltContainer'
import GameStore from './store'
import _gridCss from './grid.css'


const Grid = React.createClass({
  render: function () {
    return (
      <div>
        <div className="Grid">
          <div className="Grid-cell">
            <img width="100%" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg" />
          </div>
          <div className="Grid-cell">
            <img width="100%" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newboy-02.svg" />
          </div>
        </div>
        <div className="Grid">
          <div className="Grid-cell">
            <img width="100%" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newboy-02.svg" />
          </div>
          <div className="Grid-cell">
            <img width="100%" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/newgirl-01.svg" />
          </div>
        </div>
      </div>)
  }
})


const GridContainer = React.createClass({
  render: function () {
    return (
      <AltContainer store={GameStore}>
        <Grid/>
      </AltContainer>
    )
  }
})

module.exports = GridContainer
