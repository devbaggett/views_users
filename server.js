// express is just a node module, requiring express returns an application creator that we store in var express, which allows us to create an express app
var express = require("express");
// allows us to run methods like GET and POST
var app = express();
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// handle our base GET route to index url. This is a callback function that runs once route is hit. Both are objects. We can console log if need be.
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('views.ejs', {users: users_array});
})
app.get('/', function(request, response){
	// send to the response, the string "hello express"
	// we handled the route, but we haven't told application to listen anywhere yet
	response.send("Hello Express")
})

// allows us to now listen
app.listen(8000, function(){
	console.log("listening on 8000")

})