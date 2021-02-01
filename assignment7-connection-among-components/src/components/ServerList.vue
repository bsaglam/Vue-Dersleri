<template>
     <ul class="list-group">
          <li
            class="list-group-item"
            v-for="item in dizi" :key=item.id>
            Sunucu #{{ item.id }}
          </li>
        </ul>
</template>


<script>
export default {
   props : {
        dizi: {
            type: Array,
            required: true
    }}
}
</script>