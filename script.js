document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------
    // 1. Animasi Intro Strawberry
    // -------------------------------------------
    const introAnimation = document.getElementById('intro-animation');

    // Menghilangkan animasi setelah 1 detik
    setTimeout(() => {
        introAnimation.style.opacity = '0'; // Memulai efek fade-out
    }, 1000); // 1 detik sebelum fade-out

    // Menghilangkan elemen dari DOM setelah fade-out selesai
    setTimeout(() => {
        introAnimation.style.display = 'none';
    }, 2000); // Total 2 detik (1 detik menunggu + 1 detik transisi CSS)


    // -------------------------------------------
    // 2. Pop-up Gambar Saat Scroll (Intersection Observer)
    // -------------------------------------------
    const items = document.querySelectorAll('.hidden-item');
    
    // Opsi untuk observer (trigger saat elemen 20% terlihat)
    const observerOptions = {
        root: null, // viewport
        threshold: 0.2 // 20% visibilitas
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'visible' untuk memicu transisi CSS
                entry.target.classList.add('visible');
                // Berhenti mengamati setelah terlihat
                // observer.unobserve(entry.target); // Opsional: hapus baris ini jika ingin bisa hilang lagi
            } else {
                // Opsional: hapus kelas 'visible' jika ingin hilang lagi saat scroll ke atas
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });

    // -------------------------------------------
    // 3. Logika Harga Diskon
    // -------------------------------------------
    // Fungsi applyDiscount sudah dipanggil di HTML melalui atribut onclick
    window.applyDiscount = function() {
        const originalPrice = document.getElementById('original-price');
        const discountPrice = document.getElementById('discount-price');
        
        // Memastikan harga yang benar ditampilkan
        if (originalPrice.style.textDecoration === 'none' || originalPrice.style.textDecoration === '') {
            // Jika harga diskon belum tampil/belum diklik
            originalPrice.style.textDecoration = 'line-through';
            originalPrice.style.color = '#999';
            discountPrice.style.fontSize = '3rem';
            alert('🎉 Harga Spesial Pembukaan! Dapatkan Strawberry Sando hanya Rp10.000!');
        } else {
            // Opsional: bisa ditambahkan logika lain, tapi untuk kasus ini cukup konfirmasi diskon
            alert('Harga diskon sudah diterapkan! Hanya Rp10.000 saja!');
        }
    }
    
    // Inisiasi tampilan harga (Harga diskon langsung aktif)
    // Jika Anda ingin harga 12k dulu, hapus baris berikut
    // document.getElementById('original-price').style.textDecoration = 'line-through';
    // document.getElementById('original-price').style.color = '#999';

});