<template>
  <div
    :id="idSection"
    class="section-container"
    :style="{ backgroundImage: `url(${bgImage})` }"
    @mouseover="changeSection"
  >
    <transition name="fade" mode="out-in">
      <div class="data-container" v-if="sectionMode === title">
        <div class="text-container">
          <label>{{ title }}</label>
          <p>{{ paragraph }}</p>
        </div>
        <div class="button-container">
          <button
            v-for="(button, index) in buttons"
            :key="index"
            :style="{ backgroundColor: button.bgColor, color: button.color }"
            @click="toDevTo"
          >
            {{ button.value }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: ["idSection", "title", "paragraph", "bgImage", "buttons"],
  computed: {
    sectionMode() {
      return this.$store.getters["sectionMode"];
    },
  },
  methods: {
    changeSection() {
      this.$store.dispatch("changeSection", this.title);
    },
    toDevTo() {
      window.location.href = "https://drish-xd.is-a.dev/";
    },
  },
};
</script>

<style>
.section-container {
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  padding: 100px 0px 0px 0px;
}

.data-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 90%;
}

.text-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.button-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

label {
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  display: flex;
  padding: 12.5px 70px 12.5px 70px;
  border-radius: 20px;
  border: none;
  font-weight: 550;
  cursor: pointer;
}
</style>
