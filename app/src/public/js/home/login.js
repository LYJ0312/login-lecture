"use strict";

const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        password: password.value,
    };

    // 데이터 전달, 로그인 경로로
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Tpe":"apolication/json",
        },
        // 제이슨 형태로 해당 오브젝트 데이터를 문자열로 바꿔서 json올 바꾸겠다.
        body: JSON.stringify(req),
    });
}