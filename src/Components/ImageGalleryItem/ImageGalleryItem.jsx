import React from "react";
import s from "../ImageGalleryItem/ImageGalleryItem.module.css";

function ImageGalleryItem(props) {
  const { tags, smallImage, openModal } = props;
  return (
    <li className={s.galleryItem} onClick={openModal}>
      <img className={s.galleryItemImage} src={smallImage} alt={tags} />
    </li>
  );
}

export default ImageGalleryItem;
