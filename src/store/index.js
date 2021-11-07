import { createStore } from "vuex";

export default createStore({
  state: {
    sectionMode: "Roadster",
    homeSections: [
      {
        id: 1,
        idSection: "Model-R",
        title: "Roadster",
        paragraph:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, iste?",
        bgImage: require("@/assets/0.jpg"),
        buttons: [
          {
            value: "LEARN MORE",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "CUSTOM ORDER",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
      {
        id: 2,
        idSection: "Model-S",
        title: "Model S",
        paragraph:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, iste?",
        bgImage: require("@/assets/1.jpg"),
        buttons: [
          {
            value: "LEARN MORE",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "CUSTOM ORDER",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
      {
        id: 3,
        idSection: "Model-Y",
        title: "Model Y",
        paragraph:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, iste?",
        bgImage: require("@/assets/2.jpg"),
        buttons: [
          {
            value: "LEARN MORE",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "CUSTOM ORDER",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
      {
        id: 4,
        idSection: "Model-3",
        title: "Model 3",
        paragraph:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, iste?",
        bgImage: require("@/assets/3.jpg"),
        buttons: [
          {
            value: "CUSTOM ORDER",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "LEARN MORE",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
      {
        id: 5,
        idSection: "Model-X",
        title: "Model X",
        paragraph:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, iste?",
        bgImage: require("@/assets/4.jpg"),
        buttons: [
          {
            value: "CUSTOM ORDER",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "LEARN MORE",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
    ],
  },
  mutations: {
    changeSection(state, payload) {
      state.sectionMode = payload;
    },
  },
  actions: {
    changeSection(context, payload) {
      context.commit("changeSection", payload);
    },
  },
  getters: {
    sectionMode(state) {
      return state.sectionMode;
    },
    homeSections(state) {
      return state.homeSections;
    },
  },
  modules: {},
});
