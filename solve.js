const helper = require("./helper")
const clone_matrix = require("./clone_matrix")
const parse_data = require("./parse_data")
const { EMPTY } = require("./constants")

const solve = input => {
  const { board, number_of_empty_cells } = parse_data(input)
  const size_y = board.length
  const size_x = board[0].length

  for (let y = 0; y < size_y; y++) {
    for (let x = 0; x < size_x; x++) {
      if (board[y][x] !== EMPTY) continue
      console.log(`Checking (${x}, ${y})`)
      const path = helper(x, y, 0, 0, 1, "", clone_matrix(board), number_of_empty_cells)
      if (path) return [ x, y, path ]
    }
  }

  return [ -1, -1, "something went wrong"]
}

module.exports = solve