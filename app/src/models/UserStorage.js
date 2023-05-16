"use strict";

class UserStorage{
    // 임시로 데이터 넣어놓음
    // 정적변수(static)로 만들어 다른 클래스에서 접근 가능하게
    // 외부에서 못받게 #을 붙여줌. 데이터 은닉화

    // 검증용도로 미리 저장해놓은 정보, 아래 save로 따로 추가하는 정보 모을 예정
    static #users = {
        id: ["김이박", "이찬수", "최형실"],
        password: ["1111", "2222", "3333"],
        name: ["김김김", "이이이", "박박박"],
    };

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
        const users = this.#users;
        const idx = users.id.indexOf(id); // 위에 저장한 users
        const userKeys = Object.keys(users); // 그 users 받아온거의 key값만
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success: true};
    }
}


module.exports = UserStorage;