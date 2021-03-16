<template>
    <div>
        <div id="creer-bc" v-if="show">
            <section>
                <button class="close" @click="hideForm">✕</button>
                <h2>Create a buisness card</h2>
                <form @submit.prevent="createBc" class="form">
                    <fieldset>
                        <label>Campagny</label>
                        <input v-model="compagny" type="text" placeholder="Compagny"/>

                        <label>Name</label>
                        <input v-model="name" type="text" placeholder="Name"/>
                        
                        <label>Email</label>
                        <input v-model="email" type="email" placeholder="Email"/>

                        <label>Tel</label>
                        <input v-model="tel" type="number" placeholder="Tel"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        maxlength="10"/>

                        <button>Create your Buisness card</button>
                        <button class="button button-clear" type="button" @click="hideForm">Cancel</button>
                    </fieldset>
                </form>
            </section>
        </div>
        <template v-else>
            <button @click="showForm">Create a new Buisness card</button>
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
            compagny: '',
            name:'',
            email:'',
            tel:'',
        }
    },
    mounted(){
        this.$bus.$on('show-create-bc',this.showForm)
    },
    methods :{
        createBc(){
            this.$store.commit(
                    'addBc', 
                    {
                        compagny : this.compagny, 
                        name : this.name,
                        email : this.email,
                        tel : this.tel,
                    }
                );
            this.hideForm();
            this.$bus.$emit('load-bc');
        },
        showForm(){
            this.compagny =  '';
            this.name = '';
            this.email = '';
            this.tel = '';
            this.show = true;
        },
        hideForm(){
            this.show = false;
        }
    }
}
</script>

<style lang="scss">
#creer-bc{
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    & > section{
        z-index: 2;
        position: absolute;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        background-color: white;
        border-radius: 10px;
        padding: 2%;
        .close{
            position: absolute;
            top: -1em;
            right: -1em;
            width: 3em;
            height: 3em;
            font-size: 1em;
            line-height: 0;
            margin: 0;
            padding: 0;
            border-radius: 50%;   
        }
        form{
            box-shadow: none;
        }
        h2{
            text-align: center;
        }
    }
}
</style>