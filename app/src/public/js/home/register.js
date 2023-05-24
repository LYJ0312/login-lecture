"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
password = document.querySelector("#password"),
confirmPassword = document.querySelector("#confirm-password"),
registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click", register);

function register(){

    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(password.value !== confirmPassword.value) return alert("비밀번호가 맞지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };

    // 데이터 전달, 회원가입 경로로
    fetch('/register', {
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
            location.href = "/login"; // 회원가입 성공시 이동할 경로
        } else{
            alert(res.msg) // 회원가입 실패시 ctrl에 있는 실패 메시지 가져옴
        }
    })
    .catch((err) => { // 에러 발생시 콘솔에 찍음
        console.error(new Error("회원가입 중 에러 발생"));
    });
}

// enterkey event
function EnterkeyRe(){
    if(window.event.keyCode == 13){ // 엔터 키 번호가 13번
        // enter key event 내용
        register()
    } 
}