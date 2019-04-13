<template>
  <div class="item" v-if="!isChanging" >
    <div class="task_info">
      <div class="task_type">{{tasks.type}}</div>
      <button class="close" @click="onClose">x</button>
    </div>
    <h1>{{tasks.title}}</h1>
    <div>
      <p>{{tasks.description}}</p>
      <button class="cust" v-on:click="onCustClickHandler">ред.</button>
    </div>
  </div>
  <section v-else>
    <label for=""> Название </label>
    <input type="text" v-model="title">
    <label>Описание</label>
    <textarea name="" id="" cols="30" rows="5" v-model="description"></textarea>
    <div class="checkboxes">
      <form >
        <label for="buisness">
          <input id="buisness" type='radio' value="Бизнес" v-model="type">
          Бизнес
        </label>
        <label for="tech">
          <input type="radio" value="Технологии" id="tech" v-model="type">
          Технологии</label>
        <label for="All">
          <input type="radio" value="Общие" id="All" v-model="type">
          Общие</label>
        <label for="health">
          <input type="radio" value="Здоровье" id="health" v-model="type">
          Здоровье</label>
      </form>
    </div>
    <button class="send" @click="onEditButtonClickHandler">send</button>
  </section>
</template>

<script>
  import FormForNewFilm from './FormForNewFilm'
  import {CHANGE_NEWS} from "../store/actionTypes";
  export default {
    components: {FormForNewFilm},
    data(){
      return{
        isChanging: false,
        type:this.tasks.type,
        title: this.tasks.title,
        description: this.tasks.description
      }
    },
    props:['tasks', 'index', 'onClickHandler', 'onClose'],
    methods:{
      onCustClickHandler: function () {
        this.isChanging = true;
      },
      onEditButtonClickHandler: function () {
        this.isChanging = false;
        const changedNews = {
          type: this.type,
          title: this.title,
          description: this.description
        };
        this.$store.dispatch(CHANGE_NEWS, {changedNews, index:this.index})
      },
    }
  }
</script>

<style scoped>
  .task_type{
    padding: 5px 10px;
    background-color: gray;
    display: inline;
    color: white;
    margin-right: 8px;
  }
  .item{
    margin-bottom: 15px;
    border: 1px solid cornflowerblue;
    padding: 20px 10px 10px 10px;
    width: 70%;
    border-radius: 5px;
  }
  .cust{
    float: right;
    background-color: white;
    border: none;
  }
  .close{
    font-size: 20px;
    display: inline-block;
    overflow: hidden;
    opacity: .7;
    background-color: inherit;
    border: none;
  }
  .task_info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 520px) {
    .item{
      width: 90%;
    }
  }
  section{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 10px;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  section *{
    margin-bottom: 5px;
  }
  input{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
  }
  input:focus{
    outline: none;
  }
  textarea{
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    outline: none;
  }
  textarea:focus{
    outline: none;
  }
  .checkboxes{
    display: flex;
  }
  input[type='radio']{
    margin-right: 0px;
  }
  .send{
    padding: 10px;
    background-color: blueviolet;
    border: none;
    border-radius: 15px;
    color: white;
  }
</style>
