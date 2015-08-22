var router = require("./router.js");

//Problem: we need a simple way to look at a user's badge count and JS point from a web browser
//Solution: use Node.js to perform the profile look ups and server our template via HTTP

// Create a web server

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');


// Function that handles the reading of files and merge in value
  //read from file and get a string
    //merge values in to string