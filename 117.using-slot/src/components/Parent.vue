
<template>
<div>
    <hr>
    <div>
       <slot name="heading"></slot>
    </div>
    <hr>
    <div>
       <slot name="content"></slot>
    </div>
</div>
  
</template>



<script>
 
export default {

     
}
</script>

<style scoped>
div{
     height: 100px;
     width: 300px;
     border:1px solid black;
     margin: 10px 10px;
     background-color: dimgray;
 }
</style>
