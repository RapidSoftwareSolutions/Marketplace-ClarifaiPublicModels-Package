# ClarifaiPublicModels Package
Build amazing apps with the world’s best image and video recognition API.
* Domain: clarifai.com
* Credentials: clientId, clientSecret

## How to get credentials: 
0. Signup in [clarifai.com](https://clarifai.com)
1. Go to [Developer Dashboard](https://developer.clarifai.com/account/applications/)
2. Press **Create a New Application** button
3. Copy and save your `client_id and` and `client_secret`
4. Press **Generate Access Token** button or use [getAccessToken](#getAccessToken) method.

## ClarifaiPublicModels.analyzeImageGeneral
The General model contains a wide range of tags across many different topics. In most cases, tags returned from the general model will sufficiently recognize what's inside your image.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

## ClarifaiPublicModels.analyzeImageFood
The Food model analyzes images and videos and returns probability scores on the likelihood that the image contains a recognized food ingredient and dish.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

## ClarifaiPublicModels.analyzeImageTravel
The Travel model analyzes images and returns probability scores on the likelihood that the image contains a recognized travel related category.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

## ClarifaiPublicModels.analyzeImageNSFW
The NSFW (Not Safe For Work) model analyzes images and videos and returns probability scores on the likelihood that the image contains pornography.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

## ClarifaiPublicModels.analyzeImageWedding
The Wedding model knows all about weddings including brides, grooms, dresses, flowers, etc.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

## ClarifaiPublicModels.analyzeImageColor
The Color model is used to retrieve the dominant colors present in your images. Color predictions are returned in the hex format. A density value is also returned to let you know how much of the color is present. In addition, colors are also mapped to their closest W3C counterparts.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

## ClarifaiPublicModels.detectFaces
The Face Detection model analyzes images, GIFs and videos and returns probability scores on the likelihood that the media contains human faces. If human faces are detected, the model will also return the coordinate locations of those faces with a bounding box.

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

## ClarifaiPublicModels.detectAgeGenderEtnicity
The 'Age, Gender and Ethnicity' model analyzes images and returns bounding box locations of detected human faces. For each of found cropped faces, a prediction as to the person's age (1-100), gender (male, female) and ethnicity (asian, black, indian, latino, middle-eastern, white).

| Field       | Type       | Description
|-------------|------------|----------
| clientId    | credentials| This identifies which application is trying to access the API. This is unique and generated once for each application in your account.
| clientSecret| credentials| This provides security when authorizing with the API. This is unique and generated once for each application in your account.
| image       | File       | Image to analyze

