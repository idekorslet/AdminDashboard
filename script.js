// Fungsi untuk toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
}

// Event listener untuk tombol toggle
document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);

// Fungsi untuk menampilkan konten
function showContent(menu) {
    // Sembunyikan semua konten
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });

    // Tampilkan konten yang dipilih
    document.getElementById(`${menu}-content`).style.display = 'block';

    // Hapus kelas 'active' dari semua menu
    document.querySelectorAll('.sidebar ul li').forEach(li => {
        li.classList.remove('active');
    });

    // Tambahkan kelas 'active' ke menu yang dipilih
    document.getElementById(`${menu}-menu`).classList.add('active');
}

// Fungsi untuk mengubah tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Simpan preferensi tema di localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Cek preferensi tema saat halaman dimuat
window.onload = () => {
    // Tampilkan dashboard secara default
    showContent('dashboard');

    // Terapkan tema yang disimpan di localStorage
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
        document.getElementById('input').checked = true;
    }

    // Tambahkan event listener untuk tombol theme switch
    document.getElementById('input').addEventListener('change', toggleTheme);
};