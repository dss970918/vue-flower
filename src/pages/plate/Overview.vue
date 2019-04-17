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
                <router-link :to='{path:"/plate/commodity",query:{id:msg.id}}'>{{msg.title}}</router-link>
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
  export default {
    data(){
      return {
        platemsg:[{
          id:'300',
          src:'/static/love-1.jpg',
          title:'一心一意',
          pricel:'138'
        },{
          id:'301',
          src:'/static/love-2.jpg',
          title:'爱你如初',
          pricel:'529'
        },{
          id:'302',
          src:'/static/love-3.jpg',
          title:'致美丽的你',
          pricel:'138'
        },{
          id:'303',
          src:'/static/love-4.jpg',
          title:'青青子衿',
          pricel:'280'
        },{
          id:'304',
          src:'/static/love-5.jpg',
          title:'月光女神',
          pricel:'232'
        },{
          id:'305',
          src:'/static/love-6.jpg',
          title:'真爱如初',
          pricel:'202'
        },{
          id:'306',
          src:'/static/love-7.jpg',
          title:'爱的小确幸',
          pricel:'309'
        },{
          id:'307',
          src:'/static/love-8.jpg',
          title:'致青春',
          pricel:'229'
        }]
      }
    },
    methods:{

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