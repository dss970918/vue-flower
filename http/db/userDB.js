let pool=require('./pool')

let findUser=(username,handle)=>{
	// 查找user
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('select * from user where username=?',[username],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

/*let deleteUser=(username,handle)=>{
	// 删除user
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('delete from user where username=?',[username],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}*/

let updateUser=(obj,handle)=>{
	// 更新user
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('update user set password=?,nickname=?,telephone=?,address=? where username=?',[obj.password,obj.nickname,obj.telephone,obj.address,obj.username],(err,results,fields)=>{
				if(!err){
					handle(err,results)
				}
			})
			connection.release();
		}
	})
}

let insertUser=(obj,handle)=>{
	// 添加user
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('insert into user(username,password) value(?,?)',[obj.username,obj.password],(err,results,fields)=>{
				if(!err){
					handle(err,results)
				}
			})
			connection.release();
		}
	})
}

module.exports={
	findUser,
	// deleteUser,
	updateUser,
	insertUser
}