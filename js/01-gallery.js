import { galleryItems } from './gallery-items.js';

//! Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}


galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);
galleryContainer.addEventListener('click', selectGalleryEl);

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,

    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
  );

  const onKeydownEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
  };
    
  instance.show();
}
