
exports.min = function min (array) {
  if(array && array.length ) {
    return Math.min(...array);
  }
  return 0;
};

exports.max = function max (array) {
  if (array && array.length ) {
    return Math.max(...array);
  }
  return 0;
};

exports.avg = function avg (array) {
  if (array && array.length) {
    return array.reduce((acc, num) => acc + num, 0) / array.length;
  }
  return 0;
};
