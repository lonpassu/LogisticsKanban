<template>
  <div class="header">
    <div class="header-center">
      <div class="header-item">
        <span class="first-child">物流看板</span>
        <img src="../../assets/images/head2.png" alt="">
      </div>
      <div  class="header-item">
        <span>铁路</span>
        <img src="../../assets/images/head3.png" alt="">
      </div>
      <div class="header-item">
        <span>车队</span>
        <img src="../../assets/images/head3.png" alt="">
      </div>
    </div>
    <div class="header-right">
      <div class="weather-item">
        <img src="../../assets/icon/yun.png" alt="">
        <span>6月20日</span>
        <span>多云 24℃~36℃</span>
      </div>
      <div class="weather-item">
        <img src="../../assets/icon/yin.png" alt="">
        <span>6月21日</span>
        <span>阴 22℃~32℃</span>
      </div>
      <div class="weather-item">
        <img src="../../assets/icon/qing.png" alt="">
        <span>6月22日</span>
        <span>晴 24℃~36℃</span>
      </div>
      <div class="weather-item">
        <img src="../../assets/icon/qing.png" alt="">
        <span>6月23日</span>
        <span>晴 24℃~36℃</span>
      </div>
      <div class="weather-item">
        <img src="../../assets/icon/qing.png" alt="">
        <span>6月24日</span>
        <span>晴 24℃~36℃</span>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: '',
  setup() {
    const data = reactive({})
    onMounted(() => {

    });
    onUnmounted(() => {
    });
    return {
        ...toRefs(data)
    };
  },
 });
</script>

<style lang="scss" scoped>
.header {
    // 最宽1920
  width: 100%;
  height: 110px;
  display: flex;
  background-image: url('../../assets/images/head1.png');
  background-size: 100% 110px;
  .header-center {
    display: flex;
    padding-top: 12px;
    margin-left: 699px;
    .header-item {
      position: relative;
      width: 155px;
      height: 54px;
      margin-right: -22px;
      span {
        position: absolute;
        top: 18px;
        left: 58px;
        color: #999999;
      }
      .first-child {
        left: 38px;
        color: #ffffff;
      }
      img {
        width: 155px;
        height: 54px;
      }
    }
  }
  .header-right {
    display: flex;
    margin-left:auto;
    // margin-right:33px;
    padding: 17px 0;
    img {
      width: 32px;
      height: 26px;
    }
    .weather-item {
      width: 135px;
      height: 76px;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      margin-right:23px;
      span {
        display: block;
      }
    }
  }

}
</style>
