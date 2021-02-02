<template>
    <div>
    <Parent>
      <h1 slot="heading">Burası paragraf</h1>
      <p slot="content">burası içerik</p>
    </Parent>
  </div>
</template>

<script>
import Parent from '../src/components/Parent'
export default {
  components : { Parent : Parent }
   }
</script>

<style scoped>
 div{
     height: 600px;
     width: 500px;
     border:1px solid black;
     
 }
</style>