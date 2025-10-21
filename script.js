document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------
    // 1. Animasi Intro Strawberry (DIFIX MENGGUNAKAN TRANSITIONEND) 🍓
    // -------------------------------------------
    const introAnimation = document.getElementById('intro-animation');

    // Durasi goyang sebelum fade-out (dipertahankan agar tetap bergoyang 1 detik)
    const bounceDuration = 1000;

    // Fungsi yang akan dijalankan setelah animasi fade-out selesai
    const removeIntro = () => {
        // Hapus elemen dari DOM agar tidak menghalangi interaksi
        introAnimation.style.display = 'none';
        
        // Hapus listener ini setelah selesai agar tidak boros memori
        introAnimation.removeEventListener('transitionend', removeIntro);
    };

    // 1. Tambahkan listener yang mendeteksi kapan transisi opacity selesai
    introAnimation.addEventListener('transitionend', removeIntro);

    // 2. Tunggu 1 detik (bounceDuration) lalu mulai fade-out
    setTimeout(() => {
        // Mulai transisi fade-out (opacity: 0)
        introAnimation.style.opacity = '0'; 
    }, bounceDuration);


    // -------------------------------------------
    // 2. Pop-up Gambar Saat Scroll (Intersection Observer)
    // -------------------------------------------
    const items = document.querySelectorAll('.hidden-item');
    
    const observerOptions = {
        root: null, 
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });

    // -------------------------------------------
    // 3. Logika Harga Diskon
    // -------------------------------------------
    window.applyDiscount = function() {
        alert('🎉 Harga Spesial Pembukaan! Dapatkan Strawberry Sando hanya Rp10.000!');
    }
});
});

