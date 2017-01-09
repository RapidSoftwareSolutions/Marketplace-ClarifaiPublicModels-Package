// todo: switch to bluebird
const Q       = require('q');
const fs      = require('fs');
const path    = require('path');
const request = require('request');

global.RapidError = function(code, fields) {

    let messages = {
        'REQUIRED_FIELDS':        'Please, check and fill in required fields.',
        'JSON_VALIDATION':        'Syntax error. Incorrect input JSON. Please, check fields with JSON input.',
        'INTERNAL_PACKAGE_ERROR': 'Something went wrong inside the package. Please, call support.'
    }

    this.status_code = code;
    this.status_msg  = messages[code];

    if(code == 'REQUIRED_FIELDS')
        this.fields  = fields || [];
}

RapidError.prototype = Object.create(Error.prototype);
RapidError.prototype.constructor = RapidError;

let safeParse = module.exports.safeParse = (str) => {
    try {
        return JSON.parse(str)
    } catch(e) {
        return str;
    }
};

module.exports.getAccessToken = (cid, cs) => {
    const defered = Q.defer();

    if(credsStorage[cid + '|' + cs] && credsStorage[cid + '|' + cs][1] > Date.now()) 
        defered.resolve(credsStorage[cid + '|' + cs][0]);
    else
        request.post({
            uri: 'https://api.clarifai.com/v2/token',
            headers: {
                'Authorization': 'Basic ' + new Buffer(cid + ':' + cs).toString('base64')
            }
        }, (err, response, result) => {
            if(!err && (/20.*/).test(response.statusCode)) {
                result = JSON.parse(result);
                credsStorage[cid + '|' + cs] = [result.access_token, EXPIRES_IN + Date.now()];
                defered.resolve(result.access_token);
            } else {
                defered.reject(safeParse(err || result || response.statusCode));
            }
        })

    return defered.promise; 
}

module.exports.predictRequest = (token, model, image) => {
    const defered = Q.defer();

    request.post({
        uri: `https://api.clarifai.com/v2/models/${model}/outputs`,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        json: {
            inputs: [{ data: {image: {url: image}} }]
        }
    }, (err, response, result) => {
        if(!err && (/20.*/).test(response.statusCode)) {
            defered.resolve(safeParse(result));
        } else {
            defered.reject(safeParse(err || result || response.statusCode));
        }
    })

    return defered.promise; 
}

module.exports.callback = (gen) => {
    return function() {
        return Q.async(gen).apply(null, arguments).done();
    };
}

module.exports.parseReq = (obj) => {
    let arr = [];
    for(let key in obj)
        if(!obj[key]) arr.push(key);

    return arr;
}

module.exports.init = () => {
    let apiObject = new Object(null);

    fs.readdirSync(path.join(process.env.PWD, 'api')).forEach((file) => {
        try {
            var type    = file.substring(file.lastIndexOf('.') + 1),
                route   = file.substring(0, file.length - type.length - 1);

            if(!type == 'js' || route == 'metadata.js') return;

            apiObject[route] = require(`../api/${file}`);
        } catch(e) { 
            console.log(e);
            return;
        }
    });

    return apiObject;
}

module.exports.generateUUID = () => {
    var d = new Date().getTime();

    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    
    return uuid;
};

module.exports.clearArgs = function fn(obj, recurse) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] == '') {
            delete obj[i];
        } else if (recurse && typeof obj[i] === 'object') {
            if(JSON.stringify(obj[i]) == '{}') {
                delete obj[i];
            }

            fn(obj[i], true);
        }
    }

    return obj;
}
