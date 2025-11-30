const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

const items = Array.from(document.querySelectorAll(".lightbox-trigger"));
let currentIndex = 0;
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");

function openLightbox(idx) {
  currentIndex = idx;
  const item = items[currentIndex];
  lbImg.src = item.dataset.img;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
}

items.forEach((card, i) =>
  card.addEventListener("click", () => openLightbox(i))
);
document
  .querySelectorAll(".card")
  .forEach((c, i) => setTimeout(() => c.classList.add("visible"), 80 * i));
