<template>
  <div>
     <p>Parent component'ten gelen props: <strong>{{name}}</strong></p>
     <p>yukarıda parent tan gelen veriyi burdaki method ters çeviriyor:<strong> {{reverseName()}}</strong></p>
  </div>
</template>

<script>
export default {
   props : ["name"], /* Parent componenet ten gelen props bu şekilde alınır*/
   methods : {
      reverseName(){
         return this.name.split("").reverse().join("");
      }
   }
}
</script>

<style scoped>
div {
    border:1px solid black;
    width: 400px;
    height: 200px; 
    margin-top: 2px;
    background-color:darksalmon;
}
</style>
