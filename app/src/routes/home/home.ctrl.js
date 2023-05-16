"use strict";


const output = {
    home: (req, res)=>{
        res.render('./home/index');
    },
    
    login: (req, res)=>{
        res.render('./home/login');
    },
};

// 임시로 데이터 넣어놓음
const users = {
    id: ["aaa", "bbb", "ccc"],
    password: ["111", "222", "333"],
};

// body보려면 app.js에서 모듈 설치해야 함
// 들어온 데이터가 저장되어 있는것과 일치한지 아닌지 확인
const process = {
    login: (req, res) =>{
        const id = req.body.id,
        password = req.body.password;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    },
};


//  {key:value} 만약 value가 없으면 알아서 넣어줌
// 아래는 key만 넣어줬으므로 자동으로 hello:hello로 넘겨주는거임
module.exports = {
    output,
    process,
};