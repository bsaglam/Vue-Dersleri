<template>
<div>
    <p>lambanın durumu:{{status}}</p>
    <Button @click="lambayiKapa">Lambayı kapat</Button>
</div>
</template>

<script>
export default {
    data : function (){
        return {status : "açık"}
    },
    methods : {
        lambayiKapa(){
            this.status="Kapalı";
        }
    }
}
</script>