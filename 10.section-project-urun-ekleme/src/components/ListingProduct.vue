<template>
<div v-if="productList.length>0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
<div class="row product-container">
    <!--productList değişkenini burda kullnırız. çünkü  product ları burda for ile döneceğiz.-->
    <Product v-for="item in productList" v-bind:key="item.id">  <!--Product içeriği direk productComponent içine alınmadı. Slot kullanılarak gönderildi.-->
        <div class="col-md-2 card">
        <img class="card-img-top" :src=item.selectedImage alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <small>
            <strong>Adet :  </strong> {{item.count}}
          </small>
          <br>
          <small>
            <strong>Fiyat : </strong>  {{item.price}}
          </small>
          <br>
          <small>
            <strong>Tutar : </strong>  {{item.totalPrice}}
          </small>
        </div>
      </div>
    </Product> 
</div>
</div>

</template>
<script>
import {eventBus} from '../main'
import Product from './Product'
export default {
    components : {Product:Product},
    data() {
      return {
        productList: []
      }
    },
    created(){
        eventBus.$on("productAdded",(value)=>{
        if(this.productList.length < 2){
           this.productList.push(value);
           /**progres bar'ı burddaki kontrolden sonra update edelim */
           eventBus.$emit("progresBarUpdated",this.productList.length);
        }
        else{
            alert("daha fazla ürün ekleyemezsiniz.");
        }
        });

        /**
         * Ürün eklednikten sonra progress bar a da bunn bilgisinin verilmesi gerekiyor
         * 1. bunu addproduct ksımında ürün eklendikten hemen sonra yapabiliriz fakat toplam
         * ürün sayısı burda ve burda kontrole diyoruz. orda eklememiz duurmunda, progress bar ı ilerletip
         * sayı kota geçince progressi geri almak zorunda kalırız.
         */
        
    }
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