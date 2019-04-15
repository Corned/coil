const clone_matrix = require("./clone_matrix")
const count_deadends = require("./count_deadends")
const { WALL, EMPTY, DIRECTIONS } = require("./constants")

const helper = (x, y, dx, dy, solved_cells, path, visit_history, number_of_empty_cells) => {
  const can_move = dx !== 0 || dy !== 0

  if (can_move) {
    let first_iteration = true
    let size_y = visit_history.length
    let size_x = visit_history[0].length

    const is_empty = (x, y, visit_history) => visit_history[y][x] === EMPTY
    const within_bounds = (x, y, size_x, size_y) => y >= 0 && y < size_y && x >= 0 && x < size_x

    while (true) {
      visit_history[y][x] = WALL

      if (!within_bounds(x+dx, y+dy, size_x, size_y)) break
      if (!is_empty(x+dx, y+dy, visit_history)) break

      x += dx
      y += dy
      solved_cells++
      first_iteration = false
    }

    if (first_iteration) return false
  }


  if (solved_cells === number_of_empty_cells) return path

  const deadends = count_deadends(visit_history, x, y)
  if (deadends > 2) return false

  for (const direction of DIRECTIONS) {
    const new_path = path + direction.letter
    const solved_path = helper(
      x, y, 
      direction.dx, 
      direction.dy, 
      solved_cells,
      new_path,
      clone_matrix(visit_history), 
      number_of_empty_cells
    )

    if (solved_path) {
      return solved_path
    }
  }

  return false
}

module.exports = helper