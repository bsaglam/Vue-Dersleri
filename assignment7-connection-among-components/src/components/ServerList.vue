<template>
     <ul class="list-group">
          <li
            class="list-group-item"
            @click="SendRight(item.id)"
            v-for="item in dizi" :key=item.id>
            <p>Sunucu #{{ item.id }}</p>
            <p>Durumu : {{item.status}}</p>
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
        SendRight(itemId){
            debugger;
            eventBus.$emit("transporter",this.dizi[itemId].status)
        }
    }
}
</script>