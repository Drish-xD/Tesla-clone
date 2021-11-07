import { createStore } from "vuex";

export default createStore({
  state: {
    sectionMode: "Model 3R",
    homeSections: [
      {
        id: 1,
        idSection: "section-one-hero",
        title: "Model 3R",
        paragraph:
          "Electric vehicule incentives are now available on eligible Model 3 in ACT, NSW, TAS and VIC.",
        bgImage: require("@/assets/1.jpg"),
        buttons: [
          {
            value: "EXISTING INVENTORY",
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
        idSection: "section-three-model-yr",
        title: "Model YR",
        bgImage: require("@/assets/3.jpg"),
        buttons: [
          {
            value: "LEARN MORE",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "STAY UPDATED",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
      {
        id: 3,
        idSection: "section-four-model-sr",
        title: "Model SR",
        paragraph: "Schedule a Touchless Test Drive",
        bgImage: require("@/assets/4.jpg"),
        buttons: [
          {
            value: "CUSTOM ORDER",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "EXISTING INVENTORY",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
      {
        id: 4,
        idSection: "section-five-model-xr",
        title: "Model XR",
        paragraph: "Schecule a Touchless Test Drive",
        bgImage: require("@/assets/4.jpg"),
        buttons: [
          {
            value: "CUSTOM ORDER",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
          },
          {
            value: "EXISTING INVENTORY",
            bgColor: "rgba(249, 249, 249, 0.800)",
          },
        ],
      },
      {
        id: 5,
        idSection: "section-two-solar-powerwall",
        title: "Solar and Powerwall",
        paragraph: "Power Everything",
        bgImage: require("@/assets/2.jpg"),
        buttons: [
          {
            value: "LEARN MORE",
            bgColor: "rgba(30, 30, 30, 0.800)",
            color: "rgba(249, 249, 249, 1.000)",
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
