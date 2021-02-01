<template>
 <div>
     <p>Parent.vue içindeki datayı aşağıdaki butona tıklayarak Arthur'a değiştir ve child a gönder. </p>
     <h4>name : {{title}}</h4>
     <button @click="changeAndSend">tıkla ve gönder</button>
      
     <child1 :variable="title"></child1>
     <child2></child2>
 </div>
</template>



<script>
import child1 from './child1'
import child2 from './child2'
export default {
    name: 'Parent',
    components : {child1,child2},
    data : function(){
        return {title : "burcu"}
    },

    methods : {
        changeAndSend(){
           this.title="Arthur";
        }
    }
}
</script>
<style scoped>
div {
    border:1px solid black;
    width: 600px;
    height: 300;
    
}
</style>