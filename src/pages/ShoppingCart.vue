<template>
	<div class="shoppingcart">
		<div class="wrapper cart-wrapper">
  		<div class="cart-commodity">
				<div class="cart-title">
					<span>商品信息</span>
					<span>单价</span>
					<span>数量</span>
					<span>小计</span>
					<span>实付</span>
				</div>
				<div class="cart-commodity-msg">
					<ul>
						<li v-for='commodity in commodity'>
							<div class="commodity-img"><img :src="commodity.src"></div>
							<div class="commodity-title"><span>{{commodity.name}}</span></div>
							<div class="commodity-price">￥<span>{{commodity.price2}}</span></div>
							<div class="commodity-number"><span>{{commodity.number}}</span></div>
							<div class="commodity-xiaoji">￥<span >{{commodity.number*commodity.price2}}</span></div>
							<div class="commodity-shifu"><span>￥{{commodity.number*commodity.price2}}</span></div>
						</li>
					</ul>
				</div>

				<el-table
			    ref="multipleTable"
			    :data="commodity"
			    tooltip-effect="dark"
			    style="width: 100%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="商品信息"
			      width="344">
			      <template slot-scope='{row}'>
			      	<img :src="row.src" alt="">
			      	<span>{{row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="单价"
			      prop="price2"
			      width="200"
			      align='center'>
			    </el-table-column>
			    <el-table-column
			      label="数量"
			      prop='number'
			      width="200"
			      align='center'>
			    </el-table-column>
			    <el-table-column
			      label="小计"
			      width="200"
			      align='center'>
			      <template slot-scope='{row}'>
			      	<div>￥{{row.number*row.price2}}</div>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="操作"
			      width='200'
			      align='center'>
			      <template slot-scope='{row}'>
			      	<span>删除</span>
			      </template>
			    </el-table-column>
			  </el-table>


				<div class="cart-pay">
					<div class="cart-total"><span>总计：</span><span>￥{{total_price}}</span></div>
					<div class="cart-gopay"><el-button @click='gopay'>下 单</el-button></div>
				</div>
  		</div>
    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				// 收件人的信息
				receive:{
					visible:false,	//修改收货信息的模态框
					form:{
						receiver:'刘浩',
						telephone:'18454236854',
						address:'江苏省苏州市昆山市巴城镇学院路999号美居客电商产业大楼'
					}
				},
				// 商品信息
				commodity:[{
					id:'300',
					name:'一心一意',
					price2:'138',
					src:require('@/assets/love-1/9010011.jpg'),
					number:'2'
				},{
					id:'300',
					name:'一心二意',
					price2:'138',
					src:require('@/assets/love-1/9010011.jpg'),
					number:'1'
				}],
				// 去支付模态框
				pay:{
					visible:false
				},
				paynow:{
					visible:false
				},
				multipleSelection:[],
				rules:{
					
				}
			}
		},
		computed:{
			total_price(){
				// 计算总价
				let total=0;
				this.commodity.forEach(item=>{
					total+=Number(item.price2)*Number(item.number)
				})
				return total;
			},
			commodity_price(){
				let price=0;
				this.commodity.forEach(item=>{
					price=Number(item.price2)*Number(item.number)
				});
				return price
			}
		},
		created(){
			
		},
		methods:{
			handleSelectionChange(val){
				this.multipleSelection=val;
				console.log(val)
			},
			gopay(){
				this.$router.push('/plate/pay')
			}
		}
	}
</script>

<style>
	.cart-commodity {
		margin-top: 50px;
		border: 1px solid #e8e8e8;
		padding-bottom: 30px;
	}
	.cart-commodity > .cart-title {
		background-color: #f5f5f5;
		color: #999;
		height: 40px;
		line-height: 40px;
		padding: 0 15px;
		border-bottom: 1px solid #e8e8e8;
	}
	.cart-title > * {
		float: left;
	}
	.cart-title > span {
		width: 200px;
		text-align: center;
	}
	.cart-title > span:first-child {
		width: 350px;
		text-align: left;
	}
	.cart-commodity > .cart-commodity-msg > ul > li {
		border-bottom: 1px solid #e8e8e8;
		height: 100px;
		padding: 20px;
	}
	.cart-commodity-msg > ul > li > * {
		float: left;
		width: 200px;
		text-align: center;
		padding-top: 5px;
	}
	.cart-commodity-msg > ul > li > label {
		width: 14px;
		height: 14px;
	}
	.cart-commodity-msg > ul > li > .commodity-img {
		width: 100px;
		height: 100px;
		padding: 0;
	}
	.commodity-img img {
		width: 100%;
		height: 100%;
	}
	.cart-commodity-msg > ul > li > .commodity-title {
		padding-left: 10px;
		width: 245px;
		font-size: 16px;
		text-align: left;
	}
	.cart-commodity .el-table__header-wrapper thead.has-gutter > tr > * {
		background-color: #f5f5f5 !important;
	}
	.cart-commodity table img {
		width: 100px;
		height: 100px;
	}
	.cart-commodity > .cart-pay {
		padding-right: 20px;
	}
	.cart-pay > .cart-total {
		text-align: right;
		margin-bottom: 20px;
		margin-top: 50px;
	}
	.cart-total > span:last-child {
		color: #d4282d;
		font-size: 20px;
		font-weight: 700;
	}
	.cart-pay > .cart-gopay .el-button{
		width: 160px;
		height: 50px;
		font-size: 18px;
		background-color: #f76372;
		color: #fff;
		border-color: #f76372;
		float: right;
	}
	.cart-gopay .el-button:hover {
		background-color: rgba(247,99,114,0.9);
		border-color: rgba(247,99,114,0.9);
	}
	.cart-pay > *::after {
		content: '';
		display: block;
		clear: both;
	}
</style>