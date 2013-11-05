var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
    db: "mongodb://heroku:milOjos2013@paulo.mongohq.com:10047/app19218678"
}