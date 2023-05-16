"use strict";

const UserStorage = require("../../models/UserStorage");


const output = {
    home: (req, res)=>{
        res.render('./home/index');
    },
    
    login: (req, res)=>{
        res.render('./home/login');
    },
};


// body보려면 app.js에서 모듈 설치해야 함
// 들어온 데이터가 저장되어 있는것과 일치한지 아닌지 확인
const process = {
    login: (req, res) =>{
        const id = req.body.id,
        password = req.body.password;
        // const userStorage = new UserStorage();

        // UserStorage에서 static으로 해놔서 접근 가능함.
        console.log(UserStorage.getUsers("id", "password", "name"));

        const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.password[idx] === password){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};


//  {key:value} 만약 value가 없으면 알아서 넣어줌
// 아래는 key만 넣어줬으므로 자동으로 hello:hello로 넘겨주는거임
module.exports = {
    output,
    process,
};