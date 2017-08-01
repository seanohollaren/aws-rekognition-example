'use strict';

const aws = require('aws-sdk');

var rekognition = new aws.Rekognition({
  apiVersion: '2016-06-27'
});

module.exports.recognize = (event, context, callback) => {

  const body = JSON.parse(event.body);

  // create a new base64 buffer out of string passed to us
  const buffer = new Buffer(body.imageData, 'base64');

  // pass image to rekognition to retrieve labels from the picture
  rekognition.detectLabels({
      Image: {
        Bytes: buffer
      }
    }).promise()
    .then((res) => {

      // return labels identified by rekognition
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          result: res
        }),
      };

      callback(null, response);

    })
    .catch((err) => {

      const response = {
        statusCode: 500,
        body: JSON.stringify({
          err
        })
      };

      callback(null, response);
    });


};
