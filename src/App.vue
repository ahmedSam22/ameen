<template>
  <v-app>
<Navbar />
      
      <router-view />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  name: "App",

  components: { Navbar
    
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
      direction: rtl;
    }

v-app {padding: 0px;
margin: 0px;
      direction: rtl;
}

</style>
