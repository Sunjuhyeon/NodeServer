const express = require('express');
const path = require('path');
const app = express();
const api = require('./api/api')
const PORT = process.env.PORT || 8007;

// 리액트 경로 잡아주기.
// 실제로 존재하는 public/build/라는 폴더를 주소창에서는 안보이고
// 루트디렉트리로 세팅하는 것임.
// 닷홈의 /html폴더가 안나오는 원리.
app.use(express.static(path.join(__dirname, 'public/build/')))

app.use('/data', api)

// 도메인만 쳐도 리액트 첫페이지 등장하게 하는 명령
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/build/index.html'))
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/nopage.html'))
}

)

app.listen(PORT, () => {
    console.log('sunjuhyeon.cafe24app.com 구동완료!')
})