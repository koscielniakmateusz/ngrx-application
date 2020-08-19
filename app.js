const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({

}));

const port = 3000;
const users = [];

app.post('/register', (req, res)  => {
    if (req.body.email && req.body.password) {
        const sameEmailExist = !!users.find(user => user.email === req.body.email);
        if (!sameEmailExist) {
            const registeredUser = {
                id: users.length + 1,
                email: req.body.email,
                password: req.body.password
            }
            users.push(registeredUser);
            res.status(201).json(registeredUser);
        } else {
            res.status(400).json({ message: 'This e-mail already exist.' });
        }
    } else {
        res.status(400).json({ message: 'No e-mail or password provided.' });
    }
});

app.post('/login', (req, res)  => {
    const credentials = { email: req.body.email, password: req.body.password };
    const loggedUser = users.find(user => user.email === credentials.email && user.password === credentials.password);
    if (!!loggedUser) {
        const mockToken = 'Bearer ' + loggedUser.id;
        res.status(200).json({ "Token": mockToken });
    } else {
        res.status(400).json({ message: 'Invalid credentials.' });
    }
});

app.get('/user', (req, res)  => {
    try {
        const tokenHeader = req.headers['authorization'];
        const loggedUserId = tokenHeader.slice(7);
        const loggedUser = users.find(user => user.id == loggedUserId);
        res.status(200).json({ id: loggedUser.id, email: loggedUser.email });
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized.' });
    }
});

app.listen(port, () => console.log(`Mock server started on localhost:${port} !`));
