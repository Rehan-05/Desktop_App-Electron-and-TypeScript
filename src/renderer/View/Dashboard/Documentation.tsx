import axios from 'axios';

import React, { Component } from 'react';

function Documentation() {

  const [selectedFile, setSelectedFile] = React.useState<any>(null);
  const [uploadStatus, setUploadStatus] = React.useState<any>(null);

  const onFileChange = (event: any) => {
    // Update the state

	// if(event.target.files[0]?.name.match(/\.(jpg|jpeg|png|gif)$/)) {
		setSelectedFile(event.target.files[0]);
		setUploadStatus(null);


  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    const file = new FormData();
    file.append('file', selectedFile, selectedFile.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const url = 'http://localhost:5000/api/File/upload';
    // Request made to the backend api
    // Send formData object
    axios
      .post(url, file, config)
      .then((response) => {

        setUploadStatus("Successfully uploaded you document");
		setSelectedFile(null);
      })
      .catch((err) => {
        setUploadStatus(err.message);
      });
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {

    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile?.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>{uploadStatus==null?"Choose before Pressing the Upload button":uploadStatus}</h4>
        </div>
      );
    }
  };

  return (
    <div>
      {fileData()}
      <div>
        <input type="file" onChange={onFileChange} />
        <button  onClick={onFileUpload}>Upload!</button>
      </div>
    </div>
  );
}

export default Documentation;
