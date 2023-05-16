"use strict";

const express = require('express');
const router = express.Router();

// home.ctrl.js 받아오기
const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

// 서버에서 로그인 데이터 받음
router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);

// 외부에서 사용할 수 있도록 내보내기.
module.exports = router;