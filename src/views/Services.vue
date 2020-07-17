<template>
  <div class="container">
    <div class="col-md-12">
                <h2 class="text-center orange--text droid-arabic-kufi font-weight-bold mt-4"> {{h2}} </h2>
        </div>

    <div class="row ">
                  <sequential-entrance delay="300" fromTop animation="bounceIn">

          <div class="col-md-12">
        <a href="#" v-for="service in services" :key="service.index">
<!-- bind the src and the href from the data -->
          <img src="../assets/logo.png" alt="sorry" height="130" width="130" />

        </a>
        </div>
                  </sequential-entrance>
<div class="col-md-12">
              <sequential-entrance
      delay="800"
      fromBottom
      animation="bounceIn"
    >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="mb-0">
  <path fill="#ffd700" fill-opacity="1" d="M0,256L26.7,256C53.3,256,107,256,160,245.3C213.3,235,267,213,320,192C373.3,171,427,149,480,170.7C533.3,192,587,256,640,282.7C693.3,309,747,299,800,250.7C853.3,203,907,117,960,112C1013.3,107,1067,181,1120,218.7C1173.3,256,1227,256,1280,245.3C1333.3,235,1387,213,1413,202.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
</svg>
              </sequential-entrance>
        </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "Service",
  data() {
    return {
        h2 : "اختر الخدمة التي تريدها",
      services: [
        {
          src : "...",
          href: "...",
        },
        {
          src : "...",
          href: "..",
        },
         {
          src : "...",
          href: "...",
        },
        {
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
        {
          src : "...",
          href: "..",
        },
      ],
    };
  },
};
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/droidarabickufi.css);
.droid-arabic-kufi {
  font-family: "Droid Arabic Kufi", serif;
}
img {
  border-radius: 50%;
  margin: 10px;
}
a img:hover {
  transform: scale(1.1);
  transform-origin: center;
  transform-style: preserve-3d;
  transition-delay: 0s;
  transition-duration: 0.1s;
}
.row {
 
  border: solid 1px orange;
}

</style>
