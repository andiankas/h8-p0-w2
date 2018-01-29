// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA')
var i = 2;
while (i<=20) {
    console.log(i+' - i love coding')
    i = i+2
}
console.log('LOOPING KEDUA')
var i = 20;
while (i>=2) {
    console.log(i+' - i will become fullstack javascript')
    i = i-2
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for(i=1;i<=20;i++){
    console.log(i+' - i love coding')
}
console.log('LOOPING KEDUA')
for(i=20;i>=1;i--){
    console.log(i+' - i will become fullstack javascript')
}

// 3. Angka Ganjil dan Genap
console.log('GANJIL GENAP');
for(i=1;i<=100;i++){
    if (i%2==0) {
        console.log(i+' - GENAP')
    } else {
        console.log(i+' - GANJIL')
    }
}

// counter adalah kelipatan 3 dengan pertambahan 2
console.log('3 KELIPATAN 3')
for (var i = 1; i <= 100; i+=2){
	console.log ('counter sekarang = ' +i);
  if (i%3==0){
    console.log('3 kelipatan 3');
  }
  else{
    console.log('');
  }
}

// counter adalah kelipatan 6 dengan pertambahan 5
console.log('6 KELIPATAN 6')
for (var i = 1; i <= 100; i+=5){
	console.log ('counter sekarang = ' +i);
  if (i%6==0){
    console.log('6 kelipatan 6');
  }
  else{
    console.log('');
  }
}

// counter adalah kelipatan 10 dengan pertambahan 9
console.log('10 KELIPATAN 10')
for (var i = 1; i <= 100; i+=9){
	console.log ('counter sekarang = ' +i);
  if (i%10==0){
    console.log('10 kelipatan 10');
  }
  else{
    console.log('');
  }
}