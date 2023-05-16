"use strict";

// users.json에서 데이터 받아와야 함
const fs = require("fs");

class UserStorage{
    // 은닉화 한 애들은 클래스 상단에 넣어줘야 깔끔
    // 위 getIserInfo 함수 안에 들어가도 되는 내용들이지만
    // 가독성을 위해서 #getUserInfo를 만들어서 안에 넣어줌
    static #getUserInfo(){            
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); // 위에 저장한 users
        const userKeys = Object.keys(users); // 그 users 받아온거의 key값만
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    // 데이터 은닉화 했으니까, 불러오기 위해 get설정
    // 변수 몇 개를 요구할지 모르니 ...변수명 으로 설정
    static getUsers(...fields){
        const users =this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){ // 키 값이 있으면
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id){
        return fs.readFile("./src/database/users.json")
        .then((data) =>{ // 위 로직 성공시 실행 
            return this.#getUserInfo(data, id); //은닉화 된 메서드 호출
        })
        .catch(console.error); // 위 로직 실패시 실행
    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success: true};
    }
}


module.exports = UserStorage;