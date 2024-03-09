import React from "react";
// import Collage from "react-photo-collage";

const PhotoCollage = ({ images }) => {
  return (
    <div>
      <Collage
        width="500px"
        height="500px"
        layout={[1, 2, 3]}
        photos={images}
      />
    </div>
  );
};

export default PhotoCollage;
