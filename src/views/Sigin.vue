<template>
    <div id="sigin">
        <h2>Sigin</h2>
        <form @submit.prevent="createAccount" class="form">
            <fieldset>
                <label>Name</label>
                <input v-model="name" type="text" placeholder="Name" required/>

                <label>Email</label>
                <input v-model="email" type="email" placeholder="Email" required/>

                <label>Password</label>
                <input v-model="password" type="password" placeholder="Password" required/>

                <label>Confirm your password</label>
                <input v-model="passwordconf" type="password" placeholder="Password" required/>
                
                <button>Create an account</button>
                <p><router-link to="/Connexion">Login</router-link></p>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            email: '',
            password: '',
            passwordconf: '',
        }
    },
    methods : {
        createAccount(){
            if(this.password == this.passwordconf){
                this.$store.commit(
                    'addUser', 
                    {
                        name : this.name, 
                        email : this.email,
                        password : this.password,
                    }
                );
                alert("Your account has been create.");
                this.$router.push('/Connexion');
            }else{
                alert("Your passwords are not same.")
            }
        }
    }
}
</script>