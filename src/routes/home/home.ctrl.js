"use strict";

const home = (req, res)=>{
    res.render('home/index');
};

const login = (req, res)=>{
    res.render('home/login');
};


//  {key:value} 만약 value가 없으면 알아서 넣어줌
// 아래는 key만 넣어줬으므로 자동으로 hello:hello로 넘겨주는거임
module.exports = {
    home,
    login,
};