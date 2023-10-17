<script>
import TaskList from "./TaskList.vue";
import TaskCounter from "./TaskCounter.vue";

export default {
  name: "InputField",
  components: {
    TaskList,
    TaskCounter,
  },
  data() {
    return {
      items: [],
      inputText: "",
    };
  },
  methods: {
    addItem() {
      // this.items += this.inputText;
      this.items.push(this.inputText);
    },
  },
};
</script>

<template>
  <TaskCounter></TaskCounter>
  <div id="taskForm">
    <input
      id="taskInput"
      type="text"
      placeholder="Назва задачі"
      v-model="inputText"
    />
    <button id="taskAdd" @click="addItem">+</button>
  </div>
  <TaskList :items="items" />
</template>
