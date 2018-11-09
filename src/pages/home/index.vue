<template>
  <div>
    <!-- 主区域 -->
    <div class="main-part">
      <!-- topbar -->
      <div class="topbar">
        <div class="location fl">
          <img class="location-icon" src="../../assets/home/location.png" alt="">
          定位
          </div>
        <div class="search">请输入商品名称</div>
      </div>
      <!-- 轮播图 -->
      <div class="swipe">
        <img class="swipe-item" src="../../assets/home/swipe01.png" alt="">
      </div>
      <!-- 广告图 -->
      <img class="ad" src="../../assets/home/swipe02.jpg" alt="">
      <!-- 导航分类 -->
      <div class="navi">
        <div class="item">
          <img class="item-icon" src="../../assets/home/nav01.png" alt="">
          <p class="item-name">蔬菜</p>
        </div>
        <div class="item">
          <img class="item-icon" src="../../assets/home/nav02.png" alt="">
          <p class="item-name">肉禽</p>
        </div>
        <div class="item">
          <img class="item-icon" src="../../assets/home/nav03.png" alt="">
          <p class="item-name">水产</p>
        </div>
        <div class="item">
          <img class="item-icon" src="../../assets/home/nav04.png" alt="">
          <p class="item-name">水果</p>
        </div>
        <div class="item">
          <img class="item-icon" src="../../assets/home/nav05.png" alt="">
          <p class="item-name">乳品</p>
        </div>
        <div class="item">
          <img class="item-icon" src="../../assets/home/nav06.png" alt="">
          <p class="item-name">休闲零食</p>
        </div>
      </div>
    </div>
    <!-- 其他功能区域 -->
    <div class="deputy-part">
      <!-- 限时抢购 -->
      <div class="sale">
        <!-- title -->
        <div class="part-title-wrap">
          <div class="part-title fl">
            <div class="part-title-txt fl">限时抢购</div>
            <!-- 倒计时 -->
            <div class="part-count-down fl">
              <div class="part-count-down-item">01</div>
              <div class="part-count-down-divide">:</div>
              <div class="part-count-down-item">23</div>
              <div class="part-count-down-divide">:</div>
              <div class="part-count-down-item">21</div>
            </div>
          </div>
          <div class="part-more fr">更多</div>
        </div>
        <!-- 限时抢购产品 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.main-part {
  background-color: #fff;
}

.topbar {
  width: 100%;
  height: 80rpx;
  /* background-color: red; */
  line-height: 80rpx;
  text-align: center;
  overflow: hidden;
}

.location {
  min-width: 100rpx;
  height: 80rpx;
  padding: 0 20rpx 0 60rpx;
  position: relative;
}

.location-icon {
  display: block;
  width: 40rpx;
  height: 40rpx;
  position: absolute;
  top: 20rpx;
  left: 20rpx;
}

.search {
  height: 60rpx;
  line-height: 60rpx;
  margin: 10rpx 10rpx 0 0;
  overflow: auto;
  border-radius: 40rpx;
  background-color: #f2f2f2;
}

/* 轮播 */
.swipe {
  width: 100%;
  height: 300rpx;
  background-color: cyan;
  border-radius: 30rpx;
  overflow: hidden;
}

.swipe-item {
  display: block;
  width: 100%;
  height: 300rpx;
}

/* 广告图 */
.ad {
  width: 100%;
  height: 300rpx;
}

/* 导航分类 */
.navi {
  width: 100%;
  /* height: 300rpx; */
  /* background-color: black; */
  overflow: hidden;
}

.item {
  width: 20%;
  height: 180rpx;
  float: left;
  background-color: #fff;
  padding: 10rpx;
}

.item-icon {
  width: 100rpx;
  height: 100rpx;
  margin: 0 auto;
}

.item-name {
  text-align: center;
  font-size: 24rpx;
  margin-top: 20rpx;
  color: #000;
}

/* 其他功能区域 */
.deputy-part {
}

/* 限时抢购 */
.sale {
  width: 100%;
  height: 200rpx;
  margin-top: 20rpx;
  background-color: #fff;
  overflow: hidden;
  padding: 10rpx;
}

.part-title-wrap {
  width: 100%;
  height: 60rpx;
  background-color: #fff;
  line-height: 60rpx;
}

.part-title {
  padding-left: 20rpx;
  position: relative;
}

.part-title::before {
  display: block;
  content: '';
  width: 10rpx;
  height: 30rpx;
  position: absolute;
  top: 15rpx;
  left: 0;
  background-color: #22bb06;
}

.part-title-txt {
  font-size: 32rpx;
  font-weight: 700;
  color: #000;
}

.part-more {
  padding-right: 20rpx;
  color: #22bb06;
  font-weight: 600;
}

.part-count-down {
  height: 40rpx;
  margin-left: 20rpx;
}

.part-count-down-item {
  display: inline-block;
  width: 50rpx;
  height: 40rpx;
  background-color: #000;
  line-height: 40rpx;
  text-align: center;
  color: #fff;
  border-radius: 10rpx;
}
.part-count-down-divide {
  display: inline-block;
  width: 15rpx;
  height: 40rpx;
  background-color: #fff;
  line-height: 40rpx;
  text-align: center;
  color: #000;
  font-size: 30rpx;
}
</style>
