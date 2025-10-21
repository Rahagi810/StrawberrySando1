document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------
    // 1. Animasi Intro Strawberry (FINAL FIX) 🍓
    // -------------------------------------------
    const introAnimation = document.getElementById('intro-animation');

    // Durasi total animasi goyang + transisi fade
    const totalAnimationDuration = 2200; // 2.2 detik (Cukup panjang untuk memastikan selesai)

    // 1. Mulai Fade-out setelah 1000ms (1 detik goyang)
    setTimeout(() => {
        // Ini memicu transisi opacity 1s di CSS
        introAnimation.style.opacity = '0'; 
    }, 1000); 

    // 2. Menghilangkan elemen secara total setelah semua animasi selesai
    setTimeout(() => {
        // Cek kembali apakah opacity sudah 0 sebelum display: none
        if (introAnimation.style.opacity === '0') {
            introAnimation.style.display = 'none';
            // Opsional: Hentikan animasi goyang agar tidak boros sumber daya
            document.querySelector('#intro-animation .strawberry-emoji').style.animation = 'none';
        }
    }, totalAnimationDuration); // 2.2 detik (1s goyang + 1s fade + 0.2s buffer)


    // -------------------------------------------
    // 2. Pop-up Gambar Saat Scroll
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
