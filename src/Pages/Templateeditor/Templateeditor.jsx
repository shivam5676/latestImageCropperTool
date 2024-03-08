import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import imageContext from "../../store/Image-context";

function Templateeditor(props) {
  const croppedimageArray = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
  ];

  const [colsDiv, setColsDiv] = useState([]);
  const navigate = useNavigate();
  const imgctx = useContext(imageContext);
  const urlOfArray = imgctx.editedImage.map((item) => {
    return item.imageUrl;
  });
  console.log(urlOfArray);
  let totalcolumns = imgctx.rowColState.totalColumns;
  let perLineCols = imgctx.rowColState.cols;
  console.log(imgctx.editedImage);
  let newArray = [];
  let index = 0;
  const getCroppImageHandler = (index) => {
    console.log(index);
    navigate("/imgeditor");
  };

  for (let index = 0; index < totalcolumns; index++) {
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

  return (
    <div
      className="container border  d-flex justify-content-center align-items-center flex-column"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className={`row row-cols-${perLineCols}`} style={{ width: "280px" }}>
        {newArray}
      </div>
      <div className="row text-center">
        <div className="btn btn-warning my-5">merge image</div>
      </div>
    </div>
  );
}

export default Templateeditor;
