Adventures in Node and Nest

Our story begins after you’ve created your Angular frontend: Up until this point you’ve been using mock data and now you’re wondering “How in the world do I create the backend to power this application?” and “How can I leverage my existing Angular and TypeScript skills to do it”.  In this talk we will go through setting up your perfect companion Backend. A Node server with Nest then extending the functionality to be ready for production:

- [x] Creating some new REST endpoints JSON, 
    - [*] Get All
    - [*] Get
    - [*] Post
    - [*] Delete
    - [*] Patch
- [x] file upload 
- [x] file download
- [x] Passthrough Image
- [x] Passthrough JSON
- [x] Adding a healthcheck
- [x] Adding app version to healthcheck
- [x] Adding Compression to your output
- [x] Validate the shape of the request object
- [x] Persisting data in a database
- [] Adding Authentication to the endpoints as a whole
- [] Authorization adding role based permissions
- [] Setting up field level permissions
- [] Adding Websockets for streaming logs from frontend
- [x] Adding Logging (using the default logger)
- [] Adding Monitoring `new relic added but not seeing stats`
- [] Adding a GraphQL endpoint for some page level requests from your frontend
- [] Adding Redis & in memory caching to speed up your server ( redis primary, in memory fallback) `how to prove redis / memory is working?`
- [] Containerizing your server `this still needs work but have the docker files`
- [] Using injection and static JSON files to make testing downstream applications easier
- [x] Battle testing for scalability
- [] Deploying to GCP


-----

Questions for Kamil
- [] Why does the sockets on the client throw 404's `http://localhost:3000/socket.io/?EIO=3&transport=polling&t=MTEQhYW `
- [] How to best implement auth0
- [] How to best implement cache busting on a write
- [] How to best fall back to in memory if redis connect fails