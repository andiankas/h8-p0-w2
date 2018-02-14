// Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

var nama = 'Andi';
var peran = 'Penyihir';

if (nama == '') {
    console.log('Nama harus diisi!')
} else if (peran == '') {
    console.log('Halo ' + nama + '. Peran harus diisi!')
} else {
    if (peran == 'Ksatria') {
        console.log('Selamat datang di dunia proxyta, ' + nama)
        console.log('Halo ' + peran + ' ' + nama + ', Kamu dapat menyerang dengan senjatamu.')
    } else if (peran == 'Tabib') {
        console.log('Selamat datang di dunia proxyta, ' + nama)
        console.log('Halo ' + peran + ' ' + nama + ', Kamu akan membantu temanmu yang terluka.')
    } else if (peran == 'Penyihir') {
        console.log('Selamat datang di dunia proxyta, ' + nama)
        console.log('Halo ' + peran + ' ' + nama + ', Ciptakan keajaiban yang membantu kemenanganmu!')
    }

}