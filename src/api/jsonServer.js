import axios from "axios";

export default axios.create({
  baseURL: "http://81b526e11476.ngrok.io", //update when ngrok session has expired or restarted!
});
