import pop from '../pop/'
const { TileMap, Texture, math } = pop

const texture = new Texture('../res/img/tiles.png')

class Level extends TileMap {
  constructor(w, h) {
    const tileSize = 32
    const mapW = Math.ceil(w / tileSize)
    const mapH = Math.ceil(h / tileSize)
    const level = []

    super(level, mapW, mapH, tileSize, tileSize, texture)
  }
}

export default Level