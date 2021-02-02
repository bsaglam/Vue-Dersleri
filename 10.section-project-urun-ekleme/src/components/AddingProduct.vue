<template>
<div class="row">
      <div class="card offset-2 col-md-3">
        <div class="card-body tex-center d-flex align-items-center flex-column">
          <img height="128" class="img-responsive text-center mb-3"
               :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage">
          <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
          <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Resim Seç</button>
        </div>
      </div>
      <div class="col-md-5">
        <div class="col-md-11 card">
          <div class="card-body">
            <div class="form-group">
              <label>Ürün Adı</label>
              <input type="text" v-model="product.name" class="form-control" placeholder="adını giriniz">
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label>Ürün Adeti</label>
                <input type="text" v-model="product.count" class="form-control" placeholder="adetini giriniz">
              </div>
              <div class="form-group col-md-6">
                <label>Ürün Fiyatı</label>
                <input type="text" v-model="product.price" class="form-control" placeholder="fiyatını giriniz">
              </div>
            </div>
            <button class="btn btn-outline-info btn-block" @click="AddProduct()">Ekle!</button>
          </div>
        </div>
      </div>
</div>
</template>
<script>
import {eventBus} from '../main'
export default {
    data() {
      return {
        product : {
            id : 0,
            selectedImage: null,
            name: null,
            count: null,
            price: null,
            totalPrice: null
        },
        sayac : 1
      }
    },
    methods: {
      onChange(e) {
          debugger;
        const file = e.target.files[0];
        this.product.selectedImage = URL.createObjectURL(file);
      },

      /**
       * 1.Ürün burda eklendikten sonra, ürünListeleme comonentine arrayList'e ekelenebilmelidir.
       */
      AddProduct(){
          this.product.totalPrice = this.product.price * this.product.count;
          this.product.id = this.sayac;
          this.sayac++;
          debugger;
          /**
           * Aldıgımız product2ı, ListingProduct componentine eventBus aracılığı ile göndereceğiz
           */
          eventBus.$emit("productAdded",this.product);

          /**
           * Ekleme işleminden sonra input alanları temizleyelim
           */
          this.product={
            id:0,
            selectedImage: null,
            name: null,
            count: null,
            price: null,
            totalPrice: null
          }
          debugger;
      }
    }
  }
</script>
<style scoped>
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

</style>