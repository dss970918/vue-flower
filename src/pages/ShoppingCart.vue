<template>
	<div class="shoppingcart">
		<div class="wrapper cart-wrapper">
  		<div class="cart-commodity">
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
			      width="343">
			      <template slot-scope='{row}'>
			      	<img :src="row.src">
			      	<span>{{row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="单价"
			      width="200"
			      align='center'>
			      <template slot-scope='{row}'>
			      	<span>￥{{row.price2}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="数量"
			      width="200"
			      align='center'>
			      <template slot-scope='{row}'>
			      	<div>
								<el-button icon='el-icon-minus' @click='minus(row)'></el-button>
			      		{{row.number}}
    						<el-button icon='el-icon-plus' @click='plus(row)'></el-button>
			      	</div>
			      </template>
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
			      	<span @click='deletecommodity(row)'>删除</span>
			      	<!-- 此处应为row.id -->
			      </template>
			    </el-table-column>
			  </el-table>
				{{multipleSelection}}
				<div class="cart-pay">
					<div class="cart-total">
						<span>共{{commodity.length}}件商品，已选择{{multipleSelection.length}}件</span>
						<span>总计：</span>
						<span>￥{{total_price}}</span>
					</div>
					<div class="cart-gopay">
						<el-button @click='gopay'>下 单</el-button>
					</div>
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
						telephone:'18454236834',
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
					id:'307',
					name:'致青春',
					price2:'229',
					src:require('@/assets/love-8.jpg'),
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
				this.multipleSelection.forEach(item=>{
					total+=Number(item.price2)*Number(item.number)
				})
				return total;
			},
			commodity_price(){
				// 计算单个商品价格
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
			},
			minus(row){
				if(row.number>1&&row.number<=99){
					row.number--;
				}
			},
			plus(row){
				if(row.number>=1&&row.number<99){
					row.number++;
				}
			},
			gopay(){
				this.$router.push('/plate/pay')
			},
			deletecommodity(row){
				this.$confirm('确认删除商品？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	//这只是暂时的
        	this.multipleSelection.splice(this.multipleSelection.indexOf(row),1);
      		this.commodity.splice(this.commodity.indexOf(row),1);
      		// 此处应为axios.get
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
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
	.cart-commodity .el-table__header-wrapper thead.has-gutter > tr > * {
		background-color: #f5f5f5;
		font-size: 16px;
		font-weight: normal;
	}
	.cart-commodity .el-table__body-wrapper tbody > * > td:last-child span {
		cursor: pointer;
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
	.cart-total span:first-child {
		margin-right: 30px;
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