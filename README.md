# bloggie-post

Bloggie Post is an app built in React Native which allows users to perform basic CRUD operations on blog posts. The app consumes a fake rest API using json-server and ngrok as a way to quickly stand up a back-end server.

### usage

- To run a json server instance:
  `npm run db`

- To run an ngrok instance:
  `npm run tunnel`

- Copy the ngrok baseURL to src/api/jsonServer.js:

```javascript
export default axios.create({
  baseURL: "http://<replace_with_new_ngrok_id>.ngrok.io", //update when ngrok session has expired or restarted!
});
```

- To run the app using expo:
  `npm run start`
