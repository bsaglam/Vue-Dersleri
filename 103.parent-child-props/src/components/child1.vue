<template>
  <div>
    <h4>Merhaba,{{variable}}</h4>
  </div>
</template>

<script>
export default {
    props : ["variable"] /*parenttan gelen bu değeri bu tcomponent içinde data propeties gibi kullanabilriiz*/
}
</script>

<style scoped>
div {
    border:1px solid black;
    width: 300px;
    height: 300; 
    margin-top: 2px;
}
</style>