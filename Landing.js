function openLogin() {
    document.getElementById("loginWrapper").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginWrapper").style.display = "none";
}

function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}
function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function tampilLayanan(idLayanan, elemen) {
    // 1. Sembunyikan semua konten layanan
    const semuaKonten = document.querySelectorAll('.service-content');
    semuaKonten.forEach(konten => konten.style.display = 'none');

    // 2. Tampilkan yang diklik saja
    document.getElementById(idLayanan).style.display = 'block';

    // 3. Pindahkan warna merah (active) di sidebar
    const semuaMenu = document.querySelectorAll('.menu-item');
    semuaMenu.forEach(menu => menu.classList.remove('active'));
    elemen.classList.add('active');
}

function pilihLayanan(idLayanan, elemen) {
    // Sembunyikan semua konten layanan
    const semuaKonten = document.querySelectorAll('.service-content');
    semuaKonten.forEach(konten => {
        konten.style.display = 'none';
    });

    // Tampilkan konten yang dipilih
    document.getElementById(idLayanan).style.display = 'block';

    // Atur status 'active' di menu sidebar
    const semuaMenu = document.querySelectorAll('.menu-item');
    semuaMenu.forEach(menu => {
        menu.classList.remove('active');
    });
    elemen.classList.add('active');
}