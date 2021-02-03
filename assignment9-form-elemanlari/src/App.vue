<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Soru 1 -->
                    <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
                    <!-- Tam Adı (Ad + Soyad) -->
                    <!-- E-mail -->
                    <!-- Şifre -->
                    <!-- Cinsiyet (Kadın/Erkek) -->
                
                  <div class="form-group">
                    <label for="username">Kullanıcı Adı</label>
                    <input v-model="userData.username" type="text" id="username" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="email">E-mail</label>
                    <input v-model="userData.email" type="text" id="email" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input v-model="userData.password"  type="password" id="password" class="form-control">
                  </div>
                  <label>
                    <input v-model="userData.gender" type="radio" value="erkek"> Erkek
                  </label>
                  <label>
                    <input v-model="userData.gender"  type="radio" value="kadin"> Kadın
                  </label>
                <hr>
                 <div class="row">
                  <div class="col-md-12">
                    <button
                    @click.prevent="submit"
                      class="btn btn-primary">Gönder!
                    </button>
                  </div>
                </div>
                    <!-- Soru 2 -->
                    <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
                    <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

                    <!-- Soru 3 -->
                    <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad: {{userData.username}}</p>
                        <p>E-mail: {{userData.email}}</p>
                        <p>Şifre: {{userData.password}}</p>
                        <p>Cinsiyet: {{userData.gender}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data : function(){
          return {
            userData : {
              username:"",
              email:"",
              password:"",
              gender:""},
              isSubmitted:false
            } 
          },
          methods : {
          submit(){
            this.isSubmitted=true;
          }
    }
    }
    
</script>

<style>
</style>
