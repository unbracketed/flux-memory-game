import alt from './alt'

class GameStore {
  constructor() {
    this.gridSize = 2
    this.gridState = [
      [1, 0],
      [0, 1]
    ]
  }
}

module.exports = alt.createStore(GameStore, 'GameStore')
