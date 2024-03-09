import React from "react";

const imageContext = React.createContext({
  editedImage: [],
  mergedImages: [],
  croppedImages:[],
  rowColState: {},
  setRowColState: () => {},
  addToEditedImage: () => {},
  addToMergedImages: () => {},
  addToCroppedImages: ()=>{}
});

export default imageContext;
