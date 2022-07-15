<template>
  <div class="main">
    <Head></Head>
    <div class="main-content">
      <Left></Left>
      <div class="content-wrap">
        <Top></Top>
        <Bottom></Bottom>
      </div>
      <Right></Right>
    </div>
  </div>
</template>

<script  lang="ts">
import HelloWorld from "../../components/HelloWorld.vue";
import Bottom from "./Bottom.vue";
import Head from "./Head.vue";
import Left from "./Left.vue";
import Right from "./Right.vue";
import Top from "./Top.vue";
// import * as echarts from 'echarts';
// import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';
export default defineComponent({
    name: "",
    components: { HelloWorld, Head, Left, Right, Bottom, Top },
    setup() {
        const data = reactive({});
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
.main {
  background: rgb(10, 10, 35);
  font-size: 18px;
  .main-content {
    display: flex;
    justify-content: space-between;
    .content-wrap {
      flex-grow: 1;
      margin-top: 22px;
      // width: 693px;
      height: 926px;
    }
  }
}
</style>
