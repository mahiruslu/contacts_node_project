require('dotenv').config();
const express = require('express')
const router = express.Router();

router.route("/").get()