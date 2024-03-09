import React from "react";
import PhotoCollage from "../../components/Photocollage/Photocollage";
const Collage = () => {
  const images = [
    { src: "image1.jpg", width: 400, height: 300 },
    { src: "image2.jpg", width: 300, height: 400 },
    { src: "image3.jpg", width: 350, height: 350 },
    // Add more image objects here
  ];
  const imgctx = useContext(imageContext);
  const urlOfArray = imgctx.editedImage.map((item) => {
    return { src: item.imageUrl };
  });
  return (
    <div>
      <h1>Photo Collage</h1>
      <PhotoCollage images={urlOfArray} />
    </div>
  );
};

export default Collage;
