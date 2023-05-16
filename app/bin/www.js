"use strict";
// bin은 바이너리로, 실행파일들을 의미

// 서버를 띄워주는 역할 > 실행시 node ./bin/www.js
// 실행 키워드 package.json에서 npm start로 변경함
// 상위폴더로 가서 app을 가져옴

// nodemon ./bin/www.js 를 사용해서 실행하면, 서버를 껐다키지 않아도 저장하면 자동반영됨
// package.json에서 node start: ./bin/www.js 인걸 nodemon으로 변경하여 nodemon start만 해도 됨
const app = require("../app");

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`서버 가동 http://localhost:${PORT}`);
});