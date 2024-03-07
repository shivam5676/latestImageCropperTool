import React, { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";

const AvatarEditorComponent = () => {
  const [image, setImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
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
  return (
    <div>
      {/* File input to select image */}
      <input type="file" onChange={handleFileChange} />

      {/* AvatarEditor component */}
      {image && (
        <AvatarEditor
          image={image}
          width={250}
          height={250}
          scale={scale}
          rotate={rotate}
          onScaleChange={handleScaleChange}
          onRotateChange={handleRotateChange}
        />
      )}

      {/* Scale and rotate controls */}
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
      </div>
      <div>
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
