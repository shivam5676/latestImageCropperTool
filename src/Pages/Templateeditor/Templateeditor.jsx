import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import imageContext from "../../store/Image-context";

function Templateeditor(props) {
  const croppedimageArray = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
  ];
  const [mergedImage, setMergedImage] = useState(null);
  const [colsDiv, setColsDiv] = useState([]);
  const navigate = useNavigate();
  const imgctx = useContext(imageContext);

  let totalColumns = imgctx.rowColState.totalColumns;
  let perLineCols = imgctx.rowColState.cols;

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = 200 * totalColumns; // Assuming each image is 200px wide
    canvas.height = 300; // Assuming each image is 300px tall

    // Draw images onto canvas
    let xOffset = 0;
    urlOfArray.forEach((url) => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        ctx.drawImage(image, xOffset, 0, 200, 300);
        xOffset += 200; // Increment x offset for next image
        if (xOffset >= canvas.width) {
          // All images are drawn
          setMergedImage(canvas.toDataURL("image/png"));
        }
      };
    });
  }, [totalColumns]);
  const urlOfArray = imgctx.editedImage.map((item) => {
    return item.imageUrl;
  });
  console.log(urlOfArray);
 
  console.log(imgctx.editedImage);
  let newArray = [];
  let index = 0;
  const getCroppImageHandler = (index) => {
    console.log(index);
    navigate("/imgeditor");
  };

  for (let index = 0; index < totalColumns; index++) {
    newArray.push(
      <div
        key={index}
        className="cols border d-flex justify-content-center align-items-center fw-bolder"
        style={{
          height: "250px",
          backgroundImage: `url(${urlOfArray[index ]})`,
         
        }}
        onClick={() => getCroppImageHandler(index)}
      >
        +
      </div>
    );
  }

  const handleDownload = () => {
    if (mergedImage) {
      // Create an anchor element
      const link = document.createElement("a");
      link.href = mergedImage;
      link.download = "merged_image.png";
      // Simulate click on the anchor element to trigger download
      link.click();
    }
  };
  return (
    <div
      className="container border  d-flex justify-content-center align-items-center flex-column"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className={`row row-cols-${perLineCols}`} style={{ width: "280px" }}>
        {newArray}
      </div>
      <div className="row text-center">
        <div className="btn btn-warning my-5" onClick={handleDownload}> download merge image</div>
      </div>
    </div>
  );
}

export default Templateeditor;
