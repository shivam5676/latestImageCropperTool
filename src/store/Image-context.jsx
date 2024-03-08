import React from "react";

const imageContext = React.createContext({
  editedImage: [],
  mergedImages: [],
  rowColState: {},
  setRowColState: () => {},
  addToEditedImage: () => {},
  addToMergedImages: () => {},
});

export default imageContext;
