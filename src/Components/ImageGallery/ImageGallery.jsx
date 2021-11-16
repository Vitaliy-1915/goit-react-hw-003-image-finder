import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "../ImageGallery/ImageGallery.module.css";

function ImageGallery(props) {
  // console.log(props);
  const { images, openModal } = props;
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          tag={image.tags}
          smallImage={image.webformatURL}
          openModal={() => openModal(image.largeImageURL, image.tags)}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
