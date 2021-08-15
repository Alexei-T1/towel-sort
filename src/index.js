
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newMatrix = [];
    if (!matrix) return newMatrix;
    for (let i = 0; i < matrix.length; i++) {
        if ( i % 2 == 1) {
            matrix[i].reverse();
        }
        newMatrix = newMatrix.concat(matrix[i]);
    }

  return newMatrix;
}
