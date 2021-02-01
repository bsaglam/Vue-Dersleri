<template>
    <div class="col-xs-12 col-sm-6">
        <ServerList :dizi="serverList"></ServerList>
      </div>
</template>

<script>
import ServerList from './ServerList'
export default {
    components: {"ServerList" : ServerList},
     data : function(){
        return {
            serverList : [{id:1,status:'normal'},
                          {id:2,status:"kritik"},
                          {id:3,status:"bilinmiyor"}]
        }
    }
}
</script>