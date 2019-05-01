let pool=require('./pool')

let findOrderByUsername=(username,handle)=>{
	// 查订单
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('select * from `order` where username=?',[username],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let deleteOrder=(obj,handle)=>{
	// 删订单
	pool.getConnection((err,connection)=>{
		if(!err){
			console.log('obj',obj)
			connection.query('delete from `order` where username=? and id=?',[obj.username,obj.id],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let insertOrder=(obj,handle)=>{
	// 新增订单
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('insert into `order`(username,nickname,telephone,address,id,number) VALUES(?,?,?,?,?,?)',[obj.username,obj.nickname,obj.telephone,obj.address,obj.id,obj.number],(err,results,fields)=>{
				if(!err){
					handle(err,results)
				}
			})
			connection.release();
		}
	})
}

module.exports={
	findOrderByUsername,
	deleteOrder,
	insertOrder
}