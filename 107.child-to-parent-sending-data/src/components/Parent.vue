<template>
    <div>
        <Child @data="fromChild=$event"></Child>
        <p>{{fromChild}}</p>
    </div>
</template>

<script>
import Child from './Child'
 
export default {
   components : {'Child': Child},
   data: function(){
       return { fromChild : "burcu"}
   }
}
</script>

<style scoped>
 div{
     height: 400px;
     width: 500px;
     border:1px solid black;
 }
</style>