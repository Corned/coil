// Utility function to clone a matrix
const clone_matrix = matrix => [ ...matrix.map(arr => [ ...arr ]) ]

module.exports = clone_matrix