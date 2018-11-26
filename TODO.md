Adventures in Node and Nest

Our story begins after you’ve created your Angular frontend: Up until this point you’ve been using mock data and now you’re wondering “How in the world do I create the backend to power this application?” and “How can I leverage my existing Angular and TypeScript skills to do it”.  In this talk we will go through setting up your perfect companion Backend. A Node server with Nest then extending the functionality to be ready for production:

- [] Creating some new REST endpoints JSON, 
    * Get
    * Post
    * Delete
    * Patch
- [] file transfer 
- [] Passthrough 
- [x] Adding a healthcheck
- [] Adding app version to healthcheck
- [x] Adding Compression to your output
- [] Adding Authentication to the endpoints as a whole
- [] Authorization adding role based permissions
- [] Setting up field level permissions
- [] Adding Websockets for streaming logs from frontend
- [] Adding Logging & Monitoring
- [] Adding a GraphQL endpoint for some page level requests from your frontend
- [] Adding Redis & in memory caching to speed up your server ( redis primary, in memory fallback)
- [] Containerizing your server
- [] Using injection and static JSON files to make testing downstream applications easier
- [] Battle testing for scalability
- [] Deploying to GCP


-----

Questions for Kamil
- [] Why does the sockets on the client throw 404's `http://localhost:3000/socket.io/?EIO=3&transport=polling&t=MTEQhYW `
- [] How to best implement auth0
- [] How to best implement cache busting on a write
- [] How to best fall back to in memory if redis connect fails