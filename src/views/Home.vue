<template>
  <div class="all">
    <div class="home container">
      <sequential-entrance delay="800" fromTop animation="bounceIn">
        <Cover />
      </sequential-entrance>
      <sequential-entrance delay="800" fromRight animation="bounceIn">
      </sequential-entrance>
    </div>
    <sequential-entrance delay="800" fromBottom animation="bounceIn">
      <Service />
      <Separate />
    </sequential-entrance>
  </div>
</template>

<script>
import Cover from "@/components/Cover";
import Separate from "@/components/Separate";
import Service from "@/components/Service";

export default {
  name: "Home",
  components: { Cover, Separate, Service },
};
</script>
