<template>
	<div class="register">
		<div class="wrapper register-wrapper">
			<div class="register-msg">
				<div class="register-title">注册</div>
				<div class="register-form">
					<el-form :model="user" label-position='left'>
				    <el-form-item label="用户名" label-width="70px" prop='username'>
				      <el-input v-model="user.username" auto-complete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="密码" label-width="70px" prop='password'>
				      <el-input v-model="user.password" auto-complete="off" show-password></el-input>
				    </el-form-item>
				  </el-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				user:{
					username:'',
					password:''
				}
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.register-wrapper {
		background: url('../assets/z-login2.jpg') 0 0 no-repeat;
		height: 500px;
		background-size: contain;
	}
	.register-wrapper .register-msg {
		width: 400px;
		height: 450px;
		background-color: rgba(247,99,114,0.1);
		border-radius: 20px;
		float: right;
		margin-top: 20px;
		box-shadow:#ccc 0px 0px 10px;
		padding: 20px 30px;
	}
	.register-msg .register-title {
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
	}
</style>