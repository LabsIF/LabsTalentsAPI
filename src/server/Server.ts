/* eslint-disable linebreak-style */
import express from 'express';

const server = express(); 


server.get('/', (req,res) => {
    return res.send('servidor levantado');});

export {server} ;