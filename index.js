const solve = require("./solve")

console.time("Solve")

const [ start_x, start_y, path ] = solve( process.argv[2] )
console.log(`http://www.hacker.org/coil/index.php?x=${start_x}&y=${start_y}&path=${path}`)

console.timeEnd("Solve")