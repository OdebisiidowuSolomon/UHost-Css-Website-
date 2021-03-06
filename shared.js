const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.classList.add("open");
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    // backdrop.style.display = "block";
  });
}

modalNoButton && modalNoButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", closeModal);

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  //   mobileNav.style.display = "none";
  modal && modal.classList.remove("open");
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
  //   backdrop.style.display = "block";
  //   mobileNav.style.display = "block";
});
