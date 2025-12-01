const items = document.querySelectorAll(".project-item img");
const preview = document.getElementById("imgPreview");
const previewImage = document.getElementById("previewImage");
const closeBtn = document.getElementById("closePreview");

// klik gambar → muncul popup
items.forEach(img => {
  img.addEventListener("click", () => {
    previewImage.src = img.src;
    preview.style.display = "flex";
  });
});

// klik tombol tutup
closeBtn.addEventListener("click", () => {
  preview.style.display = "none";
});

// klik area gelap → tutup
preview.addEventListener("click", (e) => {
  if (e.target === preview) {
    preview.style.display = "none";
  }
});

