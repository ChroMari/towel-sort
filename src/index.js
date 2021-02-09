
// You should implement your task here.

module.exports = towelSort = (matrix = []) => (matrix.length == 0) ? [] : matrix.map((item, indx) => (indx % 2 != 0) ? item.reverse() : item).flat();

