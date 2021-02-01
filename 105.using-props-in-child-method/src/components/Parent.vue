<template>
  <div>
     <p>{{title}}</p>
     <Child :name="title"></Child>
     <Child2 :name="title"></Child2>
  </div>
</template>

<script>
import Child from './Child'
import Validation from './ChildForValidation'
export default {
   components : {'Child': Child, 'Child2':Validation},
   data: function(){
       return { title : "burcu"}
   }
}
</script>

<style lang="scss" scoped>
 div{
     height: 600px;
     width: 500px;
     border:1px solid black;
 }
</style>
