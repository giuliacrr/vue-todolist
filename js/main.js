"use strict"

Vue.createApp({

  data() {
    return {
      //List
      list: [
        {
          id: 0,
          text: "Do a list",
          done: false,
        },
        {
          id: 1,
          text: "Being excited because I created a list",
          done: false,
        },
        {
          id: 2,
          text: "Being depressed because that's the easiest part and worse is yet to come",
          done: false,
        },
      ],
    };
  },
  methods: {
    lineThrough(element) {
      if (element.done === true) {
        element.done = false;
      } else {
        element.done = true;
      }
    },
  }
},
).mount("#app");