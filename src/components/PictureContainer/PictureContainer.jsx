import React, { useState } from "react";
import { Container } from "react-bootstrap";
function PictureContainer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    console.log(url);
    setImageUrl(url);
  };

  const handleUpload = () => {
    if (selectedFile) {
      
      console.log("Selected File:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };
  const handleDragOver = (event) => {
    // Prevent default behavior to enable drop
    event.preventDefault();
  };

  const handleDrop = (event) => {
    // Prevent default behavior to enable drop
    event.preventDefault();

    // Get the dropped files
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      // Set the first dropped file as the selected file
      setSelectedFile(files[0]);
    }
  };
  return (
    <div>
      <Container>
        <h1>Image Upload</h1>

        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            border: "1px dashed #ccc",
            padding: "20px",
            textAlign: "center",
          }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          )}
          {/* Input element for selecting files */}
          <input type="file" onChange={handleFileChange} accept="image/*" />

          {/* Button to trigger upload */}
          <button onClick={handleUpload}>Upload</button>

          {/* Display the selected file name */}
          {selectedFile && <p>Selected File: {selectedFile.name}</p>}
        </div>
      </Container>
    </div>
  );
}

export default PictureContainer;
