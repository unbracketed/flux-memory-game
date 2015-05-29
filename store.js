import alt from './alt'

class GameStore {
  constructor() {
    this.gridSize = 2
  }
}

module.exports = alt.createStore(GameStore, 'GameStore')
