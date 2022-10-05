import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector(".gallery");
const gallaryItemsMarkup = createGallaryMarkup(galleryItems);

gallaryContainer.innerHTML = gallaryItemsMarkup;

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}




 











































