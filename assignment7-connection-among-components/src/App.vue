 <template>
<div class="container">
    <div class=row>
      <Header></Header>
    </div>
    <hr>
    <div class="row">
      <Body></Body>
    </div>
    <hr>
    <div class="row">
      <Footer></Footer>
    </div>
</div>
</template>

<script>
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Body from '../src/components/Body'
export default {
  components:{'Header':Header,'Footer':Footer,'Body':Body}
}
</script>

 
