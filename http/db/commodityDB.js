let pool=require('./pool')

let findAllCommodity=(handle)=>{
	// 查找所有商品信息
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('select * from commodity_msg',[],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let findCommodityById=(id,handle)=>{
	// 根据id查找对应商品信息
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('select * from commodity_msg where id=?',[id],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let findCommodityByType=(type,handle)=>{
	// 根据type=2,3,4,5,6查找对应商品信息
	pool.getConnection((err,connection)=>{
		if(!err){
			connection.query('select * from commodity_msg where id like "'+type+'%"',[type],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let findCommodityByKey=(key,handle)=>{
	// 根据key关键字查找对应商品信息
	pool.getConnection((err,connection)=>{
		if(!err){
			// console.log(key)
			connection.query('select * from commodity_msg where name like "%'+key+'%" or material like "%'+key+'%" ',[key],(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}

let findCommodityByIds=(ids,handle)=>{
	// 支付页根据[ids]查找商品信息
	pool.getConnection((err,connection)=>{
		if(!err){
			// console.log(ids)//[ '300', '308', '304' ]
			let aa='('+ids+')'
			connection.query("select * from commodity_msg where id in"+aa+"",ids,(err,results,fields)=>{
				if(!err){
					handle(results)
				}
			})
			connection.release();
		}
	})
}



module.exports={
	findAllCommodity,
	findCommodityById,
	findCommodityByType,
	findCommodityByKey,
	findCommodityByIds
}