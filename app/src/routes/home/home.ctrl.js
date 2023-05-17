"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res)=>{
        res.render('home/index');
    },
    
    login: (req, res)=>{
        res.render('home/login');
    },
    register: (req, res)=>{
        res.render('home/register');
    },
    weather: (req, res)=>{
        res.render('home/weather');
    },
    how: (req, res)=>{
        res.render('home/how');
    },
    about: (req, res)=>{
        res.render('home/about');
    },

    logout: (req, res) => {
        req.session.destroy(); // 세션 제거
        res.redirect('/'); // 로그인 페이지로 리다이렉트
    },
}



// body보려면 app.js에서 모듈 설치해야 함
// 들어온 데이터가 저장되어 있는것과 일치한지 아닌지 확인
const process = {
    // 함수 앞에서 async 걸어줘야 비동기식으로 바껴서 await 사용 가능
    login: async(req, res) =>{
        const user = new User(req.body);
        // Users.js에서 login 함수를 await걸어서 여기도 걸어줘야 함
        // 데이터 다 읽히고 작동하는 듯
        const response = await user.login();

        if(response.success){
            req.session.enter = 1; // 로그인 성공시 enter 변수 1로 설정
        }
        return res.json(response);
    },

    // Users.js에서 data저장 오래걸려서 await 걸어줬으니까 같이 바꿔주기
    register: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },


    logout: async(req, res) => {
        req.session.enter = 0; // 로그아웃시 enter변수 0으로
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
                res.json({ success: false, msg: "로그아웃 중 에러 발생" });
            } else {
                if (!res.headersSent) {
                    res.redirect('/');
                }
            }
        });
    },

};


//  {key:value} 만약 value가 없으면 알아서 넣어줌
// 아래는 key만 넣어줬으므로 자동으로 hello:hello로 넘겨주는거임
module.exports = {
    output,
    process,
};