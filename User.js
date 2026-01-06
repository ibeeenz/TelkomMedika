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
    const semuaKonten = document.querySelectorAll('.service-content');
    semuaKonten.forEach(konten => konten.style.display = 'none');

    document.getElementById(idLayanan).style.display = 'block';

    const semuaMenu = document.querySelectorAll('.menu-item');
    semuaMenu.forEach(menu => menu.classList.remove('active'));
    elemen.classList.add('active');
}

function pilihLayanan(idLayanan, elemen) {
    const semuaKonten = document.querySelectorAll('.service-content');
    semuaKonten.forEach(konten => {
        konten.style.display = 'none';
    });

    document.getElementById(idLayanan).style.display = 'block';

    const semuaMenu = document.querySelectorAll('.menu-item');
    semuaMenu.forEach(menu => {
        menu.classList.remove('active');
    });
    elemen.classList.add('active');
}
