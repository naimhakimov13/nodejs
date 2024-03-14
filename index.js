const {google} = require('googleapis');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SCOPES = ['https://www.googleapis.com/auth/firebase.messaging'];

app.use(cors())

function getToken() {
    return new Promise(function (resolve, reject) {
        const key = require('./service-account.json');
        const jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens);
        });
    });
}


app.get('/', async (req, res) => {
    const tokens = await getToken();
    res.json(tokens);
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))

