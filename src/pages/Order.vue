<template>
	<div class="order">
		<div class="wrapper order-wrapper">
			<el-table
		    ref="multipleTable"
		    :data="msg"
		    tooltip-effect="dark"
		    style="width: 100%">
		    <el-table-column
		      label="商品信息"
		      width="399">
		      <template slot-scope='{row}'>
		      	<img :src="row.commodity.src">
		      	<span>{{row.commodity.name}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="单价"
		      width="200"
		      align='center'>
		      <template slot-scope='{row}'>
		      	<span>￥{{row.commodity.price2}}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="数量"
		      width="200"
		      align='center'>
		      <template slot-scope='{row}'>
		      	{{row.commodity.number}}
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="总计"
		      width="200"
		      align='center'>
		      <template slot-scope='{row}'>
		      	<div>￥{{row.commodity.number*row.commodity.price2}}</div>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="操作"
		      width='200'>
		      <template slot-scope='{row}'>
		      	<span @click='deletecommodity(row)'>删除</span><!-- 此处删除应传row.id -->
		      	<span @click='show(row)'>查看详情</span>
		      	

		      	<el-dialog title="订单详情" :visible.sync="row.visible">
					  	<div class="order-receiver">
					  		<span>收件人：</span>
					  		<span>{{row.receive.receiver}}</span>
					  	</div>
					  	<div class="order-telephone">
					  		<span>联系电话：</span>
					  		<span>{{row.receive.telephone}}</span>
					  	</div>
					  	<div class="order-address">
					  		<span>收货地址：</span>
					  		<span>{{row.receive.address}}</span>
					  	</div>
					  	<div class="order-commodity">
					  		<div class="order-commoditytitle">
									<div class="title-msg">商品信息</div>
									<div class="title-price">单价</div>
									<div class="title-number">数量</div>
									<div class="title-total">总计</div>
					  		</div>
					  		<div class="order-commoditymsg">
							  	<div class="order-img"><img :src="row.commodity.src" alt=""></div>
							  	<div class="order-msg">{{row.commodity.name}}</div>
							  	<div class="order-price">￥{{row.commodity.price2}}</div>
							  	<div class="order-number">{{row.commodity.number}}</div>
							  	<div class="order-total">￥{{row.commodity.number*row.commodity.price2}}</div>
							  </div>
					  	</div>
						  
						</el-dialog>
		      </template>
		    </el-table-column>
		  </el-table>
		</div>

		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				visible:false,
				msg:[{
					visible:false,
					receive:{
						receiver:'刘浩',
						telephone:'18454236834',
						address:'江苏省苏州市昆山市巴城镇学院路999号美居客电商产业大楼'
					},
					commodity:{
						id:'300',
						name:'一心一意',
						price2:'138',
						src:require('@/assets/love-1/9010011.jpg'),
						number:'2'
					}
				},{
					visible:false,
					receive:{
						receiver:'南宫',
						telephone:'112356',
						address:'浙江省杭州市滨江区'
					},
					commodity:{
						id:'307',
						name:'致青春',
						price2:'229',
						src:require('@/assets/love-8.jpg'),
						number:'1'
					}
				}]
			}
		},
		methods:{
			deletecommodity(row){
				this.$confirm('确认删除商品？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	//这只是暂时的
        	
      		this.commodity.splice(this.commodity.indexOf(row),1);
      		// 此处应为axios.get
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
			},
			show(row){
				row.visible=true;
			}
		}
	}
</script>

<style>
	.order-wrapper .el-table {
		border: 1px solid #e8e8e8;
	}
	.order-wrapper table img {
		width: 100px;
		height: 100px;
	}
	.order-wrapper .el-table__header-wrapper thead.has-gutter > tr > * {
		background-color: #f5f5f5;
		font-size: 16px;
		font-weight: normal;
	}
	.order-wrapper .el-table__body-wrapper tbody > * > td:last-child > div >span {
		cursor: pointer;
	}
	.order-wrapper .el-table__body-wrapper tbody > * > td:last-child > div >span:first-child {
		color: red;
	}
	.el-table__body-wrapper tbody > * > td:last-child > div .el-dialog__body > .order-receiver > span:first-child {
		margin-right: 15px;
	}
	.el-dialog__body > * {
		margin-bottom: 10px;
	}
	.el-dialog__body > .order-commodity {
		margin: 35px 0 0;
	} 
	.order-commodity .order-commoditytitle > * {
		float: left;
		width: 150px;
		text-align: center;
	}
	.order-commoditytitle > .title-msg {
		width: 269px;
		text-align: left;
	}
	.order-commodity > .order-commoditymsg > * {
		float: left;
		width: 150px;
		text-align: center;
		height: 100px;
		line-height: 100px;
	}
	.order-commoditymsg .order-img {
		width: 100px;
	}
	.order-commoditymsg .order-msg {
		width: 169px;
		padding-left: 10px;
		text-align: left;
	} 

	.order-commoditytitle::after,
	.order-commoditymsg::after {
		content: '';
		display: block;
		clear: both;
	}
</style>