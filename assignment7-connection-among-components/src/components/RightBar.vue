<template>
    <div class="col-xs-12 col-sm-6">
            <p>{{status}}</p>
    </div>
</template>


<script>
import { eventBus } from '../main'
export default {
    data: function(){
        return { status : "default"}
    },
    mounted(){
        debugger;
        eventBus.$on("transporter",(value)=>{
            this.status = value;
        })
    }
}
</script>