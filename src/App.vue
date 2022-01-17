<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step==1" @click="step++">Next</li>
        <li v-if="step==2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- <h4>이름 : {{name}}</h4>
    <h4>나이 : {{age}}</h4>
    <button @click="나이추가()">나이추가</button> -->

    <!-- <p>{{$store.state.more}}</p>
    <button @click="$store.dispatch('getData')">더보기버튼</button> -->

    <Container :postingData="postingData" :step="step" :이미지="이미지" @write="작성한글=$event"/>
    <button @click="more">더보기</button>
    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile"/>
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

  </div>
</template>
<script>
import Container from "./components/Contaner.vue";
import postingData from "./assets/postingData.js";
import {mapMutations, mapState} from 'vuex';
import axios from 'axios'
axios.post()

export default {
  name: "App",
  data() {
    return {
      postingData: postingData,
      더보기 : 0,
      step : 3,
      이미지 :  '',
      작성한글 : '',
      필터효과 : '',
    };
  },
  mounted() {
    this.emitter.on('선택필터',(a)=>{
      this.필터효과 = a;
    })
  },
  components: {
    Container,
  },
  computed : {
    ...mapState(['name', 'age', 'likes']),
  },
  methods: {
    ...mapMutations(['나이추가', '좋아요']),
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then((result)=>{
        this.postingData.push(result.data);
        this.더보기++;
      }) 
    },
    upload(e){
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]); //url을 생성해준다
      console.log(url);
      this.이미지 = url;
      this.step = 1;
      //this.step++;
    },
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.필터효과,
      };
      this.postingData.unshift(내게시물);
      this.step = 0;
    }
  },
};
</script>

<style>
@import "style.css";
</style>
