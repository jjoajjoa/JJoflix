const http = require('http');
const express = require("express");
const path = require('path');

// const mariadb = require('mariadb');
// const pool = mariadb.createPool({
//     host: 'localhost',
//     port: 4406,
//     user: 'root',
//     password: 'admin'
// })


BigInt.prototype.toJSON = () => {
    return this.toString();
}

const app = express();
const server = http.createServer(app);

// 정적 파일 제공 설정
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname)); // index.html 및 다른 정적 파일 제공

// 루트 경로에서 index.html 파일 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 7001;
server.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});
console.log(`웹서버 실행 요청함`);