<template>
  <div>
   <button @click="selectedComponent='Memory'" class="btn btn-primary"> Memory</button>
   <button @click="selectedComponent='NewMemory'" class="btn btn-primary"> New Memory</button>
   <button @click="selectedComponent='Author'" class="btn btn-primary"> Author</button>
     {{selectedComponent}}
     <component :is="selectedComponent">
       <h4 slot="heading">çok güzel anılar</h4>
      <p>slot adı verilmeyen içerik</p>
     </component>
    <!--<memeory>
      <h4 slot="heading">çok güzel anılar</h4>
      <p>slot adı verilmeyen içerik</p>
    </memeory>-->
  </div>
</template>

<script>
import Memeory from './components/Memeory.vue'
import NewMemory from './components/NewMemory'
import Author from './components/Author'
export default {
  data : function(){
    return {selectedComponent:'Memeory' }
  },
  components: { Memeory,NewMemory,Author }
  
}
</script>
<style scoped>
 div{
     height: 400px;
     width: 500px;
     border:1px solid black;
     
 }
</style>
 