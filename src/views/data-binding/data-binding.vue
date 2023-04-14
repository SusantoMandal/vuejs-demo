<template>
  <div>
    <h1>{{ message }}</h1>
    <h1 :class="{'error': isActive, 'no-error': !isActive}" >Data Binding Example with attributes</h1>
    <input class="msg-input" v-model="message" type="text" placeHolder="Type a message">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      isActive: false
    };
  }
};
</script>
<style scoped>
  .error {
    color: red
  }
  .no-error {
    color: blue
  }
  .msg-input {
    height: 30px;
    width: 400px;
    padding: 12px;
    font-size: 26px;
  }
</style>
