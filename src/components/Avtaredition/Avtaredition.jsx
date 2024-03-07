import React, { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
import classes from "./Avtaredition.module.css";
const AvatarEditorComponent = () => {
  const [image, setImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [rotateAngle, setRotateAngle] = useState(0);
  const editorRef = useRef();
  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  // Function to handle scale change
  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  // Function to handle rotate change
  const handleRotateChange = (event) => {
    setRotate(parseFloat(event.target.value));
  };

  // Function to download edited image
  const handleDownloadImage = () => {
    if (editedImage) {
      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = editedImage;
      link.download = "edited_image.png"; // Set the download attribute
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up
      document.body.removeChild(link);
    }
  };
  // Function to get edited image
  const handleGetImage = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      setEditedImage(canvas.toDataURL()); // Convert canvas to data URL
    }
  };
  const rotateLeftHandler = () => {
    const newRotationAngle = rotateAngle - 90;
    setRotateAngle(newRotationAngle);
  };
  const rotateRightHandler = () => {
    const newRotationAngle = rotateAngle + 90;
    setRotateAngle(newRotationAngle);
  };
  return (
    <div className={classes.avatar_container}>
      {image && (
        <AvatarEditor
          image={image}
          width={500}
          height={500}
          scale={scale}
          rotate={rotate}
          onScaleChange={handleScaleChange}
          onRotateChange={handleRotateChange}
          style={{ transform: `rotate(${rotateAngle}deg)` }}
        />
      )}
      {image && (
        <div>
          <button onClick={rotateLeftHandler}>
            Rotate 90&deg; left <FaArrowRotateLeft />
          </button>
          <button onClick={rotateRightHandler}>
            Rotate 90&deg; right <FaArrowRotateRight />
          </button>
        </div>
      )}
      {/* File input to select image */}

      {!image && (
        <div>
          <h1>
            Drop your image here <br /> <strong>or</strong>{" "}
          </h1>
          <label htmlFor="file-upload">
            <h1 className={classes.uploader}>Click here to Upload an Image</h1>
          </label>
          <input
            id="file-upload"
            type="file"
            placeholder="Click Here to upload a file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      )}

      {/* Scale and rotate controls */}
      <div>
        {image && (
          <div>
            <label>Scale:</label>
            <input
              type="range"
              min="1"
              max="3"
              step="0.01"
              value={scale}
              onChange={handleScaleChange}
            />
            <label>Rotate:</label>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={rotate}
              onChange={handleRotateChange}
            />
          </div>
        )}
      </div>

      {/* Buttons to get and download edited image */}
      <div>
        <button onClick={handleGetImage}>Get Edited Image</button>
        <button onClick={handleDownloadImage} disabled={!editedImage}>
          Download Edited Image
        </button>
      </div>

      {/* Display the edited image */}
      {editedImage && (
        <img
          src={editedImage}
          alt="Edited"
          style={{ maxWidth: "100%", maxHeight: "200px" }}
        />
      )}
    </div>
  );
};

export default AvatarEditorComponent;
