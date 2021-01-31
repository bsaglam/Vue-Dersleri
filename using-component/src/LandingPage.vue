<template>
    <div>
        <lamp-component v-for="item in 5" :key=item></lamp-component>
    </div>
</template>

<script>
import Lampstatus from './LampStatus'
export default {
    /*Kullanacağımız componenti register edelim.*/
    components : { 'lamp-component' : Lampstatus}
}
</script>