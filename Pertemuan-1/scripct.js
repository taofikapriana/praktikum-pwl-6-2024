document.getElementById('btnClick').addEventListener('click', function() {
    alert('Praktikum PWL-6');
});

document.getElementById('btnClick').addEventListener('click', function() {
    const now = new Date();
    alert('Tombol telah diklik! Waktu saat ini: ' + now.toLocaleTimeString());
});

document.getElementById('btnClick').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert('Angka acak: ' + randomNumber);
});