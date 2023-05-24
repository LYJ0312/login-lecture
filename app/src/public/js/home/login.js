"use strict";

const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("#button");

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
            "Content-Type":"application/json",
        },
        // 제이슨 형태로 해당 오브젝트 데이터를 문자열로 바꿔서 json올 바꾸겠다.
        body: JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/"; // 로그인 성공시 이동할 경로
        } else{
            alert(res.msg) // 로그인 실패시 ctrl에 있는 실패 메시지 가져옴
        }
    })
    .catch((err) => { // 에러 발생시 콘솔에 찍음
        console.error(new Error("로그인 중 에러 발생"));
    });
}

// enterkey envent
function Enterkey(){
    if(window.event.keyCode == 13){ // 엔터 키 번호가 13번
        // enter key event 내용
        login()
    } 
}

// 로그아웃
// 로그아웃 버튼 클릭 시 호출되는 함수
function logout() {
    fetch('/logout', {
        method: "GET",
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/"; // 로그아웃 성공시 이동할 경로
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그아웃 중 에러 발생"));
    });
}
