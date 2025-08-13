//create one js file named app.js inside folder
// dont create itinside public
//validation though ejs  {npm i express ejs}
//views is not plugin folder (s)


const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser"); //login se validate krne k liye. responsible to manage time stamp. 
// authorization, authentication, availability, validation of user

app.use(bodyParser.urlencoded({ extended: true })); //parse application/x-www-form-urlencoded {url encode- login -3001 and about-3000}
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // entire page redirectns manage by view engine


app.get("/login", (req, res) => {
    res.render('login'); //render login then sendfile, components and elements , https protocol for rendering 
});

app.get("/dashboard", (req, res) => {
    res.render('dashboard');  // after login render to dashboard
});

app.get("/admin", (req, res) => {
    res.render('admin');
});

app.get("/", (req, res) => {
    res.redirect('/login');
});

app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === "test@gmail.com" && password === "admin") {
        res.redirect("/dashboard");
    } else if (username === "admin@example.com" && password === "adminpass") {
        res.redirect("/admin");
    }else{
        res.render('login', {error: "Invalid username or password"});  //or redirect back to login with an error msg
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


//npm i express ejs path body
//npm init -y
//public- express, views-ejs
