<template>
    <div>
      <div class="memory"> 
          <slot name="heading"></slot>
          <slot name="content">burası içerik</slot>
      </div>
      <div class="memory">
          <slot></slot>
      </div>
      <div class="memory">
          <slot name="author">
             <h4>Default author içeriği</h4>
             <p>buraya hiç içerik eklenmemiş.</p> 
          </slot>
      </div>
      
     
  </div>
</template>

<script>
 
export default {
   
   }
</script>

<style scoped>
 div.memory{
     
     border:1px solid black;
     box-shadow: 1px 1px 1px #666;
     
 }
</style>