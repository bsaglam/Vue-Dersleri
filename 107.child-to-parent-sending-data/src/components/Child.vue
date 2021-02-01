<template>
  <div>
     <hr>
     <p>aşağıdaki buton <strong>{{childData}}</strong> data peopertisini parent'a gönderecek</p>
     <button @click="sendParent()">Parent'a gönder</button>
  </div>
</template>

<script>
export default {
     data : function(){
        return { childData : 'Child içindeki property datası'}
    },
    methods : {
        sendParent() {
            /**
             * 
             * 
             * Parenta gönderilen yer
             */
             this.$emit("data",this.childData)  //burda childData propertisini "data keya racılığı ile parent'a gönderiyoruz."
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
