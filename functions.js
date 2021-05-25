let config;

try {
  config = require("./local.json");
} catch (error) {
  config = null;
}

exports.token = config ? config.token : process.env.token;
exports.apiKey = config ? config.apiKey : process.env.apiKey;
exports.authDomain = config ? config.authDomain : process.env.authDomain;
exports.databaseURL = config ? config.databaseURL : process.env.databaseURL;
exports.projectId = config ? config.projectId : process.env.projectId;
exports.storageBucket = config ? config.storageBucket : process.env.storageBucket;
exports.messagingSenderId = config ? config.messagingSenderId : process.env.messagingSenderId;
exports.appId = config ? config.appId : process.env.appId;
exports.measurementId = config ? config.measurementId : process.env.measurementId;
