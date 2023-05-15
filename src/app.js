// // 서버의 중심
"use strict"; 
// npm install express --save
// npm install ejs -s
// npm init >> 초기화 하다

// 모듈
const express = require('express');
const app = express();

const PORT = 3000;
// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

// router 받아오기
// 현재 폴더 > 라우트 > home > 자바스크립트 

app.use("/", home); // 미들 웨어를 등록해주는 메소드


// 위에서 views로 지정해줘서 하위 폴더만 적어주면 됨
app.get('/', (req, res)=>{
    res.render('home/index');
});

app.get('/login', (req, res)=>{
    res.render('home/login');
    // res.sendfile('index.html');
});

module.exports = app;

// package.json