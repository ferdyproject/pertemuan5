// Fungsi untuk menghitung volume balok
function hitungVolumeBalok(panjang, lebar, tinggi) {
    return panjang * lebar * tinggi;
}

// Fungsi untuk menghitung volume kubus
function hitungVolumeKubus(sisi) {
    return sisi * sisi * sisi;
}

// Fungsi untuk menghitung volume prisma segitiga
function hitungVolumePrismaSegitiga(alas, tinggiAlas, tinggiPrisma) {
    let luasAlas = 0.5 * alas * tinggiAlas;
    return luasAlas * tinggiPrisma;
}

// Event listener untuk form volume balok
document.getElementById('balok-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let panjang = document.getElementById('panjang').value;
    let lebar = document.getElementById('lebar').value;
    let tinggi = document.getElementById('tinggi').value;
    let volumeBalok = hitungVolumeBalok(panjang, lebar, tinggi);
    document.getElementById('volume-balok').innerText = `Volume Balok: ${volumeBalok} unit kubik`;
});

// Event listener untuk form volume kubus
document.getElementById('kubus-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let sisi = document.getElementById('sisi').value;
    let volumeKubus = hitungVolumeKubus(sisi);
    document.getElementById('volume-kubus').innerText = `Volume Kubus: ${volumeKubus} unit kubik`;
});

// Event listener untuk form volume prisma segitiga
document.getElementById('prisma-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let alas = document.getElementById('alas').value;
    let tinggiAlas = document.getElementById('tinggi-alas').value;
    let tinggiPrisma = document.getElementById('tinggi-prisma').value;
    let volumePrismaSegitiga = hitungVolumePrismaSegitiga(alas, tinggiAlas, tinggiPrisma);
    document.getElementById('volume-prisma-segitiga').innerText = `Volume Prisma Segitiga: ${volumePrismaSegitiga} unit kubik`;
});
