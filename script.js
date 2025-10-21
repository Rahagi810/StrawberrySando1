document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------
    // 1. Animasi Intro Strawberry (DIFIX)
    // -------------------------------------------
    const introAnimation = document.getElementById('intro-animation');

    // Durasi Transisi CSS adalah 1000ms (1 detik).
    const fadeDuration = 1000;
    
    // 1. Mulai Fade-out setelah 1000ms (1 detik)
    setTimeout(() => {
        introAnimation.style.opacity = '0'; 
    }, fadeDuration); 

    // 2. Sembunyikan elemen (display: none) setelah DURASI TRANSISI CSS + 200ms
    // Total waktu tunggu: 1000ms (goyang) + 1000ms (fade) + 200ms (buffer) = 2200ms
    setTimeout(() => {
        introAnimation.style.display = 'none';
    }, fadeDuration + fadeDuration + 200); // TOTAL 2.2 DETIK
    // Penjelasan: 
    // - Animasi goyang berjalan selama 1 detik (di setTimeout pertama)
    // - Animasi fade berjalan selama 1 detik (di CSS)
    // - Diberi buffer 200ms untuk memastikan transisi selesai sebelum dihilangkan.


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
