<template>
  <div id="app">
    <div class="top-nav">
    	<div class="wrapper top-nav-wrapper">
				<ul>
					<li>
						<el-dropdown @command="handleCommand" trigger='click'>
				      <span @click='login($event)' class="el-dropdown-link">
				        {{username?username:'你好，请登录'}}
				      </span>
				      <el-dropdown-menu slot="dropdown" v-if='dropdownMenu'>
				        <el-dropdown-item command='showMsg'>个人信息</el-dropdown-item>
				        <el-dropdown-item command='logout'>退出登录</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
					</li>
					<li :class='{current:currentRoute=="/register"}'>
						<router-link to='/register'>快速注册</router-link>
					</li>
					<li :class='{current:currentRoute=="/order"}'>
						<a @click='toOrder'>我的订单</a>
					</li>
					<li :class='{current:currentRoute=="/shoppingcart"}'>
						<a @click='toShoppingcart'>
							<i class="fa fa-shopping-cart"></i>
							购物车
							<i class="fa fa-caret-down"></i>
						</a>
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
    				<img src="../static/title-1.jpg" alt="">
						<img src="../static/title-2.jpg" alt="">
    			</router-link>
    		</div>
    		<div class="search">
					<div class="search-top">
					  <el-input placeholder="鲜花关键词" v-model="input" class="input-with-select" prefix-icon='el-icon-search' clearable>
					    <el-button slot="append" @click='search'>搜 索</el-button>
					  </el-input>
					</div>
					<div class="search-bottom">
						<router-link to='/plate/overview?key=红玫瑰'>红玫瑰</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview?key=白玫瑰'>白玫瑰</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview?key=康乃馨'>康乃馨</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview?key=百合'>百合</router-link>
						&nbsp;|&nbsp;
						<router-link to='/plate/overview?key=郁金香'>郁金香</router-link>
					</div>
    		</div>
    		<div class="service">
					<i class="fa fa-phone"></i>123-456-789
					<router-link to='/plate/service/cjwt'>
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
								<router-link to='/plate/service/cjwt'>常见问题</router-link>
								<router-link to='/plate/service/qxdd'>取消订单</router-link>
							</div>
							<div>
								<router-link to='/plate/service/shfw'>售后服务</router-link>
								<router-link to='/plate/service/fwsm'>服务声明</router-link>
							</div>
							<div>
								<router-link to='/plate/service/pssm'>配送说明</router-link>
								<router-link to='/plate/service/aqtk'>安全条款</router-link>
							</div>
						</div>
					</div>
					<div class="footer-help-center">
						<div>咨询</div>
						<div class="question">
							<router-link to='/plate/service/liucheng'>鲜花购物流程？</router-link>
							<router-link to='/plate/service/pscs'>鲜花配送城市？</router-link>
							<router-link to='/plate/service/yuding'>应该提前多久预定？</router-link>
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
							<img src="../static/handshake-o.png" alt="">
							<span>诚信网站</span>
						</div>
						<div>
							<img src="../static/卡车.png" alt="">
							<span>满98元免邮费</span>
						</div>
						<div>
							<img src="../static/微信.png" alt="">
							<span>微信支付</span>
						</div>
						<div>
							<img src="../static/支付宝.png" alt="">
							<span>支付宝</span>
						</div>
						<div>
							<img src="../static/thumbs-up.png" alt="">
							<span>品质保证</span>
						</div>
					</div>
					<div class="footer-foot-bottom">CopyRight：2019</div>
    		</div>
    	</div>
    </div>
		
		<!-- 登录模态框 -->
    <el-dialog class='loginDialog' title="登录" :visible.sync="loginForm.visible" center>
		  <el-form :model="loginForm.form" ref='loginDialog' label-position='left'>
		    <el-form-item label="用户名" label-width="70px" prop='username'>
		      <el-input v-model="loginForm.form.username" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="密码" label-width="70px" prop='password'>
		      <el-input v-model="loginForm.form.password" auto-complete="off" show-password></el-input>
		    </el-form-item>
		  </el-form>
		  {{loginForm.form}}
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="closeLoginForm">取 消</el-button>
		    <el-button @click="toLogin">确 定</el-button>
		  </div>
		</el-dialog>

		<!-- 个人信息模态框 -->
		<el-dialog class='usermsgDialog' title="个人信息" :visible.sync="usermsg.visible" center>
			<!-- 修改信息模态框 -->
			<el-dialog
	      width="30%"
	      title="修改信息"
	      :visible.sync="modifymsg.visible"
	      append-to-body
	      class='modifyDialog'>
				<el-form :model="modifymsg.form" ref='userMsgForm' :rules='modify_usermsg' status-icon label-position='left'>
			    <el-form-item label="用户名" label-width="90px">
			      {{modifymsg.form.username}}
			    </el-form-item>
			    <el-form-item label="新密码" label-width="90px" prop='password'>
			      <el-input v-model="modifymsg.form.password" auto-complete="off" show-password></el-input>
			    </el-form-item>
			    <el-form-item label="真实姓名" label-width="90px" prop='nickname'>
			      <el-input v-model="modifymsg.form.nickname" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="联系电话" label-width="90px" prop='telephone'>
			      <el-input v-model="modifymsg.form.telephone" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="收货地址" label-width="90px" prop='address'>
			      <el-input v-model="modifymsg.form.address" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-form>
			  modifymsg:{{modifymsg.form}}<br>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="closeModify">取 消</el-button>
			    <el-button @click="updateUser">确 定</el-button>
			  </div>
	    </el-dialog>
			
			<!-- 信息 -->
		  <el-form :model="usermsg.form" ref='loginDialog' label-position='left'>
		    <el-form-item label="用户名" label-width="100px">{{usermsg.form.username}}</el-form-item>
		    <el-form-item label="真实姓名" label-width="100px">{{usermsg.form.nickname}}</el-form-item>
		    <el-form-item label="联系电话" label-width="100px">{{usermsg.form.telephone}}</el-form-item>
		    <el-form-item label="收货地址" label-width="100px">{{usermsg.form.address}}</el-form-item>
		  </el-form>
		  usermsg{{usermsg.form}}
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="closeUsermsg">确 定</el-button>
		    <el-button @click="toModifyMsg">修改信息</el-button>
		  </div>
		</el-dialog>
  </div>
</template>

<script>
	import axios from '@/http/axios'
	import commodity from './pages/plate/Commodity'
	import pay from './pages/plate/Pay'
	import order from './pages/Order'
	import shoppingcart from './pages/ShoppingCart'
	
	export default {
		components:{
			commodity,
			pay,
			order,
			shoppingcart
		},
		data(){
			return {
				currentRoute:'/',
				input:'',
				loginForm:{
					visible:false,
					form:{	// 登录表单的信息
						username: '',
	          password:''
					}
				},
				usermsg:{
					visible:false,
					form:{	// 后台传过来的用户信息
						
					}
				},
				modifymsg:{
					visible:false,	// 修改信息模态框的visible
					form:{

					}
				},
				username:'',
				dropdownMenu:true,
				modify_usermsg:{	//修改信息的表单验证
					password:[{
						required:true,message:'请输入新密码',trigger:'blur'
					}],
					nickname:[{
						required:true,message:'请输入真实姓名',trigger:'blur'
					}],
					telephone:[{
						required:true,message:'请输入联系电话',trigger:'blur'
					}],
					address:[{
						required:true,message:'请输入收货地址',trigger:'blur'
					}]
				}
			}
		},
		created(){

		},
		mounted(){
			// this.$router.push('/');
		},
		watch:{
			'$route':function(to,from){
				this.currentRoute=to.path;
			}
		},
		methods:{
			handleCommand(command){
        if(command=='logout'){
        	this.username='';//这也只是暂时的
        	this.usermsg.form={};
          /*axios.get('/logout')
          .then(()=>{
            localStorage.removeItem('user');
          })*/
        	this.$message.success('退出登录');
        }
        if(command=='showMsg'){
        	this.usermsg.visible=true;
        }
      },
			login(e){	// 点击你好请登录
				if(e.target.innerText=='你好，请登录'){
					this.dropdownMenu=false;//不显示dropdown
					this.loginForm.visible=true;
				}else{
					this.dropdownMenu=true;
				}
			},
			closeLoginForm(){	// 关闭登录模态框
				this.loginForm.visible=false;
				this.loginForm.form={};
			},
			closeUsermsg(){	// 关闭用户信息模态框
				this.usermsg.visible=false;
			},
			toLogin(){			// 登录校验
				this.$refs.loginDialog.validate((valid)=>{
					if(valid){
						if(this.loginForm.form.username==''||this.loginForm.form.password==''){
							this.$message.warning('请输入用户名或密码')
						}else{
							// 此处进行验证
							axios.get('/user/findUser?username='+this.loginForm.form.username)
							.then(({data:results})=>{
								// console.log(results)
								if(results.length==0){
									this.$message.warning('请输入正确的用户名或密码')
								}else if(results[0].username!==this.loginForm.form.username || results[0].password!==this.loginForm.form.password){
									this.$message.warning('请输入正确的用户名或密码')
								}else{
									this.username=this.loginForm.form.username;
									this.loginForm.visible=false;	// 关闭login模态框
									this.$message.success('登录成功');
									this.usermsg.form=results[0]
								}
								
							})
						}
					}
				})
			},
			toModifyMsg(){	// 打开修改信息模态框
				this.modifymsg.visible=true;
				let modify=_.clone(this.usermsg.form)
				this.modifymsg.form=modify;
			},
			closeModify(){	// 取消修改
				this.modifymsg.visible=false;
				this.$refs.userMsgForm.resetFields();
			},
			updateUser(){		// 提交用户信息
				this.$refs.userMsgForm.validate((valid) => {
          if (valid) {
          	// console.log(this.modifymsg.form)
          	let obj={
          		username:this.modifymsg.form.username,
          		password:this.modifymsg.form.password,
          		nickname:this.modifymsg.form.nickname,
          		address:this.modifymsg.form.address,
          		telephone:this.modifymsg.form.telephone,
          	}
          	// console.log(obj)
            axios.post('/user/updateUser',obj)
						.then(()=>{
							this.$message.success('修改成功')
							axios.get('/user/findUser?username='+obj.username)
							.then(({data:results})=>{
								this.$message.success('登录成功');
								// console.log(results[0])
								this.usermsg.form=results[0]
							})

							this.modifymsg.visible=false;
							this.usermsg.visible=false;
							this.$refs.userMsgForm.resetFields();
						})
						.catch(()=>{
							this.$message.error('修改失败');
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
			},
			toOrder(){
				if(this.usermsg.form.username==undefined||this.usermsg.form.username==''){
					this.$message({
						message:'请先登录',
						type:'warning'
					});
				}else{
					this.$router.push({
						path:'/order',
						query:{
							username:this.usermsg.form.username
						}
					})
				}
			},
			toShoppingcart(){
				if(this.usermsg.form.username==undefined){
					this.$message({
						message:'请先登录',
						type:'warning'
					});
				}else{
					this.$router.push({
						path:'/shoppingcart',
						query:{
							username:this.usermsg.form.username
						}
					})
				}
			},
			search(){				//关键字搜索
				this.$router.push('/plate/overview?key='+this.input)
			}
		}
	}
</script>