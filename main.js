function updateList() {
   const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
      return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
   });

   document.querySelectorAll(".selected-circle").forEach((c) => c.classList.remove("selected-circle"));

   document.querySelectorAll(".nav-dot")[[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener("scroll", () => {
   updateList();
});

// scroll
const scrollBtn = document.querySelector("#home nav ul");

const refreshButtonVisibility = () => {
   if (document.documentElement.scrollTop > 300) {
      scrollBtn.classList.add("opacity-1");
      scrollBtn.classList.remove("opacity-0");
   } else {
      scrollBtn.classList.remove("opacity-1");
      scrollBtn.classList.add("opacity-0");
   }
};

refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});

document.addEventListener("scroll", (e) => {
   refreshButtonVisibility();
});

const titles = [...document.getElementsByTagName("id")].sort((a, b) => {
   return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
});
console.log(titles);

// Slick Js

$(document).ready(function () {
   $("#developpy").slick({
      autoplay: true,
      autoplaySpeed: 2500,
   });
   $("#dinkes").slick({
      autoplay: true,
      autoplaySpeed: 2500,
   });
});
