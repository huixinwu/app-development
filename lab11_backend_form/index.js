// import libraries, dependencies
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// create an app using express
const app = express()

// use the body-parse middleware to handle data sent in the body of HTTP
app.use(bodyParser.json())
// use express to server static files. Any files in the 'public' folder will be accesible from the root URL of the web server.
app.use(express.static('public'))
// use express body-parser for parsing URL-encoded request bodies (typically from HTML forms)
app.use(bodyParser.urlencoded({ extended: true }))

//connect to the database using mongoose
// {useNewUrlParser: true, useUnifiedTopology: true} option to make sure that uses the new Parser and new Server and Monitoring Enginee.
mongoose.connect('mongodb://localhost/userlogin', { useNewUrlParser: true, useUnifiedTopology: true })

// check connection
mongoose.connection
    .once('open', function () { console.log('Connected to userlogin database') })
    .on('error', function (e) { console.log('Error connecting ... ', e) })


// posting the form
app.post('/login', async (request, response)=> {
    try {
        //get the data from index.html form
        const username = request.body.username
        const password = parseInt(request.body.password) // password is casted as an integer

        // testing 
        console.log(`Entered username = ${username} and entered password = ${password}`)

        // get data from database, MongoDB, 
        const user= await mongoose.connection.db.collection('users').findOne({ username: username })
        
        //check if username matches
        if (!user){
            return response.send('Information does not match');
        }
        //check if password matches
        if (user.password === password){
            return response.send('Logged in successfully');
        } else{
            return response.send('Password does not match');
        }

    } catch (error) {
        response.status(500).send('Internal server error'); // 500 status error means Internal Server Error server
    }
})

// create loading, root, page
app.get('/', function (request, response) {
    response.redirect('index.html')
}).listen(3000)