<template>
  <div class="container">
      <header-main />
      <div class="mainPart">
        <div class="mainPart__upper">
          <div class="upper__description-section">
            <div class="description-section_ thumbnail"><h4>National clothes<br>for the new time</h4></div>
            <div class="description-section__ plain-text">We represent the modern culture <br>of national clothes in sportswear.</div>
            <div class="description-section__ btn">Start shopping</div>
          </div>
          <img class="upper__img-right" src="../components&img/img/homepage-img.png">
          <div class="upper__img-history">
            <img src="../components&img/img/ОurStory.png">
            <div class="img-history__ name"><h4>Оur story</h4></div>
          </div>
          <div class="upper__img-catalog">
            <img src="../components&img/img/ViewCatalog.png">
            <div class="img-history__ name"><h4>View catalog</h4></div>
          </div>
          <div class="upper__connect">
            <img src="../components&img/img/JoinInCommunity.png">
            <div class="img-history__ name"><h4>Join in<br>community</h4></div>
          </div>
        </div>
        <div class="mainPart__NewArrivals-part">
          <div class="NewArrivals-part__name-block"><h4>New Arrivals</h4></div>
          <div class="NewArrivals-part__blocks">
            <div class="blocks__FarLeft">
              <div class="FarLeft__img-signNew">
                <div class="img-signNew__ sign-new">New</div>
                <img class="img-signNew__img" src="../components&img/img/Rectangle11.png">
              </div>
              <div class="FarLeft__ name-sentence">Costume Set “TOKYO 2020”</div>
              <div class="FarLeft__ price-sentence">$87.00</div>
            </div>
            <div class="blocks__Left">
              <div class="Left__img-signNew">
                <div class="img-signNew__ sign-new">New</div>
                <img class="img-signNew__img" src="../components&img/img/Rectangle12.png">
              </div>
              <div class="Left__ name-sentence">Sweatshirt with “History” patch</div>
              <div class="Left__ price-sentence">$38.00</div>
            </div>
            <div class="blocks__Right">
              <div class="Right__img-signNew">
                <div class="img-signNew__ sign-new">New</div>
                <img class="img-signNew__img" src="../components&img/img/Rectangle13.png">
              </div>
              <div class="Right__ name-sentence">T-shirt with “History” patch</div>
              <div class="Right__ price-sentence">$21.00</div> 
            </div>
            <div class="blocks__FarRight">
              <div class="FarRight__img-signNew">
                <div class="img-signNew__ sign-new">New</div>
                <img class="img-signNew__img" src="../components&img/img/Rectangle14.png">
              </div>
              <div class="FarRight__ name-sentence">Shirt with “History” patch</div>
              <div class="FarRight__ price-sentence">$21.00</div>
            </div>
          </div>
        </div>
        <div class="mainPart__lower">
          <div class="lower__name-section"><h4>Follow us on social networks!</h4></div>
          <div class="lower__pictures">
            <img src="../components&img/img/Rectangle12(1).png" class="pictures__ FarLeft">
            <img src="../components&img/img/Rectangle13(1).png" class="pictures__ Left">
            <img src="../components&img/img/Rectangle14(1).png" class="pictures__ Right">
            <img src="../components&img/img/Rectangle15.png" class="pictures__ FarRight">
          </div>
        </div>
      </div>
    <footer-main/>
  </div>
</template>
  
<script>
  import HeaderMain from "@/components&img/HeaderMain.vue";
  import FooterMain from "@/components&img/FooterMain.vue";
  
  export default {
    components: {
    HeaderMain,
    FooterMain,
    },
  }
</script>
  
<style scoped>
  
  .container {
    max-width: 1170px;
    margin: 0 auto;
  }

  .mainPart__upper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .upper__description-section {
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .thumbnail  {
    font-size: 36px;
  }
  
  .description-section__ {
    margin-top: 32px;
  }
  .btn {
    color: #FFFFFF;
    background-color: black;
    padding-top: 21px;
    padding-bottom: 21px;
    padding-left: 67px;
    padding-right: 67px;
  }
  .btn:hover, .upper__img-history img:hover, .upper__img-catalog img:hover, .upper__connect img:hover {
    box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.61);
    transition: 0.5s;
  }
  
  .blocks__FarLeft:hover, .blocks__Left:hover, .blocks__Right:hover, .blocks__FarRight:hover {
    box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.185);
    transition: 0.5s;
  }
  
  .name {
    color: white;
    position: relative;
    bottom: 145px;
    text-align: center;
    font-size: 22px;
  }
  
  .NewArrivals-part__name-block {
    text-align: center;
    font-size: 27px;
  }
  
  .img-signNew__img {
    width: 100%;
  }
  .sign-new {
    font-size: 11px;
    background-color: #848484;
    text-align: center;
    width: 94px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: white;
    position: relative;
    top: 62.5px;
    left: 40px;
  }
  
  .name-sentence, .price-sentence {
    text-align: center;
    margin-bottom: 12px;
  }
  
  .lower__name-section {
    text-align: center;
    font-size: 27px;
    margin: 60px;
  }
  
  .pictures__ {
    margin-left: 22px;
    margin-bottom: 120px;
  }
  
  footer {
    background-color: #757575;
    display: flex;
    justify-content: space-around;
  }

  .NewArrivals-part__blocks {
    display: flex;
  }
</style>