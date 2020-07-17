<template>
  <div class="container-fluid">
    <div class="col-md-12">
      <span class=" text-center font-weight-bold orange--text d-block">الخدمات</span>
    </div>
    <div class="row ">
      <sequential-entrance delay="300" fromRight animation="bounceIn">
        <a href="#" v-for="service in services" :key="service.index">
<!-- bind the src and the href from the data -->
          <img src="../assets/logo.png" alt="sorry" height="130" width="130" />

        </a>
      </sequential-entrance>
    </div>
  </div>
</template>
<script>
export default {
  name: "Service",
  data() {
    return {
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
      ],
    };
  },
};
</script>
<style scoped>
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
  overflow-x: scroll;
  overflow-wrap: unset;
  white-space: nowrap;
  border: solid 1px orange;
}
</style>
