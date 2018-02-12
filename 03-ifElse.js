// Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

var nama ='Mikael';
var peran = '';

if (nama=='' && peran =='') {
    console.log('Nama harus diisi!')
}else if(nama=='Mikael' && peran == ''){
    console.log('Halo '+nama+ ', pilih peranmu untuk memulai game!')
}else if(nama=='Nina' && peran == 'Ksatria'){
    console.log('Selamat datang di dunia proxyta, '+nama);
    console.log('Halo Ksatria '+nama+ ', kamu dapat menyerang dengan senjatamu!');
}else if(nama=='Danu' && peran == 'Tabib'){
    console.log('Selamat datang di dunia proxyta, ' + nama);
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
}else if(nama=='Zero' && peran == 'Penyihir'){
    console.log('Selamat datang di dunia proxyta, ' + nama);
    console.log('Halo Penyihir ' + nama + ', kamu akan membantu temanmu yang terluka.');
}

