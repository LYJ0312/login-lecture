"use strict";

const express = require('express');
const router = express.Router();

// home.ctrl.js 받아오기
const ctrl = require("./home.ctrl");

router.get('/', ctrl.home);
router.get('/login', ctrl.login);

// 외부에서 사용할 수 있도록 내보내기.
module.exports = router;