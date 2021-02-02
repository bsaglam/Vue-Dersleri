<template>
<div class="row product-container">
    <!--productList değişkenini burda kullnırız. çünkü  product ları burda for ile döneceğiz.-->
    <Product :v-for="product in productList">  <!--Product içeriği direk product içine alınmadı. Slot kullanılarak gönderildi.-->
        <div class="col-md-2 card">
        <img class="card-img-top" src="/src/assets/default.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <small>
            <strong>Adet : product.count </strong> 1
          </small>
          <br>
          <small>
            <strong>Fiyat : product.price</strong> 10
          </small>
          <br>
          <small>
            <strong>Tutar : product.totalPrice</strong> 10
          </small>
        </div>
      </div>
    </Product> 
</div>
</template>
<script>
import Product from './Product'
export default {
    components : {Product:Product},
    data() {
      return {
        productList: []
      }
    },
}
</script>
<style>
  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>