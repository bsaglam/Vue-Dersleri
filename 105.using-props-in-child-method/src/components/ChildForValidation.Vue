<template>
  <div>
     <p>Parent component'ten gelen props: <strong>{{name}}</strong></p>
     <p>bu veriyi burdaki method ters çeviriyor:<strong> {{reverseName()}}</strong></p>
  </div>
</template>

<script>
export default {
  

   /**
    *  props : ["name"],  // kontrolsüz alım 
    * 
    *  props: { name : [string]} // eğer tek bir kontrol yapılacaksa
    * 
    * 
    * 
    */
   
   props : {
        name : {
            type: String,
            required:true
        }
    },

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
    background-color:darkturquoise,
}
</style>
