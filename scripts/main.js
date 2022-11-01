const github = require("@actions/github");
const axios = require("axios");
const { oauthToken, orgId, ticketName } = process.env;

console.log(oauthToken.length, orgId.length, ticketName.length);
console.log('Successfully');