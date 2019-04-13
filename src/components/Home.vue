<template>
  <section>
    <Menu/>
      <Loader v-if="this.$store.getters.loading"></Loader>
      <OneTask
        v-for="(o, index) in news"
        :tasks="o"
        :index="index"
        :key="o.title"
        :onClose="()=>onCloseButtonClickHandler(index)"
        :onClickHandler="onClickHandler"
        ></OneTask>
  </section>
</template>

<script>
  import {DELETE_NEWS} from "../store/actionTypes";
  import {Menu, Loader, OneTask} from './index.js'

  export default {
    components: {OneTask, Menu, Loader},
    computed: {
      news: function () {
        const type = this.$store.getters.type;
        const news = this.$store.getters.myNews;
        if (type === 'Все новости') {
          return news
        } else{
          const typedNews = [];
          news.forEach((el)=>{
            if (el.type === type){
              typedNews.push(el);
            }
          });
          return typedNews;
        }
      }
    },
    created: function(){
      // this.$store.dispatch(GET_NEWS)
    },
    methods:{
      onClickHandler: function (index) {
        this.tasks.splice(index,1);
      },
      onCloseButtonClickHandler: function (index) {
        this.$store.dispatch(DELETE_NEWS, index);
      }
    }
  }
</script>

<style scoped>
  section{
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>

