import axios from 'axios';

import React,{Component} from 'react';

class Documentation extends Component {

	state:any = {

	// Initially, no file is selected
	selectedFile: null,
  uploadStatus:null
	};

	// On file select (from the pop up)
	onFileChange = (event:any) => {

	// Update the state
	this.setState({ selectedFile: event.target.files[0] ,uploadStatus:null});

	};

	// On file upload (click the upload button)
	onFileUpload = () => {

	// Create an object of formData
	const file = new FormData();

	// Update the formData object
	file.append("file", this.state.selectedFile, this.state.selectedFile.name);


	// Details of the uploaded file
	console.log(this.state.selectedFile);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  const url= "http://localhost:5000/api/File/upload";
	// Request made to the backend api
	// Send formData object
	axios.post(url,file,config).then(response => this.setState({uploadStatus:response.data,selectedFile:null}));
	};

	// File content to be displayed after
	// file upload is complete
	fileData = () => {

	if (this.state.selectedFile) {

		return (
		<div>
			<h2>File Details:</h2>

<p>File Name: {this.state.selectedFile.name}</p>


<p>File Type: {this.state.selectedFile.type}</p>


<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};


	render() {
    if(this.state.uploadStatus!=null)
    {
      return(
        <h1>Successfully uploaded you document</h1>
      )
    }
	return (
		<div>
{this.fileData()}
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>

		</div>
	);
	}
}

export default Documentation;

