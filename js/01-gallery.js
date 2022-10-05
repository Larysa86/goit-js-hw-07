import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallaryContainer = document.querySelector(".gallery");

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></div>`;
    })
    .join("");
}

gallaryContainer.addEventListener("click", onGallaryImageElClick);

const gallaryItemsMarkup = createGallaryMarkup(galleryItems);

gallaryContainer.innerHTML = gallaryItemsMarkup;

function onGallaryImageElClick(event) {
  const isGallaryImageEl = event.target.classList.contains("gallery__image");

  if (!isGallaryImageEl) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModal);
      },

      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();

 
  blockPageRefresh(event);

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

function blockPageRefresh(event) {
  event.preventDefault();
}






