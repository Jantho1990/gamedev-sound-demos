import pop from '../pop'
const { Game, entity, math, Text } = pop

const game = new Game(640, 480)
const { scene, w, h, } = game

const style = {
  fill: 'hsl(320, 20%, 20%)',
  font: '40pt "Arial", monospace'
}

const demoText1 = new Text('Gamedev', style)
demoText1.pos = { x: w / 4, y: 125 }

const demoText2 = new Text('Boilerplate', style)
demoText2.pos = { x: w / 3, y: 175 }

scene.add(demoText1)
scene.add(demoText2)

game.run()