<template>
     <ul class="list-group">
          <li
            class="list-group-item"
            @click="SendRight()"
            v-for="item in dizi" :key=item.id>
            Sunucu #{{ item.id }}
            
          </li>
        </ul>
</template>


<script>
import { eventBus } from '../main'
export default {
   props : {
        dizi: {    /**Bu props u direk data property gibi kullanabiliyoruz */
            type: Array,
            required: true
    }},
     
    methods : {
        SendRight(){
            debugger;
            eventBus.$emit("transporter",this.dizi.status)
        }
    }
}
</script>