<template>
    <div class="row">
        <div class="column">
            <h3>{{bc.compagny}}</h3>
            <hr>
            <p>Name : {{bc.name}}</p>
            <p>Email : {{bc.email}}</p>
            <p>Tel : {{bc.tel}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props : ['bc'] 
}
</script>

<style lang="scss">
 #business-cards .column-20, #business-cards .column{
     margin-bottom: initial;
 }
 #business-cards .row{
     width: 55vw;
     padding: 1em;
     margin: 3em 0;
     border-radius: 10px;
     box-shadow: rgb(225, 225, 225) 1px 1px 20px;
     p{
        font-size: 0.9em;
        font-style: italic;
        font-weight: 300;
        margin-bottom: 0.5em;
     }
 }
 #business-cards .column-20{
     text-align: end;
 }
 #business-cards hr{
    margin: 0;
    margin-right: 70%;
    border-top-color: #dfdfdf;
    margin-bottom: 1em;
 }
</style>