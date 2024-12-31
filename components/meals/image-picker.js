"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pikedImage, setPikedImage] = useState();
  const ImageInput = useRef();

  function handlePickClick() {
    ImageInput.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPikedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pikedImage && <p>No image picked yet!</p>}
          {pikedImage && <Image src={pikedImage} alt="image" fill />}
        </div>
        <input
          ref={ImageInput}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
