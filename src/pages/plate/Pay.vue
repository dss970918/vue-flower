<template>
	<div class="pay">
    <div class="wrapper pay-wrapper">
    	<div class="pay-content">
    		<div class="pay-receive">
					<div class="pay-title">收货信息</div>
					<div class="pay-receive-msg">
						<div class="receiver">
							<span>收件人：</span>
							<span>{{receive.form.receiver}}</span>
						</div>
						<div class="telephone">
							<span>联系电话：</span>
							<span>{{receive.form.telephone}}</span>
						</div>
						<div class="address">
							<span>收货地址：</span>
							<span>{{receive.form.address}}</span>
						</div>
						<el-button @click='toModifyMsg'>修改信息</el-button>
					</div>
    		</div>
    		<div class="pay-commodity">
					<div class="pay-title">商品信息</div>
					<div class="pay-commodity-msg">
						123
					</div>
    		</div>
    	</div>
    </div>
		
		<!-- 修改信息的模态框 -->
    <el-dialog title="收货地址" :visible.sync="receive.visible">
		  <el-form :model="receive.form" label-position='left'>
		    <el-form-item label="收件人" label-width='100px'>
		      <el-input v-model="receive.form.receiver" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="联系电话" label-width='100px'>
		      <el-input v-model="receive.form.telephone" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="收货地址" label-width='100px'>
		    	<el-input v-model="receive.form.address" autocomplete="off" placeholder='请填写详细地址'></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="closePDialog">取 消</el-button>
		    <el-button type="primary" @click="saveOrUpdateReceive">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				receive:{
					visible:false,
					form:{
						receiver:'刘浩',
						telephone:'18454236854',
						address:'江苏省苏州市昆山市巴城镇学院路999号美居客电商产业大楼'
					}
				},
				commodity:{
					id:'300',
					name:'一心一意',
					material:'红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝',
					language:'一心一意我只属于你、一生一世只爱你一个、两个人永远相爱，永不分离。纵然途中万般风景，我的眼里只有你！很爱很爱你，想把你捧在手心，放在心里',
					packing:'内层白色雾面纸，外层牛皮纸,咖啡色花结',
					price1:'￥189',
					price2:'￥138'
				},
				commoditynav:[{
					src:require('@/assets/love-1/9010011.jpg')
				},{
					src:require('@/assets/love-1/201709011117442888.jpg')
				},{
					src:require('@/assets/love-1/201709151725463208.jpg')
				}],
				number:'1'
			}
		},
		methods:{
			toModifyMsg(){
				// 修改收货信息
				this.receive.visible=true;
			},
			closePDialog(){
				// 取消关闭模态框
				this.receive.visible=false;
			},
			saveOrUpdateReceive(){
				// 保存新收货信息

				this.receive.visible=false;
			}
		}
	}
</script>

<style>
	.pay-content {
		margin-top: 50px;
	}
	.pay-content > * {
		border: 1px solid #e8e8e8;
	}
	.pay-content > .pay-receive {
		margin-bottom: 20px;
	}
	.pay-content > * > .pay-title {
		background-color: #f5f5f5;
		color: #999;
		height: 35px;
		line-height: 35px;
		padding-left: 10px;
		border-bottom: 1px solid #e8e8e8;
	}
	.pay-receive .pay-receive-msg {
		padding: 0 20px;
	}
	.pay-receive-msg .receiver {
		margin-top: 20px;
	}
	.receiver span:first-child {
		margin-right: 15px;
	}
	.pay-receive-msg > * {
		margin-bottom: 20px;
	}
</style>