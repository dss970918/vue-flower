<template>
	<div class="register">
		<div class="wrapper register-wrapper">
			<div class="register-msg">
				<div class="register-title">注册</div>
				<div class="register-form">
					<el-form :model="user" ref='userForm' :rules='usermsg' status-icon label-position='left'>
				    <el-form-item label="用户名" prop='username' label-width="80px">
				      <el-input v-model="user.username" @blur='checkUser'></el-input>
				    </el-form-item>
				    <el-form-item label="密码" prop='password' label-width="80px">
				      <el-input v-model="user.password" show-password></el-input>
				    </el-form-item>
				    <el-form-item label="确认密码" prop='checkpass' label-width="80px">
				      <el-input v-model="checkpassword" type='password'></el-input>
				    </el-form-item>
				  </el-form>
				</div>
				<div class="register-buttom">
					<el-button @click='submitForm()'>注 册</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '@/http/axios'
	export default {
		data(){
			var validateUser = (rule, value, callback) =>{
				if (value ===''){
					callback(new Error('请输入用户名'))
				}else{
					if (this.user.password !== '') {
            this.$refs.userForm.validateField('password');
          }
          callback();
				}
			};
			var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.checkpassword !== '') {
            this.$refs.userForm.validateField('checkpass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (this.checkpassword === '') {
          callback(new Error('请再次输入密码'));
        } else if (this.checkpassword !== this.user.password) {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };
			return {
				user:{
					username:'',
					password:'',
				},
				checkpassword:'',	
				usermsg:{
					username:[{validator:validateUser, trigger:'blur'}],
					password:[{validator:validatePass, trigger:'blur'}],
					checkpass:[{validator:validatePass2, trigger:'blur'}]
				},
			}
		},
		methods:{
			submitForm() {
        this.$refs.userForm.validate((valid) => {
          if (valid) {
          	axios.get('/user/findUser?username='+this.user.username)
		      	.then(({data:results})=>{
		      		// console.log(results)
		      		if(results.length!==0){
		      			this.$message.warning('用户名已存在')
		      		}else{
		      			axios.post('/user/insertUser',this.user)
		            .then(()=>{
		            	this.$message({
										message:'注册成功！',
										type:'success'
									});
		            })
		            .catch(()=>{
		            	this.$message({
										message:'注册失败',
										type:'error'
									});
		            })
		      		}
		      	})
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      checkUser(){
      	// console.log(this.user.username)
      	if(this.user.username!==''){
      		axios.get('/user/findUser?username='+this.user.username)
	      	.then(({data:results})=>{
	      		console.log(results)
	      		if(results.length!==0){
	      			this.$message.warning('用户名已存在')
	      		}
	      	})
	      	.catch(()=>{
	      		this.$message.error('查询失败');
	      	})
      	}
      	
      }
		}
	}
</script>

<style>
	.register-wrapper {
		background: url('../../static/z-login2.jpg') 0 0 no-repeat;
		height: 500px;
		background-size: contain;
	}
	.register-wrapper::after {
		content: '';
		display: block;
		clear: both;
	}
	.register-wrapper .register-msg {
		width: 400px;
		height: 420px;
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
	.register-msg .register-form {
		margin-top: 20px;
	}
	.register-msg .register-buttom button {
		width: 100%;
		color: #fff;
		background-color: #f76372;
		margin-top: 50px;
		border: 1px solid #f76372;
	}
</style>