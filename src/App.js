import React, { Component } from 'react';
import './App.css';
import AWS from 'aws-sdk';

//s3 bucket 
const albumBucketName = 'alecia-test';
//s3 bucket region
const bucketRegion = 'us-east-1';
//cognito pool id
const IdentityPoolId = 'us-east-1:12c54804-a9c5-4cf9-8561-d956675f13b7';
//AWS configuration
AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});
//Generate S3 bucket object.
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: albumBucketName }
});
class App extends Component {

    addPhoto = () => {
        var files = document.getElementById('photoupload').files;
        if (!files.length) {
            return alert('Please choose a file to upload first.');
        }
        var file = files[0];
        var fileName = file.name;
        var photoKey = encodeURIComponent(fileName);
        s3.upload({
            Key: photoKey,
            Body: file,
            ACL: 'public-read'
        }).on('httpUploadProgress', function(evt) {
            console.log("Uploaded :: " + parseInt((evt.loaded * 100) / evt.total)+'%');
        }).send(function(err, data) {
            if (err) {
                console.log(err);
                return alert('There was an error uploading your file: ', err.message);
            }
            alert('Successfully uploaded file.');
            console.log(data);
        })
    }
    render() {
        return (<div className="App">
        <header className="App-header">
          <h1 className="App-title">s3 bucket uploader</h1>
        </header>
        <input type="file" name="photoupload" id="photoupload"/>
        <button onClick={this.addPhoto}>upload</button>
      </div>);
    }
}

export default App;