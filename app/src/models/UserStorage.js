"use strict";

// users.json에서 데이터 받아와야 함
const fs = require("fs");

class UserStorage{
    // 은닉화 한 애들은 클래스 상단에 넣어줘야 깔끔
    // 위 getIserInfo 함수 안에 들어가도 되는 내용들이지만
    // 가독성을 위해서 #getUserInfo를 만들어서 안에 넣어줌
    static #getUserInfo(data, id){            
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); // 위에 저장한 users
        const userKeys = Object.keys(users); // 그 users 받아온거의 key값만
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users; // 아래  getUsers(true)이면 모든 데이터 보내게

        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){ // 키 값이 있으면
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    // 데이터 은닉화 했으니까, 불러오기 위해 get설정
    // 변수 몇 개를 요구할지 모르니 ...변수명 으로 설정
    static getUsers(isAll, ...fields){
        return new Promise((resolve, reject) =>{
            fs.readFile("./src/database/users.json", (err, data) =>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(this.#getUsers(data, isAll, fields));
            });
        });

                // return fs
        // .readFile("./src/database/users.json")
        // .then((data) =>{ // 위 로직 성공시 실행 
        //     return this.#getUsers(data, isAll, fields); //은닉화 된 메서드 호출
        // })
        // .catch(console.error); // 위 로직 실패시 실행
    }


    static getUserInfo(id){

        return new Promise((resolve, reject) =>{
            fs.readFile("./src/database/users.json", (err, data) =>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(this.#getUserInfo(data, id));
            });
        });

        // return fs
        // .readFile("./src/database/users.json")
        // .then((data) =>{ // 위 로직 성공시 실행 
        //     return this.#getUserInfo(data, id); //은닉화 된 메서드 호출
        // })
        // .catch(console.error); // 위 로직 실패시 실행
    }

    static async save(userInfo){
        const users = await this.getUsers(true); // 모든 파라미터 가져오겠다.
        // 존재하는 아이디이면
        if(users.id.includes(userInfo.id)){
            // error나면 던짐. Users.js에서 error나면 알아서 출력
            // 문자열로 던저줌
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);

        // 데이터 추가, 오류난거 아니면 반환을 안함
        fs.writeFile("./src/database/users.json", JSON.stringify(users), (err) =>{
            if(err){
                throw err;
            }
        });
        // 따로 반환 내용
        return {success: true};
    }
}
// 데이터 추가시 users.json파일이 한 줄로 바뀜
// 세로줄로 바꾸기 위해 JSON Pretty Printer 설치,
// 윈도우 ctrl + shift + p / mac cmd +  shift + p
// JSON Pretty Printer 선택하면 줄이 바뀜

module.exports = UserStorage;