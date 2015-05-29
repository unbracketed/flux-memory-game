import alt from './alt'

class GameStore {
  constructor() {
    this.gridSize = 2
    this.gridState = [
      [0, 0],
      [0, 0]
    ]
  }
}

module.exports = alt.createStore(GameStore, 'GameStore')
