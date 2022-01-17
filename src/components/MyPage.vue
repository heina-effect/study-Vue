<template>
  <!-- 검색기능 삭제기능 팔로워페이지  -->
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="doThis" v-model="search" placeholder="?" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url('${a.image}')`"></div>
      <span class="profile-name">{{a.name}}</span>
    </div>
  </div>
</template>
<script>
import {computed, onMounted, ref, toRefs} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex'

export default {
    name : "MyPage",
    data(){
        return {
            search : " ",
        }
    },
    props: {
        one : Number,
    },
    setup(props) {
        let follower = ref([]);

        let{one} = toRefs(props);
        console.log(one.value)

        let 결과 = computed(()=>{return follower.value.length})
        console.log(결과.value)
        //값이 0 나오는 이유는 follower 값을 가져오기 전이라서 

        let store = useStore();
        console.log(store.state.name)

        onMounted(()=>{
            axios.get('./follower.json').then((a)=>{
                follower.value = a.data
            })
        })

        function doThis(query){
            return follower.value.filter(
                function(el){
                    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
                }
            )
        }

        return {follower, doThis}
    },
}
</script>
<style>
</style>