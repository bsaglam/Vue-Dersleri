<template>
<div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{width : progress +'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{count}}/10
      </div>
    </div>
</template>

 <script>
 import {eventBus} from '../main'
  export default{
    data : function(){
      return {
        count : null,
        progress: null
        }
    },
    /**
     * eventBus dan gelen değerleri created içinde alırız
     */
    created(){
      eventBus.$on("progresBarUpdated",(productCount)=>{
        this.count = productCount;
        this.progress = productCount*10;
      });
    }
  }
 </script>