// Logic Challenge - X dan O

function xo(str) {
    var buangX = str.split('x').join('')
    var buangO = str.split('o').join('')

    var hitungO = buangO.length
    var hitungX = buangX.length

    if (hitungO==hitungX) {
      return true
    } else {
      return false
    }
    

  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true