let pool=require('./pool')

let findCartByUsername=(username,handle)=>{
	// 查购物车
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('select * from cart where username=?',[username],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let judgeCart=(obj,handle)=>{
	// 判断购物车内是否有该物品存在
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('select count(*) count from cart where username=? and id=?',[obj.username,obj.id],(err,results,fields)=>{
				if(!err){
					// console.log(results)
					handle(err,results)
				}
			})
			connection.release();
		}
	})
}

let insertCart=(obj,handle)=>{
	// (新)加入购物车
	pool.getConnection((err,connection)=>{
		if(!err){
			// console.log(obj)
			connection.query('insert into cart values(?,?,?)',[obj.username,obj.id,obj.number],(err,results,fields)=>{
				if(!err){
					handle(err,results)
				}
			})
			connection.release();
		}
	})
}

let updateCart=(obj,handle)=>{
	// 添加购物车
	pool.getConnection((err,connection)=>{
		if(!err){
			// console.log(obj)
			connection.query('update cart set number=number+? where username=? and id=?',[obj.number,obj.username,obj.id],(err,results,fields)=>{
				if(!err){
					handle(err,results)
				}
			})
			connection.release();
		}
	})
}

let addCartNumber=(obj,handle)=>{
	// 购物车number+1
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('update cart set number=number+1 where username=? and id=?',[obj.username,obj.id],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let reduceCartNumber=(obj,handle)=>{
	// 购物车number-1
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('update cart set number=number-1 where username=? and id=?',[obj.username,obj.id],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let deleteCart=(obj,handle)=>{
	// 删除购物车
	pool.getConnection((err,connection)=>{
		if(!err){
			// console.log(obj)
			connection.query('delete from cart where username=? and id=?',[obj.username,obj.id],(err,results,fields)=>{
				if(!err){
					handle(err,results)
				}
			})
			connection.release();
		}
	})
}


module.exports={
	findCartByUsername,
	judgeCart,
	insertCart,
	updateCart,
	addCartNumber,
	reduceCartNumber,
	deleteCart
}