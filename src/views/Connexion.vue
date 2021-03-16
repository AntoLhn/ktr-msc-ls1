<template>
    <div id="connexion">
        <h2>Connexion</h2>
        <form @submit.prevent="connexion" class="form">
            <fieldset>
                <label>Email</label>
                <input v-model="email" type="email" placeholder="Email"/>

                <label>Password</label>
                <input v-model="password" type="password" placeholder="Mot de passe"/>
                
                <button>Connexion</button>
                <p><router-link to="/Sigin">Sigin</router-link></p>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: 'john@example.com',
            password: 'password',
        }
    },
    methods: {
        connexion(){
            for(const user of this.$store.state.users){
                if(user.email == this.email && user.password == this.password){
                    this.$store.commit('setConnexion');
                    this.$router.push('/Home');
                    break;
                }else{
                    alert("Connexion error");
                }
            }
        }
    }
}
</script>