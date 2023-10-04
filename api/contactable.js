var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbinfo = require('../data/datacontact.json');

router.use(express.json());

var conn = mysql.createPool(dbinfo);

    router.get('/', (req, res) => {
        var tablenm = req.body.bo_table;

        conn.getConnection((error, connection) => {
            if(error) throw console.log("이 에러가 보인다면 db정보가 틀림 :" + err);

            connection.query(`select * from ${tablenm}`, (err,result) => {
                if(err) throw `지금 에러는 sql문 오류 ${err} ${result}`;
                res.send(result);
            })
            connection.release();
        })
    })
    module.exports = router