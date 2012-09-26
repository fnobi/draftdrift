process.env.NODE_CONFIG_DIR = __dirname + "/config";
var draftdrift = require(__dirname + "/lib/draftdrift");

draftdrift.sync();