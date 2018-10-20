/**
 * very simple stateless Express server for logging users in and out, and serving a single static logged-in page.
 * looks for a cookie named 'accessToken' to verify the user is logged in.
 * 
 */
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static('public'));

app.listen(port, () => {
    console.log('listening on ' + port);
});

const LOGIN_PATH = '/login';
const LOGOUT_PATH = '/logout';
const HOME_PATH = '/';
const ACCESS_TOKEN_KEY = 'accessToken';

const verifyToken = (req, res, next) => {
    if(req.cookies[ACCESS_TOKEN_KEY]) {
        try {
            verified = jwt.verify(req.cookies[ACCESS_TOKEN_KEY], process.env.JWT_KEY);
            if(verified) return next();
        }
        catch (e) {
            //
        }
    }
    return res.redirect(LOGIN_PATH); 
}

app.get(LOGIN_PATH, (req, res, next) => {
    // present login page
    // fetch and set token
    res.sendFile('views/login.html', {root: __dirname}); 
});

app.get(LOGOUT_PATH, (req, res, next) => {
    res.clearCookie(ACCESS_TOKEN_KEY);
    return res.redirect(LOGIN_PATH);
})
app.get(HOME_PATH, verifyToken, (req, res, next) => {
    // cool we're in, display the app
    res.sendFile('views/index.html', {root: __dirname});
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal server error');
});

