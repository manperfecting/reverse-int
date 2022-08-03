module.exports = function reverse (n) {
  var num = n.toString();
  var arr = Array.from(num).reverse().join('');
  if (num.substring(0, 1) == '-') {
    return Number(Array.from(num.substring(1, num.length)).reverse().join(''));
  }else{
    return Number(arr);
  }
}
