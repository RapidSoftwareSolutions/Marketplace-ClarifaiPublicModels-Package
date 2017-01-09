"use strict";

global.PACKAGE_NAME = "ClarifaiPublicModels";
global.EXPIRES_IN   = 176400 * 1000; 
global.credsStorage = {};

const models   = {
    analyzeImageGeneral:     'aaa03c23b3724a16a56b629203edc62c',
    analyzeImageFood:        'bd367be194cf45149e75f01d59f77ba7',
    analyzeImageTravel:      'eee28c313d69466f836ab83287a54ed9',
    analyzeImageNSFW:        'e9576d86d2004ed1a38ba0cf39ecb4b1',
    analyzeImageWedding:     'c386b7a870114f4a87477c0824499348',
    analyzeImageColor:       'eeed0b6733a644cea07cf4c60f87ebb7',
    detectFaces:             'a403429f2ddf4b49b307e318f00e528b',
    detectAgeGenderEtnicity: 'c0c0ac362b03416da06ab3fa36fb58e3'
};

const express  = require('express'),
    bodyParser = require('body-parser'),
    lib        = require('./lib/functions.js'),
    _          = lib.callback;

const PORT     = process.env.PORT || 8080;
const app      = express();

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

app.post(`/api/${PACKAGE_NAME}/:route`, _(function* (req, res) {
    let response;
    let token;
    let r = {
        callback     : "",
        contextWrites: {}
    };
    let {
        clientId,
        clientSecret,
        image
    } = req.body.args;

    let model = models[req.params.route] || 'aaa03c23b3724a16a56b629203edc62c';

    try {
        let required = lib.parseReq({clientId, clientSecret, image});

        if(required.length > 0) 
            throw new RapidError('REQUIRED_FIELDS', required);

        token                 = yield lib.getAccessToken(clientId, clientSecret);
        response              = yield lib.predictRequest(token, model, image);
        r.callback            = 'success';
        r.contextWrites['to'] = response.data ? response.data : response;
    } catch(e) {
        r.callback            = 'error';
        r.contextWrites['to'] = e.status_code 
            ? e 
            : { status_code: 'API_ERROR', status_msg: e.data ? e.data : e };

    }
    res.status(200).send(r);
}));

setInterval(() => {
    for(let c in credsStorage) {
        if(credsStorage[c][1] < Date.now()) delete credsStorage[c];
    }
}, 60 * 1000);

app.listen(PORT);
module.exports = app;
