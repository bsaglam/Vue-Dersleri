 <template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <!--adding Product-->
    <AddingProduct></AddingProduct>
    <br><br>
     <!--ProgressingBar-->
     <Progressing></Progressing>
    <br><br>
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <!--Listing Product-->
    <ListingProduct></ListingProduct>
  </div>


</template>

<script>
  import AddingProduct from './components/AddingProduct'
  import Progressing from './components/Progressing'
  import ListingProduct from './components/ListingProduct'

  export default {
    components : {AddingProduct, Progressing, ListingProduct},
    data() {
      return {
        productList: [],
        product : {
            selectedImage: null
        }
      }
    },
    methods: {
      onChange(e) {
        const file = e.target.files[0];
        this.product.selectedImage = URL.createObjectURL(file);
      }
    }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

</style>

