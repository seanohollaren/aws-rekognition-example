# Lambda Rekognition Example

This is a lambda-based endpoint which accepts base64 encoded image data and returns information about what was detected in the image.


### Deployment

Update the execution role within `serverless.yml` and then deploy the function to AWS with `serverless deploy` command.

Once the function is deployed, grab the `endpoint` that Serverless prints out and update line 8 of `example.js`.


### Running the Example
`example.js` is an example of what a client would do to take advantage of this lambda.  It's really just grabbing the base64 representation of an image and POSTing it to the lambda endpoint we just created.

To hit the endpoint with the example image, run `node example.js`.  This will return the labels that Rekognition pulled from the image.
