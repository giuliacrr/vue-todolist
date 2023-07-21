"use strict"

Vue.createApp({

  data() {
    return {
      //List
      newTasks: {
        text: "",
      },
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
    //Line Through condition
    lineThrough(task) {
      if (task.done === true) {
        task.done = false;
      } else {
        task.done = true;
      }
    },
    //Add a task
    addToDoTask() {
      //We create a clone of the object newTasks with the spread operator (...) to make the original array lose its reactivity
      const clonedTask = { ...this.newTasks };
      //and makes us print the things as they're meant to be
      this.list.push(clonedTask);
    },
    deleteTask(i) {
      this.list.splice(i, 1);
    },
    deleteAllTasks() {
      this.list.splice(0, this.list.length);
    }
  }
},
).mount("#app");