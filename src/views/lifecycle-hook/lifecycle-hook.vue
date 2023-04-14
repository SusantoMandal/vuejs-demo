<template>
  <div>
    <h1 v-show="showMessage">{{ message }}</h1>
    <button class="button button-primary" type="button" @click="toggleShowMessage()">Toggle Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      showMessage: true
    }
  },
  methods: {
    toggleShowMessage() {
      this.showMessage = !this.showMessage
    }
  },
  beforeCreate() {
    console.log('beforeCreate() called')
  },
  created() {
    console.log('created() called')
  },
  beforeMount() {
    console.log('beforeMount() called')
  },
  mounted() {
    console.log('mounted() called')
  },
  beforeUpdate() {
    console.log('beforeUpdate() called')
  },
  updated() {
    console.log('updated() called')
  },
  beforeDestroy() {
    console.log('beforeDestroy() called')
  },
  destroyed() {
    console.log('destroyed() called')
  }
};
</script>
<style scoped>
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
}

/* Primary button styles */
.button-primary {
  background-color: #0074D9;
  color: #fff;
}

/* Secondary button styles */
.button-secondary {
  background-color: #fff;
  color: #0074D9;
  border: 2px solid #0074D9;
}

/* Hover styles for both primary and secondary buttons */
.button-primary:hover,
.button-secondary:hover {
  background-color: #fff;
  border: 2px solid #0074D9;
  border-radius: 5px;
  color: #0074D9;
}

/* Disabled styles for both primary and secondary buttons */
.button-primary:disabled,
.button-secondary:disabled {
  background-color: #ddd;
  color: #777;
  cursor: not-allowed;
}
</style>
