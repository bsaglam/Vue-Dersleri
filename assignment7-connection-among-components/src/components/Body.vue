 <template>
 <div>
    <LeftBar></LeftBar>
    <RightBar></RightBar>
 </div>
    
</template>
<script>
import LeftBar from './LeftBar'
import RightBar from './RightBar'
export default {
    components : {'LeftBar': LeftBar,'RightBar' : RightBar}
}
</script>