"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    // 로그인 함수에서 await하기위해 비동기 형식으로 바꿈 > async 붙여줌
    async login(){
        const client = this.body
        // Promise 반환하는 애한테만 await 사용, file system에서 사용할 때 가독성이 좋음
        const {id, password} = await UserStorage.getUserInfo(client.id);
        
        if(id){
            if(id === client.id && password === client.password){
                return { success: true};
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }

    // 데이터 저장해서 storage에 보내줌
    register(){
        const client = this.body
        const response = UserStorage.save(client)
        return response;
    }
}

module.exports = User;