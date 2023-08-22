const express = require("express");
const app = express();

//app.get(path, code) //whenever you recieve this path, execute this code (the code is a function - traditional or arrow).

//Make everything inside of public/ available
app.use(express.static('public'));

//home page:
app.get("/", (request, response, next) => {
    console.log("we received a request to homepage")
    response.sendFile(__dirname + '/views/homepage.html');
})

//contact page: 
app.get("/contact", (request, response, next) => {
    response.sendFile(__dirname + '/views/contact.html');
})



app.listen(3000, () => console.log('My first app listening on port 3000')) //this log is back-end code, so it won't appear in the console of the browser.

