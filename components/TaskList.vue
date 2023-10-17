<script>
export default {
  name: "TaskList",
  props: ["items"],
};
</script>

<template>
  <ul id="tasksList">
    <li v-for="item in items">
      {{ item }}
      <button class="delete">+</button>
    </li>
  </ul>
</template>
