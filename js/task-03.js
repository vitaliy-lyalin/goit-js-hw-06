const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = document.querySelector(".gallery");
galleryListEl.style.display = "flex";
galleryListEl.style.gap = "30px";
galleryListEl.style.listStyle = "none";

const makeGalleryMarkup = (items) => {
  return items
    .map((item) => {
      const markup = `<li> <img src="${item.url}" alt="${item.alt}"  height="750" weight="1260"></li>`;
      return markup;
    })
    .join();
};

const elements = makeGalleryMarkup(images);
galleryListEl.insertAdjacentHTML("afterbegin", elements);
