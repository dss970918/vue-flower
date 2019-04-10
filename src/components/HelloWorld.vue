<template>
  <div class="first">
    <div class="nav">
      <div class="wrapper nav-wrapper">
        <span>全部商品导购</span>
        <router-link to='/plate/overview'>鲜花</router-link>
        <router-link to='/plate/overview'>永生花</router-link>
        <router-link to='/plate/overview'>玫瑰花</router-link>
        <router-link to='/plate/overview'>百合花</router-link>
        <router-link to='/plate/overview'>绿植盆栽</router-link>
        <router-link to='/plate/overview'>七夕情人节鲜花</router-link>
      </div>
    </div>
    
    <div class="carousel">
      <el-carousel type='card' interval='3000'>
        <div class="left-nav">
          <div class="left-nav-variety">
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
          <div class="left-nav-purpose">
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
          <div class="left-nav-type">
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
        <el-carousel-item v-for="item in items" :key="item.id">
          <router-link :to='item.href'><img :src="item.src"></router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <div class="top-server">
      <ul class="wrapper top-server-wrapper">
        <li>
          <p>品质保证</p>
          <p>真实口碑</p>
        </li>
        <li>
          <p>实拍展示</p>
          <p>发货前实拍鲜花</p>
        </li>
        <li>
          <p>急速发货</p>
          <p>2小时之内发货</p>
        </li>
      </ul>
    </div>

    <div class="hot">
      <div class="wrapper hot-wrapper">
        <div class="hot-wrapper-title">人气推荐<i class="fa fa-fire"></i></div>
        <ul>
          <li v-for='msg in hotmsg' :key='msg.id'>
            <div class="hot-img">
              <a @click='tocommodity(msg)'>
                <img :src="msg.src" alt="">
              </a>
            </div>
            <div class="hot-msg">
              <div class="hot-msg-head"><span>{{msg.hotmsghead}}</span></div>
              <div class="hot-msg-title">
                <router-link to='/plate/commodity'>{{msg.title}}</router-link>
              </div>
              <p class="hot-msg-price">
                <span>￥{{msg.price1}}</span>
                <span>￥{{msg.price2}}</span>
                <span class="hot-msg-down">
                  <i class="fa fa-long-arrow-down"></i>
                  <span>直降{{msg.price2-msg.price1}}</span>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="time-limit">
      <div class="wrapper time-limit-wrapper">
        <div class="time-limit-title">限时推荐<i class="fa fa-clock-o"></i></div>
        <ul>
          <li v-for='msg in timelimit'>
            <div class="time-img">
              <a @click='tocommodity(msg)'>
                <img :src="msg.src" alt="">
              </a>
            </div>
            <div class="timelimit">
              <div class="timelimit-head"><span>{{msg.timelimithead}}</span></div>
              <div class="timelimit-title">
                <router-link to='/plate/commodity'>{{msg.title}}</router-link>
              </div>
              <p class="timelimit-price">
                <span>￥{{msg.price1}}</span>
                <span>￥{{msg.price2}}</span>
                <span class="timelimit-down">
                  <i class="fa fa-long-arrow-down"></i>
                  <span>直降{{msg.price2-msg.price1}}</span>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="love">
      <div class="wrapper love-wrapper">
        <div class="love-title">爱情鲜花<i class="fa fa-heart"></i></div>
        <div class="love-content">
          <ul>
            <li>
              <router-link to='/plate/overview'>
                <div class="love-left-img">
                  <img src="@/assets/love.jpg" alt="">
                </div>
                <div class="love-to">
                  <div class="love-to-title">爱情鲜花专区>></div>
                </div>
              </router-link>
            </li>
            <li v-for='love in lovemsg'>
              <div class="love-img">
                <router-link to='/plate/commodity'>
                  <img :src="love.src" alt="">
                </router-link>
              </div>
              <div class="love-msg">
                <div class="love-msg-title">
                  <router-link to='/plate/commodity'>{{love.lovetitle}}</router-link>
                </div>
                <div class="love-msg-price">
                  <span>{{love.loveprice1}}</span>
                  <span>{{love.loveprice2}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="thanks">
      <div class="wrapper thanks-wrapper">
        <div class="thanks-title">感恩鲜花<i class="fa fa-smile-o"></i></div>
        <div class="thanks-content">
          <ul>
            <li>
              <router-link to='/plate/overview'>
                <div class="thanks-left-img">
                  <img src="@/assets/thanks.jpeg" alt="">
                </div>
                <div class="thanks-to">
                  <div class="thanks-to-title">感恩鲜花专区>></div>
                </div>
              </router-link>
            </li>
            <li v-for='thanks in thanksmsg'>
              <div class="thanks-img">
                <router-link to='/plate/commodity'>
                  <img :src="thanks.src" alt="">
                </router-link>
              </div>
              <div class="thanks-msg">
                <div class="thanks-msg-title">
                  <router-link to='/plate/commodity'>{{thanks.thankstitle}}</router-link>
                </div>
                <div class="thanks-msg-price">
                  <span>{{thanks.thanksprice1}}</span>
                  <span>{{thanks.thanksprice2}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="immortal">
      <div class="wrapper immortal-wrapper">
        <div class="immortal-title">永生花<i class="fa fa-pagelines"></i></div>
        <div class="immortal-content">
          <ul>
            <li>
              <router-link to='/plate/overview'>
                <div class="immortal-left-img">
                  <img src="@/assets/immortal.jpeg" alt="">
                </div>
                <div class="immortal-to">
                  <div class="immortal-to-title">永生花专区>></div>
                </div>
              </router-link>
            </li>
            <li v-for='immortal in immortalmsg'>
              <div class="immortal-img">
                <router-link to='/plate/commodity'>
                  <img :src="immortal.src" alt="">
                </router-link>
              </div>
              <div class="immortal-msg">
                <div class="immortal-msg-title">
                  <router-link to='/plate/commodity'>{{immortal.immortaltitle}}</router-link>
                </div>
                <div class="immortal-msg-price">
                  <span>{{immortal.immortalprice1}}</span>
                  <span>{{immortal.immortalprice2}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items:[{
          id:'00',
          src:require('@/assets/carousel-1.jpg'),
          href:'/plate/overview'
        },{
          id:'01',
          src:require('@/assets/carousel-2.jpg'),
          href:'/plate/overview'
        },{
          id:'02',
          src:require('@/assets/carousel-3.jpg'),
          href:'/plate/overview'
        }],

        hotmsg:[{
          id:'500',
          src:require('@/assets/immortal-1.jpg'),
          hotmsghead:'特惠',
          title:' 桃心玻璃罩 永生花 礼盒',
          price1:'176',
          price2:'235',
          src0:require('@/assets/immortal-1/500.jpg'),
          src1:require('@/assets/immortal-1/500-1.jpg'),
          src2:require('@/assets/immortal-1/500-2.jpg'),
          material:'永生花',
          language:'永生花花语',
          packing:'内层白色雾面纸，外层牛皮纸,咖啡色花结'
        },{
          id:'302',
          src:require('@/assets/love-3.jpg'),
          hotmsghead:'限时购',
          title:'致美丽的你 红玫瑰',
          price1:'138',
          price2:'191',
          src0:require('@/assets/love-3/302.jpg'),
          src1:require('@/assets/love-3/302-1.jpg'),
          src2:require('@/assets/love-3/302-2.jpg'),
          material:'红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝',
          language:'一心一意我只属于你、一生一世只爱你一个、两个人永远相爱，永不分离。纵然途中万般风景，我的眼里只有你！很爱很爱你，想把你捧在手心，放在心里',
          packing:'内层白色雾面纸，外层牛皮纸,咖啡色花结',
        },{
          id:'405',
          src:require('@/assets/thanks-6.jpg'),
          hotmsghead:'满折',
          title:'温馨问候',
          price1:'285',
          price2:'389',
          src0:require('@/assets/thanks-6/405.jpg'),
          src1:require('@/assets/thanks-6/405-1.jpg'),
          src2:require('@/assets/thanks-6/405-2.jpg')
        },{
          id:'501',
          src:require('@/assets/immortal-2.jpg'),
          hotmsghead:'满减',
          title:'Be My Love',
          price1:'398',
          price2:'598',
          src0:require('@/assets/immortal-2/501.jpg'),
          src1:require('@/assets/immortal-2/501-1.jpg'),
          src2:require('@/assets/immortal-2/501-2.jpg')
        },{
          id:'400',
          src:require('@/assets/thanks-1.jpg'),
          hotmsghead:'满减',
          title:'母爱 康乃馨',
          price1:'175',
          price2:'228',
          src0:require('@/assets/thanks-1/400.jpg'),
          src1:require('@/assets/thanks-1/400-1.jpg'),
          src2:require('@/assets/thanks-1/400-2.jpg')
        }],

        timelimit:[{
          id:'20',
          src:require('@/assets/time-1.jpg'),
          timelimithead:'限时购',
          title:'绿野仙踪 永生花 鲜花礼盒',
          price1:'499',
          price2:'520',
        },{
          id:'506',
          src:require('@/assets/immortal-7.jpg'),
          timelimithead:'限时购',
          title:'永生花 玻璃罩 礼盒',
          price1:'338',
          price2:'399',
        },{
          id:'308',
          src:require('@/assets/love-9.jpg'),
          timelimithead:'满折',
          title:'恋恋情深 香槟玫瑰',
          price1:'199',
          price2:'255',
        },{
          id:'401',
          src:require('@/assets/thanks-2.jpg'),
          timelimithead:'满减',
          title:'天使之祈',
          price1:'198',
          price2:'252',
        },{
          id:'24',
          src:require('@/assets/time-5.jpg'),
          timelimithead:'满减',
          title:'甜美公主',
          price1:'376',
          price2:'485',
        }],

        lovemsg:[{
          id:'300',
          src:require('@/assets/love-1.jpg'),
          lovetitle:'一心一意',
          loveprice1:'￥138',
          loveprice2:'￥189',
        },{
          id:'301',
          src:require('@/assets/love-2.jpg'),
          lovetitle:'爱你如初',
          loveprice1:'￥529',
          loveprice2:'￥636',
        },{
          id:'302',
          src:require('@/assets/love-3.jpg'),
          lovetitle:'致美丽的你',
          loveprice1:'￥138',
          loveprice2:'￥191',
        },{
          id:'303',
          src:require('@/assets/love-4.jpg'),
          lovetitle:'青青子衿',
          loveprice1:'￥280',
          loveprice2:'￥359',
        },{
          id:'304',
          src:require('@/assets/love-5.jpg'),
          lovetitle:'月光女神',
          loveprice1:'￥232',
          loveprice2:'￥305',
        },{
          id:'305',
          src:require('@/assets/love-6.jpg'),
          lovetitle:'真爱如初',
          loveprice1:'￥202',
          loveprice2:'￥265',
        },{
          id:'306',
          src:require('@/assets/love-7.jpg'),
          lovetitle:'爱的小确幸',
          loveprice1:'￥309',
          loveprice2:'￥395',
        },{
          id:'307',
          src:require('@/assets/love-8.jpg'),
          lovetitle:'致青春',
          loveprice1:'￥229',
          loveprice2:'￥295',
        }],

        thanksmsg:[{
          id:'400',
          src:require('@/assets/thanks-1.jpg'),
          thankstitle:'母爱',
          thanksprice1:'￥175',
          thanksprice2:'￥228',
        },{
          id:'401',
          src:require('@/assets/thanks-2.jpg'),
          thankstitle:'天使之祈',
          thanksprice1:'￥198',
          thanksprice2:'￥252',
        },{
          id:'402',
          src:require('@/assets/thanks-3.jpg'),
          thankstitle:'向日葵之歌',
          thanksprice1:'￥189',
          thanksprice2:'￥242',
        },{
          id:'403',
          src:require('@/assets/thanks-4.jpg'),
          thankstitle:'爱的思念',
          thanksprice1:'￥196',
          thanksprice2:'￥251',
        },{
          id:'404',
          src:require('@/assets/thanks-5.jpg'),
          thankstitle:'留住好时光',
          thanksprice1:'￥238',
          thanksprice2:'￥306',
        },{
          id:'405',
          src:require('@/assets/thanks-6.jpg'),
          thankstitle:'温馨问候',
          thanksprice1:'￥285',
          thanksprice2:'￥389',
        },{
          id:'406',
          src:require('@/assets/thanks-7.jpg'),
          thankstitle:'漾恬假期',
          thanksprice1:'￥238',
          thanksprice2:'￥305',
        },{
          id:'407',
          src:require('@/assets/thanks-8.jpg'),
          thankstitle:'妈妈的爱',
          thanksprice1:'￥159',
          thanksprice2:'￥202',
        }],

        immortalmsg:[{
          id:'500',
          src:require('@/assets/immortal-1.jpg'),
          immortaltitle:' 桃心玻璃罩 永生花 礼盒',
          immortalprice1:'￥176',
          immortalprice2:'￥235',
        },{
          id:'501',
          src:require('@/assets/immortal-2.jpg'),
          immortaltitle:'Be My Love',
          immortalprice1:'￥398',
          immortalprice2:'￥598',
        },{
          id:'502',
          src:require('@/assets/immortal-3.jpg'),
          immortaltitle:'看得到的美好',
          immortalprice1:'￥399',
          immortalprice2:'￥499',
        },{
          id:'503',
          src:require('@/assets/immortal-4.jpg'),
          immortaltitle:'一生一世',
          immortalprice1:'￥198',
          immortalprice2:'￥259',
        },{
          id:'504',
          src:require('@/assets/immortal-5.jpg'),
          immortaltitle:'一路有你',
          immortalprice1:'￥338',
          immortalprice2:'￥569',
        },{
          id:'505',
          src:require('@/assets/immortal-6.jpg'),
          immortaltitle:'海洋之恋',
          immortalprice1:'￥999',
          immortalprice2:'￥1399',
        },{
          id:'506',
          src:require('@/assets/immortal-7.jpg'),
          immortaltitle:'永生花 玻璃罩 礼盒',
          immortalprice1:'￥338',
          immortalprice2:'￥399',
        },{
          id:'507',
          src:require('@/assets/immortal-8.jpg'),
          immortaltitle:'十二星座红色永生玫瑰',
          immortalprice1:'￥268',
          immortalprice2:'￥328',
        }],
      }
    },
    methods:{
      tocommodity(msg){
        this.$router.push({
          path:'/plate/commodity',
          query:{
            id:msg.id,
            name:msg.title,
            price1:msg.price2,
            price2:msg.price1,
            //以下的还是从后台获取吧
            src:[{
              src:msg.src0
            },{
              src:msg.src1
            },{
              src:msg.src2
            }],
            material:msg.material,
            language:msg.language,
            packing:msg.packing
          }
        })
        
        
      }
    }
  }
</script>

<style>
  .nav {
    min-width: 1200px;
    height: 40px;
    margin-bottom: 2px;
    /*border-bottom: 2px solid #f76372;*/
  }
  .nav-wrapper > * {
    display: inline-block;
    line-height: 40px;
    font-size: 17px;
    font-weight: bold;
  }
  .nav-wrapper span {
    width: 280px;
    color: #fff;
    background-color: #f76372;
    border-bottom: 2px solid #f76372;
    text-align: center;
  }
  .nav-wrapper a {
    margin-left: 20px;
    padding: 0 15px;
  }
  .nav-wrapper a:hover {
    color: #f76372;
    border-bottom: 2px solid #f76372;
  }
  .nav-wrapper a:last-child {
    color: #f76372;
  }
  .nav-wrapper a:last-child:hover {
    border-bottom: none;
  }


  .carousel {
    background-color: rgba(247,99,114,0.1);
  }
  .carousel .el-carousel {
    width: 1200px;
    margin: 0 auto;
  }
  .el-carousel .el-carousel__container {
    margin-left: 350px;
  }
  .el-carousel__container .el-carousel__item {
    width: 75%;
  }
  .el-carousel__item {
    top: 20px;
  }
  .el-carousel__item img {
    height: 260px;
    width: 100%;
  }
  .el-carousel__item.is-active {
    transform: translateX(120px) scale(1) !important;
  }
  .el-carousel__indicators--outside {
    position: relative;
    left: 200px;
    top: 0;
  }
  .el-carousel__indicators--outside button {
    background-color: #f76372;
  }
  .el-carousel__button {
    height: 5px;
  }

  .el-carousel__container .left-nav {
    z-index: 20;
    position: relative;
    right: 350px;
    width: 280px;
    height: 329px;
    background-color: #fff;
    border-bottom: 2px solid #f76372;
    box-shadow: 0 2px 2px rgba(0,0,0,0.175);
  }
  .left-nav > * > .title {
    font-size: 16px;
    font-weight: 600;
    color: #f76372;
    text-align: center;
  }
  .left-nav > * > ul {
    width: 230px;
    margin: 8px auto;
  }
  .left-nav > * > ul > * {
    display: inline-block;
  }
  .left-nav > * > ul > * > a {
    font-size: 13px;
  }
  .left-nav > * > ul > * > a:hover {
    color: #f76372;
  }
  .left-nav .left-nav-variety a {
    margin-right: 20px;
  }
  .left-nav-variety .title {
    padding-top: 8px;
  }
  .left-nav-variety ul,
  .left-nav-purpose ul {
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(247,99,114,0.3);
  }
  .left-nav .left-nav-purpose a {
    margin-right: 25px;
  }
  .left-nav .left-nav-type a {
    margin-right: 35px;
  }
  .left-nav-type ul > li:nth-child(4) a {
    margin-right: 49px;
  }
  .left-nav-type ul > li:nth-child(5) a {
    margin-right: 32px;
  }
  .left-nav-variety ul > li:nth-child(4) a,
  .left-nav-variety ul > li:nth-child(8) a,
  .left-nav-purpose ul > li:nth-child(3) a,
  .left-nav-purpose ul > li:nth-child(6) a,
  .left-nav-type ul > li:nth-child(3) a,
  .left-nav-type ul > li:nth-child(6) a {
    margin: 0;
  }


  .top-server {
    margin-top: 25px;
  }
  .top-server .top-server-wrapper > * {
    float: left;
  }
  .top-server-wrapper > li:first-child {
    margin-left: 20px;
  }
  .top-server-wrapper > li:last-child {
    margin-right: 20px;
  }
  .top-server-wrapper > li:nth-child(2) {
    margin: 0 438px;
  }
  .top-server-wrapper > * > p:first-child {
    font-size: 20px;
  }
  .top-server-wrapper::after {
    content: '';
    display: block;
    clear: both;
  }



  .hot {
    margin-top: 60px;
    /*background-color: rgba(247,99,114,0.1);*/
  }
  .hot .hot-wrapper .hot-wrapper-title {
    font-size: 28px;
    line-height: 56px;
    font-weight: bold;
  }
  .hot-wrapper-title .fa-fire {
    margin-left: 1em;
    color: red;
  }
  .hot-wrapper ul > * {
    float: left;
    width: 232px;
    height: 360px;
    margin-right: 10px;
    box-sizing: border-box;
    border: 1px solid rgba(247,99,114,0.3);
  }
  .hot-wrapper ul > *:hover {
    border: 1px solid rgba(247,99,114,1);
  }
  .hot-wrapper ul > li:last-child {
    margin: 0
  }
  .hot-wrapper ul > * .hot-img {
    width: 100%;
    height: 260px;
    border-bottom: 1px solid rgba(247,99,114,0.2);
  }
  .hot-img a {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .hot-img img {
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .hot-wrapper ul > *:hover img {
    transform: scale(1.05);
  }
  .hot-wrapper ul > * .hot-msg {
    margin-top: 5px;
  }
  .hot-msg .hot-msg-head,
  .hot-msg .hot-msg-title,
  .hot-msg .hot-msg-price {
    text-align: center;
    margin-bottom: 5px;
  }
  .hot-msg-head span{
    display: inline-block;
    color: #fff;
    background-color: #f76372;
    padding: 2px 5px;
    font-size: 12px;
  }
  .hot-msg-title a {
    font-weight: bold;
  }
  .hot-msg-title a:hover {
    color: #f76372;
  }
  .hot-msg-price > span:first-child{
    font-size: 14px;
    color: #d4282d;
  }
  .hot-msg-price > span:nth-child(2){
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
  }
  .hot-msg-price .hot-msg-down {
    color: #ff6600;
    font-size: 12px;
    width: 5em;
    height: 2em;
    line-height: 2em;
    display: inline-block;
    border: 1px solid #ff6600;
    border-radius: 15px;
    position: relative;
    left: 1em;
  }
  .hot-wrapper ul::after {
    content: '';
    display: block;
    clear: both;
  }



  .time-limit {
    margin-top: 60px;
    padding-bottom: 60px;
    background-color: rgba(247,99,114,0.1);
  }
  .time-limit-title {
    font-size: 28px;
    line-height: 56px;
    padding-top: 50px;
    font-weight: bold;
  }
  .time-limit-title .fa-clock-o {
    margin-left: 1em;
    color: grey;
  }
  .time-limit ul > * {
    float: left;
    width: 232px;
    height: 360px;
    margin-right: 10px;
    box-sizing: border-box;
    border: 1px solid rgba(247,99,114,0.3);
  }
  .time-limit ul > *:hover {
    border: 1px solid rgba(247,99,114,1);
  }
  .time-limit ul > li:last-child {
    margin: 0
  }
  .time-limit ul > * .time-img {
    width: 100%;
    height: 260px;
    border-bottom: 1px solid rgba(247,99,114,0.2);
  }
  .time-img a {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .time-img img {
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .time-limit-wrapper ul > *:hover img {
    transform: scale(1.05);
  }
  .time-limit-wrapper ul > * .timelimit {
    padding-top: 5px;
    height: 98px;
    background-color: #fff;
  }
  .timelimit .timelimit-head,
  .timelimit .timelimit-title,
  .timelimit .timelimit-price {
    text-align: center;
    margin-bottom: 5px;
  }
  .timelimit-head span{
    display: inline-block;
    color: #fff;
    background-color: #f76372;
    padding: 2px 5px;
    font-size: 12px;
  }
  .timelimit-title a {
    font-weight: bold;
  }
  .timelimit-title a:hover {
    color: #f76372;
  }
  .timelimit-price > span:first-child{
    font-size: 14px;
    color: #d4282d;
  }
  .timelimit-price > span:nth-child(2){
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
  }
  .timelimit-price .timelimit-down {
    color: #ff6600;
    font-size: 12px;
    width: 5em;
    height: 2em;
    line-height: 2em;
    display: inline-block;
    border: 1px solid #ff6600;
    border-radius: 15px;
    position: relative;
    left: 1em;
  }
  .time-limit-wrapper ul::after {
    content: '';
    display: block;
    clear: both;
  }



  .love {
    margin-top: 60px;
    padding-bottom: 60px;
  }
  .love-title {
    font-size: 28px;
    line-height: 56px;
    font-weight: bold;
  }
  .love-title .fa-heart {
    margin-left: 1em;
    color: red;
  }
  .love ul > * {
    float: left;
    width: 240px;
    height: 320px;
    box-sizing: border-box;
    border: 1px solid rgba(247,99,114,0.3);
    margin-right: -1px;
    margin-bottom: -1px;
  }
  .love ul > *:hover {
    border: 1px solid rgba(247,99,114,1);
  }
  .love ul > li:first-child {
    border: none;
    height: 639px;
  }
  .love ul > li:first-child .love-left-img {
    width: 100%;
    height: 519px;
  }
  .love-left-img img {
    width: 100%;
    height: 100%;
  }
  .love ul > li:first-child .love-to {
    width: 100%;
    height: 120px;
    background-color: #f76372;
  }
  .love-to .love-to-title {
    color: #fff;
    font-size: 28px;
    text-align: center;
    padding-top: 40px;
  }
  .love ul > li .love-img {
    height: 260px;
    overflow: hidden;
    border-bottom: 1px solid rgba(247,99,114,0.2);
    margin-bottom: 5px;
  }
  .love ul > li .love-img img{
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .love ul > li:hover .love-img img {
    transform: scale(1.05);
  }
  .love ul > li .love-msg {
    height: 60px;
    text-align: center;
  }
  .love-msg .love-msg-title a {
    font-weight: bold;
  }
  .love-msg-title a:hover {
    color: #f76372;
  }
  .love-msg .love-msg-price span:first-child {
    font-size: 14px;
    color: #d4282d;
  }
  .love-msg-price > span:nth-child(2){
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
  }
  .love ul::after {
    content: '';
    display: block;
    clear: both;
  }



  .thanks {
    padding-bottom: 60px;
    padding-top: 60px;
    background-color: rgba(247,99,114,0.1);
  }
  .thanks-title {
    font-size: 28px;
    line-height: 56px;
    font-weight: bold;
  }
  .thanks-title .fa-smile-o {
    margin-left: 1em;
    color: orange;
  }
  .thanks ul > * {
    float: left;
    width: 240px;
    height: 320px;
    box-sizing: border-box;
    border: 1px solid rgba(247,99,114,0.3);
    margin-right: -1px;
    margin-bottom: -1px;
  }
  .thanks ul > *:hover {
    border: 1px solid rgba(247,99,114,1);
  }
  .thanks ul > li:first-child {
    border: none;
    height: 639px;
  }
  .thanks ul > li:first-child .thanks-left-img {
    width: 100%;
    height: 519px;
  }
  .thanks-left-img img {
    width: 100%;
    height: 100%;
  }
  .thanks ul > li:first-child .thanks-to {
    width: 100%;
    height: 120px;
    background-color: #4095bf;
  }
  .thanks-to .thanks-to-title {
    color: #fff;
    font-size: 28px;
    text-align: center;
    padding-top: 40px;
  }
  .thanks ul > li .thanks-img {
    height: 260px;
    overflow: hidden;
    border-bottom: 1px solid rgba(247,99,114,0.2);
  }
  .thanks ul > li .thanks-img img{
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .thanks ul > li:hover .thanks-img img {
    transform: scale(1.05);
  }
  .thanks ul > li .thanks-msg {
    height: 58px;
    padding-top: 5px;
    background-color: #fff;
    text-align: center;
  }
  .thanks-msg .thanks-msg-title a {
    font-weight: bold;
  }
  .thanks-msg-title a:hover {
    color: #f76372;
  }
  .thanks-msg .thanks-msg-price span:first-child {
    font-size: 14px;
    color: #d4282d;
  }
  .thanks-msg-price > span:nth-child(2){
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
  }
  .thanks ul::after {
    content: '';
    display: block;
    clear: both;
  }



  .immortal {
    margin-top: 60px;
    padding-bottom: 60px;
  }
  .immortal-title {
    font-size: 28px;
    line-height: 56px;
    font-weight: bold;
  }
  .immortal-title .fa-pagelines {
    margin-left: 1em;
    color: green;
  }
  .immortal ul > * {
    float: left;
    width: 240px;
    height: 320px;
    box-sizing: border-box;
    border: 1px solid rgba(247,99,114,0.3);
    margin-right: -1px;
    margin-bottom: -1px;
  }
  .immortal ul > *:hover {
    border: 1px solid rgba(247,99,114,1);
  }
  .immortal ul > li:first-child {
    border: none;
    height: 639px;
  }
  .immortal ul > li:first-child .immortal-left-img {
    width: 100%;
    height: 519px;
  }
  .immortal-left-img img {
    width: 100%;
    height: 100%;
  }
  .immortal ul > li:first-child .immortal-to {
    width: 100%;
    height: 120px;
    background-color: #72bc3b;
  }
  .immortal-to .immortal-to-title {
    color: #fff;
    font-size: 28px;
    text-align: center;
    padding-top: 40px;
  }
  .immortal ul > li .immortal-img {
    height: 260px;
    overflow: hidden;
    border-bottom: 1px solid rgba(247,99,114,0.2);
    margin-bottom: 5px;
  }
  .immortal ul > li .immortal-img img{
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
  .immortal ul > li:hover .immortal-img img {
    transform: scale(1.05);
  }
  .immortal ul > li .immortal-msg {
    height: 60px;
    text-align: center;
  }
  .immortal-msg .immortal-msg-title a {
    font-weight: bold;
  }
  .immortal-msg-title a:hover {
    color: #f76372;
  }
  .immortal-msg .immortal-msg-price span:first-child {
    font-size: 14px;
    color: #d4282d;
  }
  .immortal-msg-price > span:nth-child(2){
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
  }
  .immortal ul::after {
    content: '';
    display: block;
    clear: both;
  }
</style>