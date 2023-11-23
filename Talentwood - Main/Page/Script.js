"use strict";
// gsap.registerPlugin(ScrollTrigger);
// const awards = document.querySelectorAll(".awards");
// let currentAwardIndex = 0;

// function showAwards(index) {
//   awards.forEach((award, i) => {
//     if (i === index) {
//       award.style.display = "block";
//     } else {
//       award.style.display = "none";
//     }
//   });

//   // Update left-side content based on the selected testimonial
//   const awardInfo = document.querySelector(".awards-info");
//   const awardsCategory = [
//     "Best Actor",
//     "Best Director",
//     "Best Supporting Character",
//     "Best Actress",
//   ];

//   awardInfo.querySelector("h2").textContent = awardsCategory[index];
// }

// function nextAwardsSlide() {
//   currentAwardIndex++;
//   if (currentAwardIndex >= awards.length) {
//     currentAwardIndex = 0;
//   }
//   showAwards(currentAwardIndex);
// }

// setInterval(nextAwardsSlide, 5000); // Change award every 5 seconds (adjust the interval as needed)

// showAwards(currentAwardIndex);

//  //////////////////////////////////////////////////////////////////////////////

// const nextButton = document.querySelector("#next-button");
// const prevButton = document.querySelector("#prev-button");

// nextButton.addEventListener("click", () => {
//   currentAwardIndex++;
//   if (currentAwardIndex >= awards.length) {
//     currentAwardIndex = 0;
//   }
//   showAwards(currentAwardIndex);
// });

// prevButton.addEventListener("click", () => {
//   currentAwardIndex--;
//   if (currentAwardIndex < 0) {
//     currentAwardIndex = awards.length - 1;
//   }
//   showAwards(currentAwardIndex);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Initialize Swiper
//   const awardsSlider = new Swiper(".awards-slider", {
//     slidesPerView: 1, // Number of slides visible at once
//     spaceBetween: 20, // Space between slides
//     loop: true, // Enable infinite loop
//     navigation: {
//       nextEl: ".swiper-button-next", // Next button selector
//       prevEl: ".swiper-button-prev", // Previous button selector
//     },
//     autoplay: {
//       delay: 5000, // Autoplay interval in milliseconds (5 seconds)
//     },
//   });
// });

// $(document).ready(function () {
//   // Click event handler for buttons
//   $('button[class^="num"]').click(function () {
//     // Get the number from the class attribute of the clicked button
//     var num = $(this).attr("class").substring(3);

//     // Remove the 'active' class from all rules
//     $(".submission-rules > div").removeClass("active");
//     $(".protoype-images > div").removeClass("active1");
//     // Add the 'active' class to the clicked rule
//     $(".rule" + num).addClass("active");

//     // remove all images
//     $(".protoype-images > div").hide();

//     // Show the corresponding image
//     $(".protoype" + num).show();
//   });
// });

// $(document).ready(function () {
//   // Click event handler for buttons
//   $('button[class^="num"]').click(function () {
//     // Get the number from the class attribute of the clicked button
//     var num = $(this).attr("class").substring(3);

//     // Remove the 'active' class from all rules
//     $(".submission-rules > div").removeClass("active");
//     $(".protoype-images > div").removeClass("active1");
//     // Add the 'active' class to the clicked rule
//     $(".rule" + num).addClass("active");

//     // Hide all prototype images
//     $(".protoype-images > div").hide();

//     // Show the corresponding image
//     $(".protoype" + num).show();
//   });
// });

// NavBar active

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".nav-list li");

  // Function to set the active menu item based on the current URL
  function setActiveMenuItem() {
    const currentURL = window.location.href;

    menuItems.forEach((item) => {
      const menuItemLink = item.querySelector("a");
      if (currentURL === menuItemLink.href) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Initially set the active menu item
  setActiveMenuItem();
});

// submission guideline

document.addEventListener("DOMContentLoaded", function () {
  // Click event handler for buttons
  var buttons = document.querySelectorAll('button[class^="num"]');
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the number from the class attribute of the clicked button
      var num = button.className.substring(3);

      // Remove the 'active' class from all rules
      var ruleElements = document.querySelectorAll(".submission-rules > div");
      ruleElements.forEach(function (element) {
        element.classList.remove("active");
      });

      var imageElements = document.querySelectorAll(".protoype-images > div");
      imageElements.forEach(function (element) {
        element.classList.remove("active1");
        element.style.display = "none";
      });

      // Add the 'active' class to the clicked rule
      var ruleElement = document.querySelector(".rule" + num);
      if (ruleElement) {
        ruleElement.classList.add("active");
      }

      // Show the corresponding image
      var imageElement = document.querySelector(".protoype" + num);
      if (imageElement) {
        imageElement.style.display = "block";
      }
    });
  });
});

//Navigation to competion page

var button = document.getElementById("submitFilm");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Set the new URL you want to navigate to

  var newURL = "Competition.html"; // Replace with your desired URL

  // Use window.location to navigate to the new page
  window.location.href = newURL;
  // button.style.display = "none";
});

// competiton

const slider = document.querySelector(".rules");
const slides = document.querySelectorAll(".prnt-1");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const arrowIcon = document.querySelector(".arrow-icon");
let currentIndex = 0;

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

arrowIcon.addEventListener("click", (e) => {
  e.preventDefault();
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  if (currentIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  // Check if we are on the last slide and hide the Next button
  if (currentIndex === slides.length - 1) {
    nextButton.style.display = "none";
    prevButton.style.display = "none";
    arrowIcon.style.display = "block";
  } else {
    nextButton.style.display = "block";
  }
}

// Initially, display the first slide
updateSlider();

// dropdown for state

const countryDropdown = document.getElementById("countryDropdown");

function populateCountryDropdown() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name.common; // Set the value of the option
        option.textContent = country.name.common; // Set the text displayed for the option
        countryDropdown.appendChild(option);
        option.style.backgroundColor = "#2b2b226e";
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

populateCountryDropdown();

// progress step content:

const stepContent = [
  `Step 1 :
   Project Information`,
  `Step 2 :
   Subject Information`,
  `Step 3 :
   Credits`,
  `Step 4 :
   Specifications`,
  `Step 5 :
   Payments`,
];

// submission

document.getElementById("agreeBtn").addEventListener("click", () => {
  document.getElementById("comp-rules").style.display = "none";
  document.querySelector(".form-outer").style.display = "block";
  document.querySelector(".progress-bar").style.display = "block";
  document.querySelector(".process-heading").style.display = "none";
  updateSubmission();
});

function updateProgressBar() {
  const progressContainer = document.querySelector(".progress-container");
  const progress = document.querySelector(".progress");
  const icon = document.querySelector("#movie-clap");
  const totalSteps = pages.length;
  const currentStep = currentPage + 1; // Adding 1 because currentPage is zero-based

  const percentComplete = (currentStep / totalSteps) * 100;
  progress.style.width = percentComplete + "%";
}

const fromouter = document.querySelector(".form-outer");
const pages = document.querySelectorAll(".page");
const prevBtn = document.querySelector(".prev-1");
const nextBtn = document.querySelector(".next-1");
const arrow = document.querySelector(".arrow");
let currentPage = 0;

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage = (currentPage + 1) % pages.length;
  updateSubmission();
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  updateSubmission();
});

arrow.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  updateSubmission();
});

function updateSubmission() {
  pages.forEach((page, index) => {
    if (index === currentPage) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });

  updateProgressBar();

  if (currentPage === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  // Check if we are on the last slide and hide the Next button
  if (currentPage === pages.length - 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    arrow.style.display = "block";
  } else {
    nextBtn.style.display = "block";
  }
  const stepContentElement = document.querySelector(".step-content");
  stepContentElement.textContent = stepContent[currentPage];
}

// gsap fro iphone

// const iphone14One = document.getElementById("iphone14one");
// const iphone14Two = document.getElementById("iphone14two");

// gsap.to("#iphone14one", {
//   scrollTrigger: {
//     trigger: "#iphone14one",
//     toggleActions: "restart none none none",
//   },
//   x: 850,
//   duration: 1.5,
// });

// Create a GSAP timeline
// const animationTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".model2", // Element that triggers the animation
//     start: "top center", // Start the animation when the trigger element's top reaches the center of the viewport
//     end: "bottom center", // End the animation when the trigger element's bottom reaches the center of the viewport
//     markers: true, // Optional: Display markers to visualize the trigger area
//     scrub: true, // Optional: Smoothly scrub through the animation timeline
//   },
// });

// Define the animation for the elements
// animationTimeline
//   .from(iphone14One, { opacity: 0, x: -100, duration: 1 })
//   .from(iphone14Two, { opacity: 0, x: 100, duration: 1 }, "-=0.5");

// For flip in homepage
