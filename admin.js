
document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-admin');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                navLinks.forEach(el => el.classList.remove('active'));
                contentSections.forEach(section => section.classList.remove('active'));

                link.classList.add('active');
                targetSection.classList.add('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        

        if (e.target.closest('.fa-check')) {
            const row = e.target.closest('tr');
            const statusCell = row.querySelector('.status-pending');
            if (statusCell) {
                statusCell.textContent = 'Terkonfirmasi';
                statusCell.className = 'status-approved';
                alert('Reservasi Berhasil Disetujui!');
                const actionCell = row.querySelector('td:last-child');
                actionCell.innerHTML = `<button class="btn btn-primary btn-sm btn-checkin" style="background: #0077b6;">Check-in</button>`;
            }
        }

        if (e.target.closest('.fa-times')) {
            if (confirm('Apakah Anda yakin ingin menolak reservasi ini?')) {
                const row = e.target.closest('tr');
                const statusCell = row.querySelector('td:nth-last-child(2) span') || row.querySelector('.status-pending');
                if (statusCell) {
                    statusCell.textContent = 'Ditolak';
                    statusCell.className = 'status-rejected';
                }
                row.querySelector('td:last-child').innerHTML = '<small style="color:red">Dibatalkan</small>';
            }
        }


        if (e.target.innerText === 'Check-in' || e.target.classList.contains('btn-checkin')) {
            const row = e.target.closest('tr');
            const namaPasien = row.querySelector('b') ? row.querySelector('b').innerText : "Pasien";
            alert(`${namaPasien} berhasil Check-in. Pasien telah masuk antrean dokter.`);
            const statusCell = row.querySelector('.status-approved');
            if(statusCell) {
                statusCell.textContent = 'Selesai';
                statusCell.style.color = '#858a85'; 
            }
            row.querySelector('td:last-child').innerHTML = '<i class="fas fa-user-check" style="color: green"></i>';
        }

        if (e.target.closest('.fa-trash') || e.target.closest('.btn-delete')) {
            const row = e.target.closest('tr');
            const nama = row.querySelector('b') ? row.querySelector('b').innerText : "data";
            if (confirm(`Hapus ${nama} dari sistem?`)) {
                row.style.transition = '0.5s';
                row.style.opacity = '0';
                row.style.transform = 'translateX(20px)';
                setTimeout(() => row.remove(), 500);
            }
        }

        if (e.target.closest('.fa-edit') || e.target.closest('.btn-edit')) {
            const row = e.target.closest('tr');
            const nama = row.querySelector('b') ? row.querySelector('b').innerText : "";
            alert(`Fitur Edit untuk ${nama} akan segera tersedia.`);
        }
        if (e.target.closest('.btn-view')) {
            viewPatient(1); 
        }
    });

    const medicineForm = document.getElementById('medicineForm');
    if (medicineForm) {
        medicineForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Data obat berhasil disimpan!');
            this.reset();
        });
    }

    const patientForm = document.getElementById('patientForm');
    if (patientForm) {
        patientForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Data pasien berhasil disimpan!');
            this.reset();
        });
    }
});

const patients = [
    {
        id: 1,
        nomorRM: 'RM-000123',
        nik: '3201234567890123',
        nama: 'Ahmad Hidayat',
        tanggalLahir: '15 Jan 1985',
        jenisKelamin: 'Laki-laki',
        golonganDarah: 'A',
        telepon: '081234567890',
        email: 'ahmad@email.com',
        alamat: 'Jl. Sudirman No. 123, Bandung, Jawa Barat'
    }
];

function viewPatient(id) {
    const patient = patients[0]; 
    const detailHTML = `
        <div class="detail-row"><b>No. Rekam Medis:</b> ${patient.nomorRM}</div>
        <div class="detail-row"><b>NIK:</b> ${patient.nik}</div>
        <div class="detail-row"><b>Nama Lengkap:</b> ${patient.nama}</div>
        <div class="detail-row"><b>Alamat:</b> ${patient.alamat}</div>
    `;
    document.getElementById('patientDetail').innerHTML = detailHTML;
    document.getElementById('patientModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('patientModal').style.display = 'none';
}

function simulasiLogout() {
    if (confirm("Apakah Anda yakin ingin logout?")) {
        window.location.href = "login.html";
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('patientModal');
    if (event.target == modal) {
        closeModal();
    }
}

function filterTable() {
    let namaCari = document.getElementById("searchName").value.toLowerCase();
    let statusCari = document.getElementById("filterStatus").value;
    
    let rows = document.querySelectorAll("#reservasi tbody tr");

    rows.forEach(row => {
        let namaTabel = row.cells[2].textContent.toLowerCase();
        let statusTabel = row.cells[4].textContent.trim();

        let cocokNama = namaTabel.includes(namaCari);
        let cocokStatus = (statusCari === "Semua" || statusTabel === statusCari);

        if (cocokNama && cocokStatus) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function filterReservasi() {
    let kategori = document.getElementById("filterKategori").value;
    let dokter = document.getElementById("filterNamaDokter").value;
    
    let rows = document.querySelectorAll("#reservasi tbody tr");

    rows.forEach(row => {
        let teksKategori = row.cells[1].textContent; 
        let teksDokter = row.cells[3].textContent;

        let matchKategori = (kategori === "" || teksKategori.includes(kategori));
        let matchDokter = (dokter === "" || teksDokter.includes(dokter));

        if (matchKategori && matchDokter) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
