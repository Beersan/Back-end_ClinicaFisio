const pg = require('pg');
const host = "ec2-54-221-220-59.compute-1.amazonaws.com";
const database = "dcasactg6t0691";
const username = "avzgogfkefojwd";
const password = "98673260249a154f7aec7832ad4e843fe04bf1debc600e98f04b82c2da2c64ea";
const port = 5432;
var connectionStringData = 'postgres://'+ username + ':' + password + '@' + host + ':' + port + '/' + database
exports.PG = connectionStringData;
