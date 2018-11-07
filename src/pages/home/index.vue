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
      <!-- 导航分类 -->
      <div class="navi">
        <div class="item">蔬菜</div>
        <div class="item">肉禽</div>
        <div class="item">水产</div>
        <div class="item">水果</div>
        <div class="item">乳品</div>
        <div class="item">休闲零食</div>
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
  background-color: #F2F2F2;
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

/* 导航分类 */
.navi {
  width: 100%;
  height: 300rpx;
  background-color: black;
}

.item {
  width: 20%;
  height: 150rpx;
  float: left;
  background-color: #fff;
  padding: 10rpx;
}
</style>
