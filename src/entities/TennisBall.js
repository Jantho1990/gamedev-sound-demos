import pop from '../../pop/index'
const { Texture, Sprite, Vec } = pop

const texture = new Texture('res/img/tennis_ball.png')

class TennisBall extends Sprite {
  constructor(speed) {
    super(texture)
    this.rad = 70
    this.vel = new Vec(speed, 0)
  }
}

export default TennisBall