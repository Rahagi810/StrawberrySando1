document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------
    // 1. Animasi Intro Strawberry
    // -------------------------------------------
    const introAnimation = document.getElementById('intro-animation');

    // Menghilangkan animasi setelah 1 detik
    setTimeout(() => {
        introAnimation.style.opacity = '0'; 
    }, 1000); 

    // Menghilangkan elemen dari DOM setelah fade-out selesai
    setTimeout(() => {
        introAnimation.style.display = 'none';
    }, 2000); 


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
        const originalPrice = document.getElementById('original-price');
        const discountPrice = document.getElementById('discount-price');
        
        // Cukup tampilkan notifikasi karena tampilan diskon sudah aktif
        alert('🎉 Harga Spesial Pembukaan! Dapatkan Strawberry Sando hanya Rp10.000!');
    }
});


});
