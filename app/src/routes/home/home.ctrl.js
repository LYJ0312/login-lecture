"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res)=>{
        res.render('./home/index');
    },
    
    login: (req, res)=>{
        res.render('./home/login');
    },
    register: (req, res)=>{
        res.render('./home/register');
    },
};


// body보려면 app.js에서 모듈 설치해야 함
// 들어온 데이터가 저장되어 있는것과 일치한지 아닌지 확인
const process = {
    login: (req, res) =>{
        const user = new User(req.body);
        const response = user.login();

        return res.json(response);
    },

    register: (req, res) =>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};


//  {key:value} 만약 value가 없으면 알아서 넣어줌
// 아래는 key만 넣어줬으므로 자동으로 hello:hello로 넘겨주는거임
module.exports = {
    output,
    process,
};