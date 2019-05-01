// 生成连接池对象
const mysql=require('mysql')

let pool=mysql.createPool({
	host:'120.79.32.17',
	port:3306,
	user:'root',
	password:'root',
	database:'flower'
})

module.exports=pool;