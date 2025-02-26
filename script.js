document.addEventListener("DOMContentLoaded", function() {
  // Fungsi untuk mengecek posisi elemen saat scroll
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  function checkScroll() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    elementsToAnimate.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const elementHeight = element.offsetHeight;

      // Jika elemen terlihat di layar
      if (scrollTop + windowHeight > elementTop + elementHeight / 4) {
        element.classList.add('slide-in-right');
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Panggil pertama kali untuk memeriksa elemen saat halaman pertama kali dimuat
});
