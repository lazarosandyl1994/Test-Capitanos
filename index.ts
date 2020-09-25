'use strict';
import * as express from 'express';

const mongoose = require("mongoose");
const app = express();
const _ = require("lodash");

app.set('port', process.env.PORT || 3000);
let http = require('http').Server(app);

//integrating socketio
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//services
const Service = require("./services/services");

//setup event listener
io.on('connection', (socket) => {

    socket.on('GetFriends', async (msg) => {
        let hunters = {};
        if (typeof msg == 'object' && _.has(msg, "_id") && _.has(msg, "friends")) {
            hunters = await Service.getHunters(msg["_id"], msg["friends"]);
        }
        return hunters;
    });

    socket.on('GetRandom', async (msg) => {
        let hunters = {};
        if (typeof msg == 'object' && _.has(msg, "_id")) {
            hunters = await Service.getRandomHunters(msg["_id"]);
        }
        return hunters;
    });

});

const server = http.listen(3000, () => {
    console.log('connect');
});
