<template>
  <VueScrollSnap>
    <Section
      v-for="section in homeSections"
      :key="section.id"
      :idSection="section.idSection"
      :title="section.title"
      :paragraph="section.paragraph"
      :bgImage="section.bgImage"
      :buttons="section.buttons"
      class="item"
    />
  </VueScrollSnap>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import Section from "@/components/Section";

export default {
  name: "ViewHome",
  components: {
    VueScrollSnap,
    Section,
  },
  computed: {
    homeSections() {
      return this.$store.getters["homeSections"];
    },
  },
};
</script>

<style>
.item {
  height: calc(100vh - 100px);
}

.scroll-snap-container {
  height: 100vh;
  width: 100vw;
}
</style>
