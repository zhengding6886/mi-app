<template>
  <div class="searchList clearfix">
    <ul class="itembox">
      <li v-for="(item,index) in data" :key="index">
        <div class="left">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95a1f7d7e835a572ff5b6003f25617f3.jpg"
          />
        </div>
        <div class="right">
          <h3>Redmi Note 8 Pro</h3>
          <p>6400万旗舰级全场景四摄 / 前置2000万 AI美颜相机 / G90T专业游戏处理器 / 6.53英寸水滴全面屏 / 4500mAh大电量 / 标配18W快充 / 康宁大猩猩保护玻璃 / 多功能NFC / 红外遥控功能 / Game Turbo2.0游戏加速</p>

          <div class="item-specs">
            <div>
              <span class="span-name">CPU</span>
              <span class="span-specs">MTK Helio</span>
            </div>
            <div>
              <span class="span-name">摄像头</span>
              <span class="span-specs">6400万+800万+200万</span>
            </div>
            <div>
              <span class="span-name">屏幕</span>
              <span class="span-specs">6.53英寸</span>
            </div>
          </div>

          <h2>￥1399起</h2>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: 10
    }
  }

}
</script>

<style  scoped>
.searchList {
  width: 100%;
  padding: 110px 0;
}
.itembox {
  width: 100%;
}
.itembox li {
  width: 100%;
  height: 320px;
  border-bottom: 2px solid #f4f4f4;
}
.itembox li .left {
  display: flex;
  float: left;
  width: 40%;
  height: 320px;
}
.itembox li .left img {
  height: 280px;
  margin: auto;
}
.itembox li .right {
  float: left;
  box-sizing: border-box;
  padding: 30px;
  width: 60%;
  height: 310px;
}
.itembox li .right h3 {
  color: rgba(0, 0, 0, 0.87);
  font-weight: normal;
}
.itembox li .right p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 28px;
  color: #ff6700;
}
.itembox li .right h2 {
  color: #ff6700;
  font-weight: normal;
}
.item-specs {
  width: 100%;
  padding: 10px;
  color: #adadad;
  text-align: center;
  column-width: 33.3%;
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid #adadad;
}
.item-specs div {
  display: block;
  width: 100%;
  height: 60p;
}

.item-specs span {
  display: block;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
