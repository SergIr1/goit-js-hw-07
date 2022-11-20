import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
	div: document.querySelector(".gallery"),
};

// refs.div.addEventListener("click", greateGalleryCardMarcup);


function greateGalleryCardMarcup(gallary) {
    const galleryToAdd = [];
	gallary.map(({ preview, original, description }) => {
        const marcup = `<div class='gallery__item'><a class='gallary__link' href='${original}'><img class='gallary__image' src='${preview}' data-source='${original}' alt='${description}'/></a></div>`;
    galleryToAdd.push(marcup);
    });
    console.log(galleryToAdd)
    return refs.div.insertAdjacentHTML('beforeend', galleryToAdd.join(''));
}

greateGalleryCardMarcup(galleryItems);

