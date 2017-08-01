# Lambda Rekognition Example

This is a lambda-based endpoint which accepts base64 encoded image data and returns information about what was detected in the image.


### Deployment

If you don't have it already, install `serverless` with `npm install -g serverless`.

Update the execution role within `serverless.yml` and then deploy the function to AWS with `serverless deploy` command.

Once the function is deployed, grab the `endpoint` that Serverless prints out and update line 8 of `example.js`.


### Running the Example
`example.js` is an example of what a client would do to take advantage of this lambda.  It's really just grabbing the base64 representation of an image and POSTing it to the lambda endpoint we just created.

To hit the endpoint with the example image, run `node example.js`.  This will return the labels that Rekognition pulled from the image.


### Output

The API will return with the output received from Rekognition.

Example output for [test.jpg](https://bitbucket.nike.com/users/sohol1/repos/rekognition-lambda/browse/test.jpg):

```
{
  "result": {
    "Labels": [{
      "Name": "Animal",
      "Confidence": 97.9697036743164
    }, {
      "Name": "Canine",
      "Confidence": 97.9697036743164
    }, {
      "Name": "Dog",
      "Confidence": 97.9697036743164
    }, {
      "Name": "Eskimo Dog",
      "Confidence": 97.9697036743164
    }, {
      "Name": "Husky",
      "Confidence": 97.9697036743164
    }, {
      "Name": "Mammal",
      "Confidence": 97.9697036743164
    }, {
      "Name": "Pet",
      "Confidence": 97.9697036743164
    }],
    "OrientationCorrection": "ROTATE_0"
  }
}
```
