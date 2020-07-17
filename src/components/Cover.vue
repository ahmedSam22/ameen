<template>
  <div class="container  py-0 mb-3">
    <div class="row ">
      <sequential-entrance delay="800" fromLeft animation="bounceIn">
        <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 first">
          <h3 class="text-center black--text my-5 droid-arabic-kufi">
              تطبيق <span class="orange--text">أمين</span>
              </h3>
          <p class="text-center ">
              {{head}}
          </p>
          
          
          <div class="media mt-3 ">
              <span class="heart">&#x2665;</span>

         <p class="m-2 droid-arabic-kufi"> {{media1}} </p>
         </div>
         <div class="media mt-1">
         <p class="m-2 droid-arabic-kufi"> {{media2}}    </p>
          <img src="../assets/logo.png" width="40" >

         </div>
         <a href="#" class="offset-lg-0 offset-md-2 offset-sm-4 offset-2 ">
            <img
              src="../assets/google-play.png"
              alt="googlePlayBadge"
              width="100"
            />
          </a>
          <a href="#">
            <img
              src=" http://ameen.net/wp-content/themes/ameen/assets/images/app-store.png"
              alt="appStoreBadge"
              width="80"
              style="border-radius:2px"
            />
          </a>
        </div>
      </sequential-entrance>

      <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 parent p-0 second mt-2 ">
        <div class="main">
          <p class="text-center"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cover",
  data() {
    return {
        head : "هي منصة الكترونية تفاعلية لتقديم خدمات الصيانة المنزلية عبر تطبيق خاص بالهواتف الذكية",
            media1 : "من أولويات امين هو الربط بين مقدمي الخدمات وطالبي الخدمات بشكل سلس يسير",
            media2 : "يعمل في أمين فريق محترف يعمل بجد يومياً للتأكد من وصول الخدمات للمستفيدين"
    };
  },
};
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/droidarabickufi.css);
.droid-arabic-kufi {
  font-family: "Droid Arabic Kufi", serif;
}
.main {
  background-color: rgba(0, 0, 0, 0);
  height: 345px;
}
.parent {
  background: url(../assets/parent.jpg);
  background-size: cover;
  border-radius: 50%;
  width: 100%;
  
 box-shadow: 5px 5px 20px rgb(211, 207, 207);
}
.parent:hover  {
          transform: scale(1.1);
          transform-origin: center;
          transform-style: preserve-3d;
          transition-delay: 0s;
          transition-duration: .1s;
        

}
.container {
  box-sizing: border-box;
}
.first {
  height: auto;
}
.media {
    width: 100%;
    overflow: hidden;
    font-size: 12px;
}
@media only screen and (max-width: 1200px) {
  .media {
    display: none;
  }
}
.mdi:before, .mdi-st {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: 39px;
    line-height: 63px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}



/* Heart beat animation */
@keyframes beat{
	to { transform: scale(1.1); }
}

.heart {
	font-size: 30px;
	color: #e00;
    margin-left: 5px;

	-webkit-animation: beat .25s infinite alternate;
	-moz-animation: beat .25s infinite alternate;
	-ms-animation: beat .25s infinite alternate;
	-o-animation: beat .25s infinite alternate;
	animation: beat .25s infinite alternate;

	-webkit-transform-origin: center;
	-moz-transform-origin: center;
	-o-transform-origin: center;
	-ms-transform-origin: center;
	transform-origin: center;
}
a{margin-bottom: 5px;}

a img:hover  {
          transform: scale(1.1);
          transform-origin: center;
          transform-style: preserve-3d;
          transition-delay: 0s;
          transition-duration: .1s;
        

}

</style>
