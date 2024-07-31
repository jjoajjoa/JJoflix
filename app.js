const http = require('http');
const express = require('express');
// const path = require('path');

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
// app.use('/', express.static(path.join(__dirname, './public')));

const router = express.Router();
app.use('/', router);


const port = 7001;
http.createServer(app).listen(port, () => {
    console.log(`웹서버 실행됨: ${port}`);
})
console.log(`웹서버 실행 요청함`);
