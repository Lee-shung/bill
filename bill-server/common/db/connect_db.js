/**
 * @name: connect_db.js
 * @author: LeeYShunnn
 * @date: 2020/4/8 23:40
 * @description：数据库连接文件
 */
//引入mysql
const mysql = require('mysql');
//配置连接类
class conn {
    constructor(){
        //数据库驱动：//数据库IP地址：数据库端口/数据库
        this.host = 'localhost';
        this.user = 'root';
        this.password = 'root';
        this.port = '3306';
        this.database = 'bill';
        this.timezone = '08:00';
    }
    getConnection(){
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            port: this.port,
            database: this.database,
            timezone: this.timezone //设置时区
        });
    }
}
module.exports=conn;