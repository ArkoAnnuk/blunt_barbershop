// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import gsap animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Jumbotron Animations
// gsap.fromTo(".jumboLogoGsap", { y: 100, opacity: 0, }, { scrollTrigger: ".jumboLogoGsap", y: 0, opacity: 1, delay: 0, duration: 1, ease: "Power3.easeInOut" });
// gsap.fromTo(".jumboTextGsap", { y: 100, opacity: 0, }, { scrollTrigger: ".jumboTextGsap", y: 0, opacity: 1, delay: 0.1, duration: ease: "Power3.easeInOut" });


// Hide Modal Scrollbar
var modal = document.getElementById("productsModal");

modal.addEventListener("show.bs.modal", function() {
  document.body.classList.add("modal-open");
});

modal.addEventListener("hide.bs.modal", function() {
  document.body.classList.remove("modal-open");
});
