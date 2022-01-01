const admin = require('firebase-admin');
const serviceAccount = require("../../firebase/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const login = (req, res) => {

    const body = req.body
    const { email, password } = body;

    admin
        .auth()
        .createUser({
            email,
            emailVerified: false,
            password,
            displayName: 'name',
            disabled: false,
        })
        .then((userRecord) => {
            console.log('Successfully created new user:', userRecord.uid);
            res.send(200, `Successfully created new user: ${userRecord.uid}`)

        })
        .catch((error) => {
            console.log('Error creating new user:', error);
            res.send(409, `Error creating new user:${error}`)
        });

}

module.exports = login