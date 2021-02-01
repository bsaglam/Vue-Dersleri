<template>
  <div>
      <strong>Child2</strong>
     <p>Child1 de butona basarsan aşağıdakid eğerin güncellendiğini göreceksin. </p>
     <strong>{{age}}</strong>
  </div>
</template>



<script>
import { eventCar }  from '../main'
export default {
    data : function(){
        return { age : "20"}
    },
   created()
   {
       eventCar.$on("transporter",(value)=>{
        this.age = value;
       })
   }
}
</script>

<style scoped>
div {
    border:1px solid black;
    width: 400px;
    height: 200px; 
    margin-top: 2px;
}
</style>
