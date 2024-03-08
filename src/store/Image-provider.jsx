import React, { useState } from "react";
import Imagecontext from "./Image-context";

function Imageprovider(props) {
  const initialData = {
    editedImage: [],
    mergedImages: [],
    rowColState: {},
  };
  const [imgState, setImgState] = useState(initialData);

  const addToEditedImageHandler = (imgurl) => {
    console.log(imgurl);
    const obj = {
      imageUrl: imgurl,
    };
    const updatedEditedImage = [...imgState.editedImage];
    updatedEditedImage.push(obj);
    setImgState((prevImgState) => {
      return { ...prevImgState, editedImage: updatedEditedImage };
    });
  };
  const addToMergedImagesHandler = () => {};
  const setRowColStateHandler = (value) => {
    const obj={...value}
    const updatedObj = obj.rowData;
    setImgState((item) => {
      return { ...item, rowColState: updatedObj};
    });
  };
  const imgContext = {
    editedImage: imgState.editedImage,
    mergedImages: imgState.mergedImages,
    rowColState: imgState.rowColState,
    addToEditedImage: addToEditedImageHandler,
    addToMergedImages: addToMergedImagesHandler,
    setRowColState: setRowColStateHandler,
  };
  return (
    <Imagecontext.Provider value={imgContext}>
      {props.children}
    </Imagecontext.Provider>
  );
}

export default Imageprovider;
