// 3. Angka Ganjil dan Genap

for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + ' - GENAP')
  } else {
    console.log(i + ' - GANJIL')
  }
}

// counter adalah kelipatan 3 dengan pertambahan 2

for (var i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log('counter sekarang = ' + i + ' => 3 kelipatan 3');
  }
  else {
    console.log('counter sekarang = ' + i);
  }
}

// counter adalah kelipatan 6 dengan pertambahan 5

for (var i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log('counter sekarang = ' + i + ' => 6 kelipatan 6');
  }
  else {
    console.log('counter sekarang = ' + i);
  }
}

// counter adalah kelipatan 10 dengan pertambahan 9
for (var i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log('counter sekarang = ' + i + ' => 10 kelipatan 10');
  }
  else {
    console.log('counter sekarang = ' + i);
  }
}