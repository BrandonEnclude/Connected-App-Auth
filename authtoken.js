// Dependencies
const fs = require('fs');
const jwt = require('jwt-simple');
const axios = require('axios');
// Environment variables
require('dotenv').config();

// Generate claim (JWT payload)
const ISS = process.env.ISS; // Consumer key of SF Connect App
const AUD = process.env.AUD; // https://test.salesforce.com if in Sandbox else https://login.salesforce.com
const SUB = process.env.SUB; // SF User with permissions to use connected app

// Set claim expiration
const now = new Date();
const exp = now.setTime(now.getTime() + 1000 * 60);

const claim = {
    iss: ISS,
    sub: SUB,
    aud: AUD,
    exp: exp
}

// Sign and encode JWT using the key to the certificate uploaded to the connected app
const CERT = fs.readFileSync('./certificate/key.pem', 'utf8');
const token = jwt.encode(claim, CERT, 'RS256'); //Encryption method must be "RS256"

// Salesforce's oauth2 endpoint and POST request body
const authURL = `${AUD}/services/oauth2/token`;
const data = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${token}`

const authResponse = async () => {
    try {
        // Send POST request to oauth2 endpoint with body to receive access token
        const response = await axios.post(authURL, data);

        // Access token should be saved to include in SF REST requests (See Postman collection)
        const accessToken = response.data.access_token;
        const scope = response.data.scope;
        const instanceUrl = response.data.instance_url;
        console.log(
            `
            Access Token: ${accessToken}
            Scope: ${scope}
            Instance URL: ${instanceUrl}
            `
        );
        return response;
    } catch (err) {
        console.error(err)
    }
}
authResponse()