import express from "express";
import data from "./data/movie2.js"
const router = new express.Router();

router.get('/', function (req, res) {
  res.send('Hello World')
});

router.post('/movie', function (req, res) {
    res.send({data})
});



export default router;