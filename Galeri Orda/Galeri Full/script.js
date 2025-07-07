// Menunggu hingga seluruh konten HTML dimuat
document.addEventListener("DOMContentLoaded", () => {
  // --- BAGIAN BARU: Mengatur Tanggal dan Jam Dinamis ---
  const dateDisplay = document.getElementById("date-display");
  const timeDisplay = document.getElementById("time-display");

  if (dateDisplay && timeDisplay) {
    const now = new Date();

    // Format Tanggal (e.g., "Jumat, 4 Juli 2025")
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateDisplay.textContent = now.toLocaleDateString("id-ID", dateOptions);

    // Format Waktu (e.g., "22.16 WIB")
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };
    timeDisplay.textContent = now
      .toLocaleTimeString("id-ID", timeOptions)
      .replace(/\./g, ":");
  }
  // --- AKHIR BAGIAN BARU ---

  // Mengambil semua elemen yang dibutuhkan dari DOM
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const popupOverlay = document.getElementById("popup-overlay");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.getElementById("close-btn");

  // Menambahkan event listener untuk setiap gambar di galeri
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.getAttribute("src");
      popupImg.setAttribute("src", imgSrc);
      popupOverlay.classList.add("active");
    });
  });

  // Fungsi untuk menutup popup
  const closePopup = () => {
    popupOverlay.classList.remove("active");
  };

  // Menambahkan event listener untuk tombol close (X)
  closeBtn.addEventListener("click", closePopup);

  // Menambahkan event listener untuk menutup popup saat area gelap di luar gambar diklik
  popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
      closePopup();
    }
  });
});
