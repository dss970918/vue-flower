<template>
	<div class="overview">
		<div class="content">
    	<div class="wrapper plate-content-wrapper">
    		<ul>
    			<li v-for='plate in platemsg'>
            <div class="plate-img">
              <router-link to='/plate/commodity'>
                <img :src="plate.src" alt="">
              </router-link>
            </div>
            <div class="plate-msg">
              <div class="plate-msg-title">
                <router-link to='/plate/commodity'>{{plate.platetitle}}</router-link>
              </div>
              <div class="plate-msg-price">
                <span>{{plate.plateprice}}</span>
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
          src:require('@/assets/love-1.jpg'),
          platetitle:'一心一意',
          plateprice:'￥138'
        },{
          id:'301',
          src:require('@/assets/love-2.jpg'),
          platetitle:'爱你如初',
          plateprice:'￥529'
        },{
          id:'302',
          src:require('@/assets/love-3.jpg'),
          platetitle:'致美丽的你',
          plateprice:'￥138'
        },{
          id:'303',
          src:require('@/assets/love-4.jpg'),
          platetitle:'青青子衿',
          plateprice:'￥280'
        },{
          id:'304',
          src:require('@/assets/love-5.jpg'),
          platetitle:'月光女神',
          plateprice:'￥232'
        },{
          id:'305',
          src:require('@/assets/love-6.jpg'),
          platetitle:'真爱如初',
          plateprice:'￥202'
        },{
          id:'306',
          src:require('@/assets/love-7.jpg'),
          platetitle:'爱的小确幸',
          plateprice:'￥309'
        },{
          id:'307',
          src:require('@/assets/love-8.jpg'),
          platetitle:'致青春',
          plateprice:'￥229'
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
  .plate-msg .plate-msg-price span {
    font-size: 14px;
    color: #d4282d;
  }
  .plate-content-wrapper ul::after {
  	content: '';
  	display: block;
  	clear: both;
  }
</style>