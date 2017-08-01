'use strict';

const fs = require('fs');
const request = require('request');
const imageLocation = './test.jpg';

// the APIG endpoint which triggers the rekognition lambda
const endpoint = 'https://ym7nocog52.execute-api.us-east-1.amazonaws.com/dev/recognize';

// pull base64 representation of image from file system
const image = fs.readFile(imageLocation, 'base64', (err, data) => {

  // post to lambda endpoint
  request.post({
    url: endpoint,
    body: JSON.stringify({
      imageData: data
    })
  }, (err, res) => {
    console.log(res.body);
  });

});
