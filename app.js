/*
    Part 1: Project Setup ----------

    1. Create a project folder called web-notes
    2. Make sure the entry point file app.js is in the root of the project folder.
    3. In the terminal, make sure you are in your project folder.
    4. In the terminal, type: npm init
    5. Answer the prompts, making sure your app.js file is the entry point.
    6. In the terminal, type: npm install express ejs
    7. In the terminal, type: npm install nodemon --save-dev
    8. Create a public folder for your static assets (css, js, image) in your project folder.
    9. Create a css folder in the public folder.
    10. Create a views folder in the project folder. This is where we store our ejs templates.
*/


/* Part 2: Express Setup ---------- */
// Require express
const express = require ('express'); 

const bodyParser = require('body-parser');

// Create an Express application
const app = express(); 

// Create a port variable and assign it to 3000
const PORT = 3000; 


// Require the path module
const path = require('path'); 


// Tell express to use your public folder. Later, notice in our ejs file all we need is "css/styles.css"
app.use(express.static(path.join(__dirname, 'public')));



// Set the view engine to 'ejs' so that we don't have to specify the .ejs extension in our routes
app.set('view engine', 'ejs'); 

/* Part 4: EJS file ---------- */
// Before we create any routes, put the notes.ejs file in the views folder.
// Take 3-5 minutes to look over the code and digest it.

// Starter data
const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like tomatoes'
];

/* Part 5: Root route ---------- */
// Create a get route for the root '/' to render to the notes page, passing through the myNotes array.
// Remember that express automatically looks in the views folder.

app.get('/',(req, res) => {
    res.render('notes', {
        myNotes: myNotes
    });
});


// Test your route by going to localhost:port
// You should see the starter data myNotes displayed on the page! Look at the ejs file again and piece together what is happening.


/* Part 6: CSS file ---------- */
// Put the given CSS file in the css folder if you haven't already.
// Add the stylesheet link to the ejs template


/* Part 7: HTML form ---------- */
// In notes.ejs: Right before the closing </body> add a <form>
// Set the method attribute to "POST", because that's the HTTP request we want.
// The action attribute tells the form which path to post to, in this case we want to post to the notes
// page so we can display all of the written notes: <form method="post" action="/notes">
// Inside of the form create a div with the class "form-group". This is our friend Bootstrap.
// Inside of the form-group, create a text input with the name of "note", and a label for it.
// Outside of the form-group, create a "submit" input with the value of "Save". Set the class to "btn btn-primary".
// Relaunch your app, and take a look at the network tab in the browser. If you try to submit the form, you will get an 
// error because we haven't made anything in our web notes app that responds to an http post request at the path /notes yet. 


/* Part 8: Body Parser ---------- */
// Require the body-parser module and tell the app to use it

app.use(bodyParser.urlencoded({extended : true}));

// This transforms the “body,” or contents, of the request (which is a string) into an object which we can then reference with req.body in our code.




/* Part 9: Post Route ---------- */
// Create a post route for the notes page: 
app.post('/', (req, res) => {
    console.log(req.body);
    myNotes.push(req.body.note); // req.body['myNotes']
    // Take the user back to '/' GET route
    res.redirect('/');
    // res.send('i am POST method'); 
});



// In the callback function: Grab the data using req.body and push it to our myNotes array, then redirect to '/'
// Remember 




/* Part 3: Listen ---------- */
// Listen for a connection on the port variable and console.log() a confirmation message
// app.listen(PORT, () => {
//     console.log(`Server listening at ${PORT}`);
// });
app.listen(PORT, () => {
    console.log('Server Started');
});

// Start your app through the terminal and make sure your message appears: node app.js
// If you are using nodemon, it would be: nodemon app.js


/* BONUS ---------- */
// In the ejs file, add some logic that will add the class .highlight to the div if the note contains 'important' or '*'
// Add a limit to the number of characters that the input will take.
// Add a restriction to the characters that the input will take.