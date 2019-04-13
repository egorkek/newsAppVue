import Vue from 'vue'
import Vuex from 'vuex'
// const URL = 'https://newsapp-f0be6.firebaseio.com/news';
Vue.use(Vuex)
const store= new Vuex.Store({
  state:{
    loading:false,
    type: 'Все новости',
    myNews:[
      {
        "title": "Новость по теме бизнеса",
        "description": "описание новости по теме бизнес",
        "type": "Бизнес"
      },
      {
        "title": "Новость по темеРазвлечения",
        "description": "описание новости по теме Развлечений",
        "type": "Развлечения"
      },
      {
        "title": "Новость по теме Технологии",
        "description": "описание новости по теме Технологий",
        "type": "Технологии"
      },
      {
        "title": "Новость по теме Общие",
        "description": "описание новости по теме Общие",
        "type": "Общие"
      },
      {
        "title": "Новость по теме Здоровье",
        "description": "описание новости по теме Здоровье",
        "type": "Здоровье"
      }
    ]
  },
  mutations:{
    addNewTaskHandler(state, payload){
      const myNews = state.myNews.unshift(payload);
      return{
        ...state,
        myNews
      }
    },
    fetchNewsStart(state){
      Vue.set(state, 'loading', true);
    },
    fetchNewsSuccess(state, payload){
      Vue.set(state, 'loading', false);
      Vue.set(state, 'myNews', payload);
    },
    changeTaskHandler(state, payload){
      Vue.set(state, 'myNews', [...payload])
    },
    deletedTask(state,payload){
      Vue.set(state,'myNews',[...payload])
    },
    changeType(state, payload){
      Vue.set(state,'type', payload)
    }
  },
  actions:{
    CHANGE_NEWS: function ({commit, state}, payload) {
      const newMyNews = state.myNews;
      newMyNews[payload.index]= payload.changedNews;
      commit('changeTaskHandler', newMyNews)
    },
    DELETE_NEWS: function ({commit, state}, payload) {
      const newMyNews = state.myNews;
      newMyNews.splice(payload, 1);
      commit('deletedTask', newMyNews)
    },
    // GET_NEWS: function ({commit}) {
    //   commit('fetchNewsStart');
    //   axios.get(`${URL}.json`)
    //     .then(res=>res.data)
    //     .then(res=> {
    //       commit('fetchNewsSuccess', res)
    //     })
    // },
    PUSH_NEWS: function ({commit}, payload) {
      console.log(payload);
      commit('addNewTaskHandler', payload)

    }
  },
  getters:{
    myNews: state=> state.myNews,
    type: state => state.type,
    loading: state => state.loading
  }
})
export default store
