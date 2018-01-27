# React S3 File Uploader : react-s3-file-uploader

[![build status](https://img.shields.io/travis/reactjs/react-redux/master.svg?style=flat-square)](https://travis-ci.org/jpaulebenz/react-s3-file-uploader)


Upload to S3 bucket using cognito service.

##### Refering Funtionality from :
http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html#s3-example-photo-album-viewing-album

##### Assume my platform are :
* Linux

##### Assume my configurations are :
* NODE 8.1.2
* NPM 5.4.1

##### AWS SDK NPM : https://www.npmjs.com/package/aws-sdk
* npm install aws-sdk

##### AWS Bucket Configurations :

* Bucket Policy & CORS configuration
```
      {
          "Version": "2008-10-17",
          "Statement": [
              {
                  "Effect": "Allow",
                  "Principal": "*",
                  "Action": "s3:*",
                  "Resource": "arn:aws:s3:::BUCKETNAME/*"
              }
          ]
      }

      <?xml version="1.0" encoding="UTF-8"?>
      <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
      <CORSRule>
          <AllowedOrigin>*</AllowedOrigin>
          <AllowedMethod>POST</AllowedMethod>
          <AllowedMethod>GET</AllowedMethod>
          <AllowedMethod>PUT</AllowedMethod>
          <AllowedMethod>DELETE</AllowedMethod>
          <AllowedMethod>HEAD</AllowedMethod>
          <ExposeHeader>ETag</ExposeHeader>
          <AllowedHeader>*</AllowedHeader>
      </CORSRule>
      </CORSConfiguration>

```````````````````

## Install

###### Steps for Setting up `react-s3-file-uploader` project
Install ``Node`` and  ``NPM``
```
Navigate to Project root folder and install
```
$ npm install
```
Starting development server
```
$ npm start
```
Building the code from development
```
$ npm run build
```
Note: If you dont have permisson running npm commands use sudo user

Main code in : 
```
https://github.com/jpaulebenz/react-s3-file-uploader/blob/master/src/App.js



