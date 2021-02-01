<template>
  <div>
    <p>burası parent</p>
     <child1></child1>
     <Child2></Child2>
  </div>
</template>



<script>
import Child1 from './Child1'
import Child2 from './Child2'
export default {
   
   components : {'child1': Child1, 'Child2':Child2},
       
   
}
</script>

<style scoped>
 div{
     height: 600px;
     width: 500px;
     border:1px solid black;
 }
</style>
