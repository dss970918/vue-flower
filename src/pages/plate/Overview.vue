<template>
	<div class="overview">
		<div class="content">
    	<div class="wrapper plate-content-wrapper">
    		<ul>
    			<li v-for='msg in platemsg'>
            <div class="plate-img">
              <router-link :to='{path:"/plate/commodity",query:{id:msg.id}}'>
                <img :src="msg.src" alt="">
              </router-link>
            </div>
            <div class="plate-msg">
              <div class="plate-msg-title">
                <router-link :to='{path:"/plate/commodity",query:{id:msg.id}}'>{{msg.name}}</router-link>
              </div>
              <div class="plate-msg-pricel">
                <span>￥{{msg.pricel}}</span>
              </div>
            </div>
          </li>
    		</ul>
    	</div>
    </div>
	</div>
</template>

<script>
  import axios from '@/http/axios'
  export default {
    data(){
      return {
        platemsg:[]
      }
    },
    watch:{
      '$route.query':function(){
        this.getCommodityTypeOrKey();
      }
    },
    created(){
      this.getCommodityTypeOrKey();
    },
    methods:{
      getCommodityTypeOrKey(){
        // 根据路由获取query中的type
        let type=this.$route.query.type;
        let key=this.$route.query.key;
        if(type){
          this.findCommodityByType(type);
        }else if(key){
          this.findCommodityByKey(key);
        }else{
          this.findAllCommodity();
        }

      },
      findAllCommodity(){
        axios.get('/commodity/findAllCommodity')
        .then(({data:results})=>{
          this.platemsg=results
        })
        .catch(()=>{
          this.$message.error('查询失败')
        })
      },
      findCommodityByType(type){
        // 根据type查询数据
        axios.get('/commodity/findCommodityByType?type='+type)
        .then(({data:results})=>{
          // console.log({data:results})
          this.platemsg=results;
          if(this.platemsg.length==0){
            this.$message.error('商品不存在')
          }else{
            this.$message.success('查询成功')
          }
        })
      },
      findCommodityByKey(key){
        // 根据key查询数据
        axios.get('/commodity/findCommodityByKey?key='+key)
        .then(({data:results})=>{
          this.platemsg=results;
          if(this.platemsg.length==0){
            this.$message.error('商品不存在')
          }else{
            this.$message.success('查询成功')
          }
        })
      }
    }
  }
</script>

<style>
	.content {
		margin-top: 60px;
	}
  .content .plate-content-wrapper ul > * {
    float: left;
    width: 285px;
    height: 360px;
    box-sizing: border-box;
    border: 1px solid rgba(247,99,114,0.3);
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .plate-content-wrapper ul > *:nth-child(4n) {
  	margin: 0;
  }
  .plate-content-wrapper ul > *:hover {
    border: 1px solid rgba(247,99,114,1);
  }
  .plate-content-wrapper ul > li .plate-img {
    height: 300px;
    overflow: hidden;
    border-bottom: 1px solid rgba(247,99,114,0.2);
    margin-bottom: 5px;
  }
  .plate-content-wrapper ul > li .plate-img img{
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .plate-msg {
    text-align: center;
  }
  .plate-msg .plate-msg-title a {
    font-weight: bold;
  }
  .plate-msg-title a:hover {
    color: #f76372;
  }
  .plate-msg .plate-msg-pricel span {
    font-size: 14px;
    color: #d4282d;
  }
  .plate-content-wrapper ul::after {
  	content: '';
  	display: block;
  	clear: both;
  }
</style>