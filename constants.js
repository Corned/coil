const [ WALL, EMPTY ] = [ "X", "." ]
const DIRECTIONS = [
  { letter: "R", dx: 1, dy: 0 },
  { letter: "L", dx: -1, dy: 0 },
  { letter: "D", dx: 0, dy: 1 },
  { letter: "U", dx: 0, dy: -1 }
]

module.exports = { WALL, EMPTY, DIRECTIONS }