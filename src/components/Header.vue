<template>
    <div id="nav">
      <div id="logout">
        <button @click="deconnexion">Logout</button>
      </div>
    </div>
</template>

<script>
export default {
    methods : {
      deconnexion(){
        this.$store.commit('setDeconnexion');
        this.$router.push('/Connexion');
      }
  },
}
</script>

<style lang="scss">
#nav{
    display: block;
    height: 4.5em;
    max-width: 200px;
    font-size: 1em;
    padding: 1em;
    margin: 0 0 50px auto;
    text-align: center;
    border-radius: 0 0 10px 10px;
    background-color: white;
    box-shadow: rgb(200, 200, 200) 1px 1px 20px;
    & > div{
        padding: 0 1em;
    }
}
#logout{
    margin-left: auto;
}
</style>