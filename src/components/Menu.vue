<template>
  <ul @click="(e)=>changeTypeClickHandler(e)">
    <li>Бизнес</li>
    <li>Общие</li>
    <li>Здоровье</li>
    <li>Технологии</li>
    <li>Все новости</li>
  </ul>
</template>

<script>
export default {
  methods:{
    changeTypeClickHandler: function (e) {
      this.$store.commit('changeType', e.target.innerText)
    }
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
    padding: 0;
    text-align: center;
  }
  li{
    display: inline-block;
    margin: 5px ;
  }
</style>
