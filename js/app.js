// Simple parallax scroll effect
document.addEventListener("scroll", () => {
  const header = document.querySelector(".hero");
  let offset = window.pageYOffset;
  header.style.backgroundPositionY = offset * 0.5 + "px";
});
