<template>
	<div class="plate">
		<div class="plate-nav">
      <div class="wrapper plate-nav-wrapper">
        <div class="platenav-title">
        	<span>全部商品导购<i class="fa fa-angle-down"></i></span>
					<div class="platenav-block">
	          <div class="platenav-block-variety">
	            <div class="title">鲜花品种</div>
	            <ul>
	              <li><router-link to='/plate/overview'>玫瑰</router-link></li>
	              <li><router-link to='/plate/overview'>风信子</router-link></li>
	              <li><router-link to='/plate/overview'>紫罗兰</router-link></li>
	              <li><router-link to='/plate/overview'>桂花</router-link></li>
	              <li><router-link to='/plate/overview'>百合</router-link></li>
	              <li><router-link to='/plate/overview'>康乃馨</router-link></li>
	              <li><router-link to='/plate/overview'>栀子花</router-link></li>
	              <li><router-link to='/plate/overview'>郁金香</router-link></li>
	              <li><router-link to='/plate/overview'>马蹄莲</router-link></li>
	            </ul>
	          </div>
	          <div class="platenav-block-purpose">
	            <div class="title">鲜花用途</div>
	            <ul>
	              <li><router-link to='/plate/overview'>爱情鲜花</router-link></li>
	              <li><router-link to='/plate/overview'>探病鲜花</router-link></li>
	              <li><router-link to='/plate/overview'>友情鲜花</router-link></li>
	              <li><router-link to='/plate/overview'>道歉鲜花</router-link></li>
	              <li><router-link to='/plate/overview'>祝贺鲜花</router-link></li>
	              <li><router-link to='/plate/overview'>婚庆鲜花</router-link></li>
	              <li><router-link to='/plate/overview'>商务鲜花</router-link></li>
	            </ul>
	          </div>
	          <div class="platenav-block-type">
	            <div class="title">鲜花类别</div>
	            <ul>
	              <li><router-link to='/plate/overview'>开业花篮</router-link></li>
	              <li><router-link to='/plate/overview'>永生花</router-link></li>
	              <li><router-link to='/plate/overview'>花束</router-link></li>
	              <li><router-link to='/plate/overview'>香皂花</router-link></li>
	              <li><router-link to='/plate/overview'>瓶花</router-link></li>
	              <li><router-link to='/plate/overview'>办公室盆栽</router-link></li>
	            </ul>
	          </div>
	      	</div>
        </div>
        <router-link to='/plate/overview'>鲜花</router-link>
        <router-link to='/plate/overview'>永生花</router-link>
        <router-link to='/plate/overview'>玫瑰花</router-link>
        <router-link to='/plate/overview'>百合花</router-link>
        <router-link to='/plate/overview'>绿植盆栽</router-link>
        <router-link to='/plate/overview'>七夕情人节鲜花</router-link>
      </div>
    </div>
    <router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				platemsg:[{
          id:'300',
          src:require('../assets/love-1.jpg'),
          platetitle:'一心一意',
          plateprice:'￥138'
        },{
          id:'301',
          src:require('../assets/love-2.jpg'),
          platetitle:'爱你如初',
          plateprice:'￥529'
        },{
          id:'302',
          src:require('../assets/love-3.jpg'),
          platetitle:'致美丽的你',
          plateprice:'￥138'
        },{
          id:'303',
          src:require('../assets/love-4.jpg'),
          platetitle:'青青子衿',
          plateprice:'￥280'
        },{
          id:'304',
          src:require('../assets/love-5.jpg'),
          platetitle:'月光女神',
          plateprice:'￥232'
        },{
          id:'305',
          src:require('../assets/love-6.jpg'),
          platetitle:'真爱如初',
          plateprice:'￥202'
        },{
          id:'306',
          src:require('../assets/love-7.jpg'),
          platetitle:'爱的小确幸',
          plateprice:'￥309'
        },{
          id:'307',
          src:require('../assets/love-8.jpg'),
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
	.plate-nav {
    min-width: 1200px;
    height: 40px;
    background-color: rgba(247,99,114,0.8);
  }
  .plate-nav-wrapper > a {
    display: inline-block;
    line-height: 40px;
    font-size: 17px;
    font-weight: bold;
    margin-left: 20px;
    padding: 0 15px;
    color: #fff;
  }
  .plate-nav-wrapper > .platenav-title{
    width: 280px;
    color: #fff;
    font-size: 17px;
    background-color: #f76372;
    position: relative;
    float: left;
  }
  .platenav-title > span {
  	display: inline-block;
  	width: 100%;
  	line-height: 40px;
  	font-weight: bold;
  	text-align: center;
  }
  .platenav-title > span .fa-angle-down {
  	position: absolute;
  	top: .8em;
  	right: 2em;
  }
  .plate-nav-wrapper > a:hover {
    background-color: rgba(247,99,114,1);
  }
  .platenav-title > .platenav-block {
  	width: 280px;
    height: 329px;
    background-color: #fff;
    /* border-bottom: 2px solid #f76372; */
    box-shadow: 0 2px 2px rgba(0,0,0,0.175);
    position: absolute;
    top: 40px;
    display: none;
    z-index: 20;
  }
  .platenav-title:hover .platenav-block {
  	display: block;
  }
  .platenav-block > * > .title {
    font-size: 16px;
    font-weight: 600;
    color: #f76372;
    text-align: center;
  }
  .platenav-block > * > ul {
    width: 230px;
    margin: 8px auto;
  }
  .platenav-block > * > ul > * {
    display: inline-block;
  }
  .platenav-block > * > ul > * > a {
    font-size: 13px;
  }
  .platenav-block > * > ul > * > a:hover {
    color: #f76372;
  }
  .platenav-block .platenav-block-variety a {
    margin-right: 20px;
  }
  .platenav-block-variety .title {
    padding-top: 8px;
  }
  .platenav-block-variety ul,
  .platenav-block-purpose ul {
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(247,99,114,0.3);
  }
  .platenav-block .platenav-block-purpose a {
    margin-right: 25px;
  }
  .platenav-block .platenav-block-type a {
    margin-right: 35px;
  }
  .platenav-block-type ul > li:nth-child(4) a {
    margin-right: 49px;
  }
  .platenav-block-type ul > li:nth-child(5) a {
    margin-right: 32px;
  }
  .platenav-block-variety ul > li:nth-child(4) a,
  .platenav-block-variety ul > li:nth-child(8) a,
  .platenav-block-purpose ul > li:nth-child(3) a,
  .platenav-block-purpose ul > li:nth-child(6) a,
  .platenav-block-type ul > li:nth-child(3) a,
  .platenav-block-type ul > li:nth-child(6) a {
    margin: 0;
  }



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
  }
  .plate-content-wrapper ul > li .plate-img img{
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .plate-content-wrapper ul::after {
  	content: '';
  	display: block;
  	clear: both;
  }
</style>