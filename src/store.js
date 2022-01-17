import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        name: "곽두팔",
        age : 43,
        likes : 43,
        좋아요눌렀니 : false,
        more : {},
    }
  },
  mutations : {
    setMore(state, data){
      state.more = data
    },
    나이추가 (state){
      state.age++;
    },
    /* 좋아요(state){
      if (!this.isActive) {
        this.isActive = true;
        state.likes++;
      } else {
        this.isActive = false;
        state.likes--;
      }
    } */
    좋아요(state){
      if(state.좋아요눌렀니 == false){
        state.likes++;
        state.좋아요눌렀니 = true;
      }else{
        state.likes--;
        state.좋아요눌렀니 = false;
      }
    },
  },
  actions : {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then((a)=>{
        context.commit('setMore', a.data)
      })
    }
  }
})

export default store;