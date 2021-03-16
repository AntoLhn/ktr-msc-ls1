<template>
  <div id="app">
    <Header v-if="this.$store.state.connexion"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components : {
    Header
  },
  data(){
    return{
      //Définition des users (++ récupérer depuis une API)
      user: [
        {name : "John", email : "john@example.com", password : "password"},
        {name : "Doe", email : "doe@example.com", password : "password"},
      ],
      //Définition des Buisness cards (++ récupérer depuis une API)
      bc: [
        {compagny : "Internet Industry", name : "Pierre", email : "pierre@example.com", password : "password", tel : "0645328356"},
        {compagny : "Paul Communication", name : "Paul", email : "paul@example.com", password : "password", tel : "0654237654"},
        {compagny : "Web 4.0", name : "Jack", email : "jack@example.com", password : "password", tel : "0690431210"},
      ]
    }
  },
  mounted(){
    //Redirection des routes si pas connecté
    if(!this.$store.state.connecte){
      if(this.$route.path != '/Connexion' && this.$route.path != '/Sigin'){
        this.$router.push('/Connexion');
      }
    } else {
      this.$store.commit('deconnexion');
      this.$router.push('/Connexion');
    }

    //Chargement du bus pour la liste des users
    this.loadUsers();
    this.$bus.$on('load-users', this.loadUsers);

    //Chargement du bus pour la liste des bc
    this.loadBc();
    this.$bus.$on('load-bc', this.loadBc);
  },
  methods : {
    //Chargement de la liste des users
    loadUsers(){
      this.$store.commit('setUsers', this.user);
    },
    //Chargement de la liste des bc
    loadBc(){
      this.$store.commit('setBc', this.bc);
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  background-color: rgb(250, 250, 250);
}
#app {
  padding: 0 2em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .form{
    width: 400px;
    margin: 0 auto;
    padding: 2%;
    border-radius: 10px;
    box-shadow: rgb(190, 190, 190) 1px 1px 100px;
  }
  #creer-bc .form{
    box-shadow: none;
  }
  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #connexion, #inscription{
    h2{
      margin-top: 20vh;
      text-align: center;
    }
  }
}
</style>