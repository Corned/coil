const { WALL, EMPTY, DIRECTIONS } = require("./constants")

const count_deadends = (visit_history, ignore_x, ignore_y) => {
  let deadends = 0
  let size_y = visit_history.length
  let size_x = visit_history[0].length

  for (let y = 0; y < size_y; y++) {
    for (let x = 0; x < size_x; x++) {
      if (visit_history[y][x] === WALL) continue
      if (x === ignore_x && y === ignore_y) continue

      let walls = 0

      for (let { dx, dy } of DIRECTIONS) {
        const y_within_bounds = (y + dy) >= 0 && (y + dy) < size_y
        const x_within_bounds = (x + dx) >= 0 && (x + dx) < size_x

        if (y_within_bounds && x_within_bounds) 
          walls += visit_history[y + dy][x + dx] === WALL ? 1 : 0
        else
          walls++
      }

      if (walls > 2) {
        deadends++
      }
    }
  }

  return deadends
}

module.exports = count_deadends