<template>
    <div>
      <p>lambanın durumu:{{status}}</p>
      <button @click="ChangeLampStatus">Click me</button>
      <hr/>
    </div>
</template>


<script>
export default {
    data : function(){
        return { status : 'kapalı'}
    },
    methods: {
     ChangeLampStatus(){
         this.status= 'açık';
     }
    }
}
</script>