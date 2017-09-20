module.exports.do = function(req, res){
res.status(200).send({
  "package": "ClarifaiPublicModels",
  "tagline": "ClarifaiPublicModels API Package",
  "keywords": [
    "AI",
    "API",
    "artificial",
    "image",
    "intelligence",
    "learning",
    "machine",
    "media",
    "networking",
    "neural",
    "recognition",
    "video",
    "visual"
  ],
  "description": "Build amazing apps with the world’s best image and video recognition API.",
  "image": "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAkRAAAAJDc4ZDU2MjRmLWI2N2MtNGI3YS05NDhiLWVjMmU4N2IzOGE3OA.png",
  "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-ClarifaiPublicModels-Package",
  "accounts": {
    "domain": "clarifai.com",
    "credentials": [
      "clientId", "clientSecret"
    ]
  },
  "steps": [
    "Signup in clarifai.com",
    "Go to Developer Dashboard (https://developer.clarifai.com/account/applications/)",
    "Press Create a New Application button",
    "Copy and save your client_id and and client_secret",
    "Press Generate Access Token button or use getAccessToken method (https://github.com/RapidSoftwareSolutions/Marketplace-ClarifaiPublicModels-Package#getAccessToken)"
  ],
  "blocks": [
    {
      "name": "analyzeImageGeneral",
      "description": "The General model contains a wide range of tags across many different topics. In most cases, tags returned from the general model will sufficiently recognize what's inside your image.",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "analyzeImageFood",
      "description": "The Food model analyzes images and videos and returns probability scores on the likelihood that the image contains a recognized food ingredient and dish.",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "analyzeImageTravel",
      "description": "The Travel model analyzes images and returns probability scores on the likelihood that the image contains a recognized travel related category.",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "analyzeImageNSFW",
      "description": "The NSFW (Not Safe For Work) model analyzes images and videos and returns probability scores on the likelihood that the image contains pornography.",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "analyzeImageWedding",
      "description": "The Wedding model knows all about weddings including brides, grooms, dresses, flowers, etc.",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "analyzeImageColor",
      "description": "The Color model is used to retrieve the dominant colors present in your images. Color predictions are returned in the hex format. A density value is also returned to let you know how much of the color is present. In addition, colors are also mapped to their closest W3C counterparts.",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "detectFaces",
      "description": "The Face Detection model analyzes images, GIFs and videos and returns probability scores on the likelihood that the media contains human faces. If human faces are detected, the model will also return the coordinate locations of those faces with a bounding box.",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    },
    {
      "name": "detectAgeGenderEtnicity",
      "description": "The 'Age, Gender and Ethnicity' model analyzes images and returns bounding box locations of detected human faces. For each of found cropped faces, a prediction as to the person's age (1-100), gender (male, female) and ethnicity (asian, black, indian, latino, middle-eastern, white).",
      "args": [
        {
          "name": "clientId",
          "info": "This identifies which application is trying to access the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "clientSecret",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account.",
          "type": "credentials",
          "required": true
        },
        {
          "name": "image",
          "info": "Image to analyze",
          "type": "File",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "success",
          "info": "Success"
        },
        {
          "name": "error",
          "info": "Error"
        }
      ]
    }
  ]
})
};
