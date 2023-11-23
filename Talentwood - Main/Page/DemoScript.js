"use strict";

// demo

const Slider = () => {
  const slideRef = document.createElement("div");
  const loadingProgress = 0;

  const handleClickNext = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.appendChild(items[0]);
    showTitleContent();
  };

  const handleClickPrev = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.prepend(items[items.length - 1]);
    showTitleContent();
  };

  const data = [
    {
      id: 1,
      imgUrl: "Images/image.jpg",
      profileImg: "Images/img_36515.jpg",
      desc: "Best Actor",
      title: "Best Actor",
      name: "TamizhChemmal",
    },
    {
      id: 2,
      imgUrl: "Images/image.jpg",
      profileImg: "Images/210336-hermione-granger-1920x1440.jpg",
      desc: "Best Actress",
      title: "Best Actress",
      name: "Sangeetha Priya",
    },
    {
      id: 3,
      imgUrl: "Images/image.jpg",
      profileImg: "Images/W5AXCCE72QXJ73XF5SIXQ27D7E.jpg",
      desc: "Best Director",
      title: "Best Director",
      name: "Patrick",
    },
    {
      id: 4,
      imgUrl: "Images/image.jpg",
      desc: "Best Supporting Character",
      title: "Best Supporting Character",
      profileImg: "Images/Supporting Actress 2014.jpg",
      name: "Swarnamalya",
    },
    {
      id: 5,
      imgUrl: "Images/image.jpg",
      profileImg: "Images/man-filming-with-professional-camera.jpg",
      desc: "Best Cinematographer",
      title: "Best Cinematographer",
      name: "Murali",
    },
    {
      id: 6,
      imgUrl: "Images/image.jpg",
      profileImg: "Images/male-business-executive-receiving-award.jpg",
      desc: "Best Composer",
      title: "Best Composer",
      name: "Vickey Jai",
    },
  ];

  const awardContainer = document.createElement("div");
  awardContainer.classList.add("awardContainer");

  //create loadbar div

  const loadbar = document.createElement("div");
  loadbar.classList.add("loadbar");
  loadbar.style.width = `${loadingProgress}%`;

  // append loadbar to conatiner
  awardContainer.appendChild(loadbar);

  // append slide div to conatiner
  awardContainer.appendChild(slideRef);

  //   create and append items to slide div

  data.forEach((item, index) => {
    const slideItem = document.createElement("div");
    slideItem.classList.add("item");
    slideItem.style.backgroundImage = `url(${item.imgUrl})`;
    if (index !== 0) {
      slideItem.classList.add("hidden");
    }

    slideItem.textContent = item.title;

    slideItem.textContent = item.title;

    const content = document.createElement("div");
    content.classList.add("content");

    const profileImg = document.createElement("img");
    profileImg.classList.add("profileImg");
    profileImg.src = item.profileImg;

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;

    const des = document.createElement("div");
    des.classList.add("des");
    des.textContent = item.desc;

    // const button = document.createElement("button");
    // button.textContent="See More"

    content.appendChild(profileImg);
    content.appendChild(name);
    content.appendChild(des);

    // content.appendChild(button);
    slideItem.appendChild(content);
    slideRef.appendChild(slideItem);

    // create the buttons div
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    // create the prev button
    const prevButton = document.createElement("button");
    prevButton.id = "prev";
    prevButton.addEventListener("click", handleClickPrev);

    const prevIcon = document.createElement("i");
    prevIcon.className = "fas fa-angle-left left-arrow";
    prevButton.appendChild(prevIcon);

    // create the next button
    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.addEventListener("click", handleClickNext);

    const nextIcon = document.createElement("i");
    nextIcon.className = "fas fa-angle-right right-arrow";
    nextButton.appendChild(nextIcon);

    // Append buttons to the container

    buttons.appendChild(prevButton);
    buttons.appendChild(nextButton);

    awardContainer.appendChild(buttons);
  });

  document.getElementById("root").appendChild(awardContainer);

  // Function to show title content when slide is displayed
  const showTitleContent = () => {
    let items = slideRef.querySelectorAll(".item");
    items.forEach((item, index) => {
      // Toggle the 'hidden' class based on the current active slide
      if (index === 0) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  };
  showTitleContent();
  document.getElementById("next").addEventListener("click", showTitleContent);
  document.getElementById("prev").addEventListener("click", showTitleContent);

  setInterval(() => {
    handleClickNext();
  }, 5000);
};

Slider();

// slider concept stack

// document.addEventListener("DOMContentLoaded", function () {
//   var sliderImages = document.querySelectorAll(".slider-img");

//   sliderImages.forEach(function (image) {
//     image.addEventListener("click", function () {
//       sliderImages.forEach(function (img) {
//         img.classList.remove("active");
//       });
//       this.classList.add("active");
//     });
//   });
// });
