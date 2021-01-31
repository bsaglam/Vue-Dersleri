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
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
export default {
  components:{'Header':Header,'Footer':Footer,'Body':Body}
}
</script>

 
