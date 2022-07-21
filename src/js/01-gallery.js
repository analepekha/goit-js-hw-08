// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const markUpGallery = document.querySelector('.gallery')


const makeGallery = (galleryItems) => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
        </a>`
    }).join("")
}
markUpGallery.insertAdjacentHTML('beforeend', makeGallery(galleryItems))

  const gallerySimpleLightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
