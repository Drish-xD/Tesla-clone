<template>
  <LogoTesla />
  <div
    id="nav"
    :style="{ 'background-color': isopen ? '#ffffff00' : '#fff' }"
    @click="toggleClass()"
  >
    <a
      id="navlinks"
      class="open"
      v-for="section in homeSections"
      :key="section.id"
      :href="'#' + section.idSection"
      @click="changeSection(section.title)"
    >
      {{ section.title }}
    </a>
    <div class="menu" @click="openmenu()">Menu</div>
  </div>
  <router-view />
</template>

<script>
import LogoTesla from "@/components/LogoTesla";

export default {
  data: function () {
    return {
      isopen: true,
    };
  },
  components: {
    LogoTesla,
  },
  computed: {
    homeSections() {
      return this.$store.getters["homeSections"];
    },
  },
  methods: {
    toggleClass: function () {
      this.isopen = !this.isopen;
    },
    changeSection(section) {
      setTimeout(() => {
        this.$store.dispatch("changeSection", section);
      }, 1000);
    },
    openmenu() {
      document.querySelectorAll("#navlinks").forEach(function (e) {
        e.classList.toggle("open");
      });
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

* {
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
  text-align: center;
}

#nav {
  position: fixed;
  z-index: 500;
  display: flex;
  gap: 40px;
  justify-content: center;
  width: 100%;
  padding: 30px 0;
  transition: all 0.5s ease-in-out;
}

#nav a {
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 10px;
  opacity: 1;
}

#nav a.router-link-exact-active {
  color: red;
}

a:hover,
.menu:hover {
  background: #2c3e503c;
  border-radius: 25px;
}

.menu {
  display: none;
  right: 30px;
  font-weight: 700;
  position: absolute;
  padding: 5px 10px;
  color: #2c3e50;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .menu {
    display: block;
    top: 25px;
    background: #2c3e503c;
    border-radius: 25px;
  }

  #nav {
    right: 0;
    flex-direction: column;
  }

  #nav a {
    margin-top: 30px;
  }

  .open {
    display: none;
    opacity: 0 !important;
  }
}
</style>
