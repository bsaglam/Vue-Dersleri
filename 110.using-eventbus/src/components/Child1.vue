<template>
  <div>
      <strong>Child1</strong>
     <p> age : {{age}}</p>
     <button @click="sendChild()">Tıkla ve veriyi diğer Child component'e gönder.</button>
  </div>
</template>



<script>
import { eventCar }  from '../main'
export default {

    data : function (){
        return { age : 25}
    },
    methods:{
        sendChild(){
            eventCar.$emit("transporter",this.age);
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
}
</style>
