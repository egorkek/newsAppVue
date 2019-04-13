<template>
  <div class="wrapper">
    <header>
      <ul>
        <li v-for="link in links">
          <router-link active-class="active" exact :to='`${link.url}`' :key="link.title">
            {{link.title}}
          </router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {title: 'Новости', url: '/'},
        {title: 'Добавить новость', url: '/newnews'},
      ]
    }
  },
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  .wrapper{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  header{
    padding: 5px;
    text-align: center;
    margin: 0;
    border-bottom: 1px solid #eee;
    box-shadow: 5px 5px 5px rgba(0,0,0, .3);
  }
  ul{
    list-style: none;
    padding: 0;
    }
  li{
    display: inline;
    }
  a{
    text-decoration: none;
    color: inherit;
    font-size: 15px;
    font-weight: bold;
    border: 1px solid #123446;
    padding: 8px;
    border-radius: 5px;
    margin: 2px;
  }
  .active{
    background-color: cornflowerblue;
    color: white;
  }
</style>
