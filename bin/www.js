"use strict";
// bin은 바이너리로, 실행파일들을 의미

// 서버를 띄워주는 역할 > 실행시 node ./bin/www.js
// 실행 키워드 package.json에서 npm start로 변경함
// 상위폴더로 가서 app을 가져옴
const app = require("../app");

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('서버 가동');
});