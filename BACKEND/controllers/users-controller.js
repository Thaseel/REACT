const {v4: uuidv4} = require('uuid');

const HttpError = require('../models/http-error');

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Thaseel Ahmed',
        email: 'test@test.com',
        password: 'testers'
    }
];

const getUsers = (req, res, next) => {
    res.status(200).json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => { 
    const {name, email, password} = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if(hasUser){
        throw new HttpError('Could not create user, email already exists.', 422); // 422 for invalid user input
    }

    const createduser = {
        id : uuidv4(),
        name,
        email,
        password
    };

    DUMMY_USERS.push(createduser);

    res.status(201).json({user : createduser})
};

const login = (req, res, next) => { 
    const {email, password} = req.body;

    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if(!identifiedUser || identifiedUser.password !== password){
        throw new HttpError('Could not identify User, credentials seems to be invalid.', 401)
    }

    res.json({message : 'Loggen In.'})
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;