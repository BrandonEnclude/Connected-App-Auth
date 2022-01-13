# Salesforce JWT Bearer Flow Example
This repository is meant to demonstrate how to obtain an access token using Salesforce's OAuth 2.0 JWT Bearer (Server-to-Server) Flow.

Code examples are written in JavaScript, but without the use of any library not likely available in all languages so that it might be easily implemented in any language. One possible exception is the [jwt-simple] library, used to create the signed JWT.

## Instructions

### Pre-requisites
  - [Nodejs]
  - [NPM]

### .env
Create a file ".env" in the root directory for the environment variables with the following variables
```
ISS={ Consumer Key of SF Connected App }
AUD={ https://test.salesforce.com -or- https://login.salesforce.com}
SUB={ Username of connected app authorized user }
```

### certificate
Put your 'key.pem' certificate in the directory './certificate'

### Get Auth Token
```
npm install
node authtoken.js
```

## Sources and Additional Information
 - [Create Your Connected App Trailhead]
 - [REST API Developer Guide]
 - [OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration]

[Nodejs]: <https://nodejs.org/en/download/>
[NPM]: <https://www.npmjs.com/get-npm>
[jwt-simple]: <https://www.npmjs.com/package/jwt-simple>
[Create Your Connected App Trailhead]: <https://trailhead.salesforce.com/en/content/learn/projects/build-a-connected-app-for-api-integration/create-a-connected-app>
[REST API Developer Guide]: <https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm>
[OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration]: <https://help.salesforce.com/articleView?id=remoteaccess_oauth_jwt_flow.htm&type=5>
