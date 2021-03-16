<template>
    <div id="business-cards">
        <h2>Business cards</h2>
        <CreateBc/>
        <div>
            <template v-for="bc in $store.state.bc">
              <Bc :bc="bc" id="bc"/>
            </template>
        </div>
    </div>
</template>
<script>
import CreateBc from '@/components/CreateBc.vue'
import Bc from '@/components/Bc.vue'

export default {
    components:{
      Bc,
      CreateBc,
    }
}
</script>