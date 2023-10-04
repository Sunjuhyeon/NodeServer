var express = require('express');
var router = express.Router();
var tableselect = require('./contactable')  //모듈 뺀 나머지는 무조건 상대경로로

router.use(express.urlencoded({extended : true}))

router.get('/', (req, res, next) => {
    var bo_table = req.query.tablenm;

    req.body.bo_table = bo_table;

    router.use('/', tableselect);
    next('route')
})


// 리액트에서 axios 요청 주소 /data 가 된다는 뜻임.

module.exports = router