function analyticalConversionScore(stars) {
  var num = stars.toString().substring(0, 1);
  var array = [];
  for (var i = 0; i < 5; i++) {
    if (num > i) {
      array.push(1);
    } else {
      array.push(0);
    }
  }
  return array
}

module.exports = {
  analyticalConversionScore: analyticalConversionScore
}