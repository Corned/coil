const { EMPTY } = require("./constants")

// Take mortal coil's flashvars as the input and return a matrix based on the board data.
const parse_data = input => {
  const [ size_x, size_y, board_str ] = input.split("&").map(v => v.split("=")[1])
  const board = Array( parseInt(size_y) ).fill().map(_ => [])
  let number_of_empty_cells = 0

  for (let y = 0; y < size_y; y++)
    for (let x = 0; x < size_x; x++) 
      board[y][x] = board_str[size_x * y + x]

  for (const c of board_str) c === EMPTY ? number_of_empty_cells++ : 0
  
  return { board, number_of_empty_cells }
}

module.exports = parse_data