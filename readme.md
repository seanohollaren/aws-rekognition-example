# Lambda Rekognition Example

This is a lambda-based endpoint which accepts base64 encoded image data and returns information about what was detected in the image.

## Deployment

Update the execution role within `serverless.yml` and then deploy the function to AWS with `serverless deploy` command.

Once the function is deployed, grab the `endpoint` that serverless prints out and update line 8 of `upload.js`.

To hit the endpoint with the example image, run `node upload.js`;
