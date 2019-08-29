<template>
    <div class="nav">
        <div class="nav_search">
            热门搜索
        </div>
        <div class="swiper">
             <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dcde3c2759689ca39d2f60483b6684bb.jpg?w=1080&h=300&bg=C6E2EE" alt="">
        </div>
        <div class="nav_center">
              <ul>
                  <li v-for="(item , index) in arr" :key="index">{{item.name}}</li>
              </ul>
        </div>
        <div class="nav_catelist">
            <div class="catelist">
                常用分类
            </div>
            <div class="list">
                <ul>
                    <li><a href="javascript:">手机</a></li>
                    <li><a href="javascript:">电视</a></li>
                    <li><a href="javascript:">笔记本</a></li>
                    <li><a href="javascript:">盒子</a></li>
                    <li><a href="javascript:">路由器</a></li>
                    <li><a href="javascript:">平板</a></li>
                    <li><a href="javascript:">手表</a></li>
                    <li><a href="javascript:">VR</a></li>
                    <li><a href="javascript:">耳机</a></li>
                    <li><a href="javascript:">穿戴</a></li>
                    <li><a href="javascript:">空气净化器</a></li>
                    <li><a href="javascript:">空调</a></li>
                    <li><a href="javascript:">洗衣机</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {id: 0, name: 'Redmi Note 7 Pro'},
        {id: 1, name: '小米蓝牙耳机K歌版'},
        {id: 2, name: '保温杯'},
        {id: 3, name: '扫地机器人1S'},
        {id: 4, name: '小米CC9e'},
        {id: 5, name: '小米手环4'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    .nav{
        width: 100%;
        height:700px;
    .nav_search{
            width: 100%;
            font-size: 28px;
            text-align: left;
            padding: 30px;
            color: #666;
        }
    .swiper img{
            width: 100%;
            height:210px;
            display: block;

          }
    .nav_center{
          width: 100%;
          height:170px;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                margin-left:30px;
                margin-top:20px;
                width:210px;
                height:60px;
                border:1px solid rgb(151, 194, 138);
                // background: rgb(243, 178, 203);
                text-align: center;
                line-height: 60px;
                text-align: center;
                font-size: 24px;
            }
        }
    }
    .nav_catelist {
            width: 100%;
            height:250px;
        .catelist{
              width: 100%;
              height:80px;
              line-height: 80px;
              padding-left: 30px;
              font-size:24px;
              color: #444;

        }
        .list{
            ul{
                li{
                 width:120px;
                 height: 40px;
                 float: left;
                 line-height: 40px;
                 font-size: 24px;
                 text-align: center;
                 margin-left:20px;
                //  background: #999;

                 a{
                     color: #777;
                 }
                }
            }
        }
    }
    }
</style>
