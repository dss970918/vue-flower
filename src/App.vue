<template>
  <div id="app">
    <div class="top-nav">
    	<div class="wrapper top-nav-wrapper">
				<ul>
					<li :class='{current:currentRoute=="/login"}'>
						<router-link to='/login'>你好，请登录</router-link>
					</li>
					<li :class='{current:currentRoute=="/register"}'>
						<router-link to='/register'>快速注册</router-link>
					</li>
					<li :class='{current:currentRoute=="/order"}'>
						<router-link to='/order'>我的订单</router-link>
					</li>
					<li :class='{current:currentRoute=="/shoppingcart"}'>
						<router-link to='/shoppingcart'>
							<i class="fa fa-shopping-cart"></i>
							购物车
							<i class="fa fa-caret-down"></i>
						</router-link>
					</li>
					<li :class='{current:currentRoute=="/"}'>
						<router-link to='/'>樱花部落</router-link>
					</li>
				</ul>
    	</div>
    </div>
    
    <div class="header">
    	<div class="wrapper header-wrapper">
    		<div class="logo">
    			<router-link to='/'>
    				<img src="@/assets/title-1.jpg" alt="">
						<img src="@/assets/title-2.jpg" alt="">
    			</router-link>
    		</div>
    		<div class="search">
					<div class="search-top">
					  <el-input placeholder="鲜花关键词" v-model="input" class="input-with-select" prefix-icon='el-icon-search' clearable>
					    <el-button slot="append">搜 索</el-button>
					  </el-input>
					</div>
					<div class="search-bottom">
						<router-link to='/plate/overview'>红玫瑰</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview'>白玫瑰</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview'>康乃馨</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview'>百合</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview'>郁金香</router-link>
					</div>
    		</div>
    		<div class="service">
					<i class="fa fa-phone"></i>123-456-789
					<router-link to='/service'>
						<i class="fa fa-commenting"></i>
						客户服务
					</router-link>
    		</div>
    	</div>
    </div>
    
    <router-view></router-view>
    
    <div class="footer">
    	<div class="wrapper footer-wrapper">
    		<div class="footer-help">
					<div class="footer-help-left">
						<div>客户服务</div>
						<div class="customer-server">
							<div>
								<router-link to='/service'>常见问题</router-link>
								<router-link to='/service'>订单服务</router-link>
							</div>
							<div>
								<router-link to='/service'>售后服务</router-link>
								<router-link to='/service'>服务声明</router-link>
							</div>
							<div>
								<router-link to='/service'>配送说明</router-link>
								<router-link to='/service'>安全条款</router-link>
							</div>
						</div>
					</div>
					<div class="footer-help-center">
						<div>咨询</div>
						<div class="question">
							<router-link to='/question'>鲜花购物流程？</router-link>
							<router-link to='/question'>鲜花订购演示？</router-link>
							<router-link to='/question'>鲜花售后服务？</router-link>
							<router-link to='/question'>应该提前多久预定？</router-link>
						</div>
					</div>
					<div class="footer-help-right">
						<div>联系我们</div>
						<div class="callus">
							<div>订购热线：123-456-789</div>
							<div>7×24小时在线订购</div>
							<div>支持货到付款</div>
							<div>企业邮箱：123456789@163.com</div>
						</div>
					</div>
    		</div>
    		<div class="footer-foot">
					<div class="footer-foot-top">
						<div>
							<img src="@/assets/handshake-o.png" alt="">
							<span>诚信网站</span>
						</div>
						<div>
							<img src="@/assets/卡车.png" alt="">
							<span>满98元免邮费</span>
						</div>
						<div>
							<img src="@/assets/微信.png" alt="">
							<span>微信支付</span>
						</div>
						<div>
							<img src="@/assets/支付宝.png" alt="">
							<span>支付宝</span>
						</div>
						<div>
							<img src="@/assets/thumbs-up.png" alt="">
							<span>品质保证</span>
						</div>
					</div>
					<div class="footer-foot-bottom">CopyRight：2019</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
	export default {
		data(){
			return {
				currentRoute:'/',
				input:''
			}
		},
		created(){

		},
		mounted(){
			this.$router.push('/');
		},
		watch:{
			'$route':function(to,from){
				this.currentRoute=to.path;
			}
		},
		methods:{
			
		}
	}
</script>