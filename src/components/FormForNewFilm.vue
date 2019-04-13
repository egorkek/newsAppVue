<template>
  <section>
    <h1>Новая запись</h1>
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
    <button @click="sendNews">send</button>
  </section>
</template>

<script>
  import {PUSH_NEWS} from "../store/actionTypes";

  export default {
    data(){
      return{
        title:'',
        description:'',
        type: '',
      }
    },
    methods:{
      sendNews: function () {
        const newFilm = {
          title: this.title,
          description: this.description,
          type:this.type
        };
        if (newFilm.title !== '' && newFilm.description !== '' && newFilm.type !== '') {
          this.$store.dispatch(PUSH_NEWS, newFilm);
          this.title = '';
          this.description = '';
        } else {
          alert('Заполните все поля')
        }
      }
    }
  }
</script>

<style scoped>
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
    margin-bottom: 10px;
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
  button{
    padding: 10px;
    background-color: blueviolet;
    border: none;
    border-radius: 15px;
    color: white;
  }
</style>
