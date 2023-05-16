// // 서버의 중심
"use strict"; 
// npm install express --save
// npm install ejs -s
// npm init >> 초기화 하다
// npm i body-parser -s

// 모듈
const express = require('express');
// 바디부분 내용을 보기위해 필요
// const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;
// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
// body내용을 보기위한 
app.use(express.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended:true}));

// router 받아오기
// 현재 폴더 > 라우트 > home > 자바스크립트 

app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드

module.exports = app;

// 위에서 views로 지정해줘서 하위 폴더만 적어주면 됨
app.get('/', (req, res)=>{
    res.render('home/index');
});

app.get('/login', (req, res)=>{
    res.render('home/login');
    // res.sendfile('index.html');
});

// module.exports = app;

// package.json