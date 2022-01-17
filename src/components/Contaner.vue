<template>
  <div>
    <section v-if="step==0">
      <Post
        :postingData="postingData[i]" v-for="(a, i) in postingData" :key="i"/>  
    </section>
    <section v-if="step==1">
      <div :class="필터효과" class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="filters">
        <FilterBox :필터="필터" :이미지="이미지" :필터들="필터들" v-for="필터 in 필터들" :key="필터">
          <span>{{필터}}</span>
        </FilterBox>
      </div>
    </section>
    <section v-if="step==2">
      <!-- 글작성페이지 -->
      <div :class="필터효과" class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea> 
      </div>
    </section>
    <section v-if="step==3">
      <MyPage :one="1" />
    </section>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue"
import MyPage from './MyPage.vue'
export default {
  data() {
    return {
      필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      필터효과 : '',
    }
  },
  mounted() {
    this.emitter.on('선택필터',(a)=>{
      this.필터효과 = a;
    })
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  props: {
    postingData: Object,
    step : Number,
    이미지 : String,
  },
};
</script>