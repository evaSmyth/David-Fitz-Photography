"use strict";

const galleryTiles = [
  {
    title: "img1",
    image: "./img/Clarendon Food 2015-055.jpg",
  },
  {
    title: "img2",
    image: "./img/Clarendon Food 2015-094.jpg",
  },
  {
    title: "img3",
    image: "./img/Clarendon Food 2015-133-2.jpg",
  },
  {
    title: "img4",
    image: "./img/Clarendon Food 2015-202.jpg",
  },
  {
    title: "img5",
    image: "./img/Clarendon Food 2015-261.jpg",
  },
  {
    title: "img6",
    image: "./img/Clarendon Food 2015-286.jpg",
  },
  {
    title: "img7",
    image: "./img/Clarendon Food 2015-305.jpg",
  },
  {
    title: "img8",
    image: "./img/Clarendon Food 2015-515.jpg",
  },
  {
    title: "img9",
    image: "./img/Clarendon Food 2015-560.jpg",
  },
  {
    title: "img10",
    image: "./img/Clarendon Food 2015-566.jpg",
  },
  {
    title: "img11",
    image: "./img/Clarendon Food 2015-606.jpg",
  },
  {
    title: "img12",
    image: "./img/Clarendon Food 2015-610.jpg",
  },
  {
    title: "img13",
    image: "./img/Clarendon Food 2015-661.jpg",
  },
  {
    title: "img14",
    image: "./img/Clarendon Food 2015-685.jpg",
  },
  {
    title: "img15",
    image: "./img/Clarendon Food 2015-686-2.jpg",
  },
  {
    title: "img16",
    image: "./img/Clarendon Food 2015-737.jpg",
  },
  {
    title: "img17",
    image: "./img/Clarendon Food 2015-758.jpg",
  },
  {
    title: "img18",
    image: "./img/Clazz Drinks-012.jpg",
  },
  {
    title: "img19",
    image: "./img/Clazz Drinks-024.jpg",
  },
  {
    title: "img20",
    image: "./img/Clazz Drinks-029.jpg",
  },
  {
    title: "img21",
    image: "./img/CLAZZ FOOD 04-16-156.jpg",
  },
  {
    title: "img22",
    image: "./img/CLAZZ FOOD 04-16-178.jpg",
  },
  {
    title: "img23",
    image: "./img/CLAZZ FOOD 04-16-192.jpg",
  },
  {
    title: "img24",
    image: "./img/CLAZZ FOOD 04-16-303.jpg",
  },
  {
    title: "img25",
    image: "./img/CLAZZ FOOD 04-16-313.jpg",
  },
  {
    title: "img26",
    image: "./img/CLAZZ FOOD 04-16-386.jpg",
  },
  {
    title: "img27",
    image: "./img/food-1.jpg",
  },
  {
    title: "img28",
    image: "./img/food-2 (1).jpg",
  },
  {
    title: "img29",
    image: "./img/food-3.jpg",
  },
  {
    title: "img30",
    image: "./img/food-4.jpg",
  },
  {
    title: "img31",
    image: "./img/food-5.jpg",
  },
  {
    title: "img32",
    image: "./img/food-6.jpg",
  },
  {
    title: "img33",
    image: "./img/food-7.jpg",
  },
  {
    title: "img34",
    image: "./img/food-8.jpg",
  },
  {
    title: "img35",
    image: "./img/food-9.jpg",
  },
  {
    title: "img36",
    image: "./img/food-10.jpg",
  },
  {
    title: "img37",
    image: "./img/food-12.jpg",
  },
  {
    title: "img38",
    image: "./img/food-11.jpg",
  },
  {
    title: "img39",
    image: "./img/food-13.jpg",
  },
  {
    title: "img40",
    image: "./img/food-14.jpg",
  },
  {
    title: "img41",
    image: "./img/food-2.jpg",
  },
];

function buildGallery() {
  for (let i = 0; i < galleryTiles.length; i++) {
    const galleryContainer = document.querySelector(".gallery-container");
    const image = document.createElement("img");
    image.classList.add("gallery-img");
    galleryContainer.appendChild(image);
    image.src = galleryTiles[i].image;
    image.setAttribute("loading", "lazy");
    image.addEventListener("click", enlargeImage);

    function enlargeImage() {
      const modal = document.querySelector(".modal");
      modal.classList.remove("hidden");
      const modalImg = document.querySelector(".modal-img");
      modalImg.src = galleryTiles[i].image;

      const nextButton = document.querySelector(".next-btn");
      const prevButton = document.querySelector(".prev-btn");
      const removeModal = document.querySelector(".remove-modal");

      let index = 1;

      prevButton.addEventListener("click", function () {
        index = (index - 1 + galleryTiles.length) % galleryTiles.length;
        modalImg.src = galleryTiles[index].image;
      });

      nextButton.addEventListener("click", function () {
        index = (index + 1) % galleryTiles.length;
        modalImg.src = galleryTiles[index].image;
      });

      removeModal.addEventListener("click", function () {
        modal.classList.add("hidden");
      });
    }
  }
}
buildGallery();
