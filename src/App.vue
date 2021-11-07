<template>
  <LogoTesla />
  <div id="nav">
    <a
      v-for="section in homeSections"
      :key="section.id"
      :href="'#' + section.idSection"
      @click="changeSection(section.title)"
    >
      {{ section.title }}
    </a>
  </div>
  <router-view />
</template>

<script>
import LogoTesla from "@/components/LogoTesla";

export default {
  components: {
    LogoTesla,
  },
  computed: {
    homeSections() {
      return this.$store.getters["homeSections"];
    },
  },
  methods: {
    changeSection(section) {
      setTimeout(() => {
        this.$store.dispatch("changeSection", section);
      }, 1000);
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

#app {
  font-family: "Raleway", sans-serif;
  text-align: center;
}

#nav {
  position: fixed;
  z-index: 500;
  display: flex;
  gap: 40px;
  justify-content: center;
  width: calc(100% - 60px);
  padding: 30px;
}

#nav a {
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: red;
}

* {
  margin: 0;
  padding: 0;
}
</style>
