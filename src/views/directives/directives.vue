<template>
  <div>
    <h1 v-if="showMessage">Hello World</h1>
    <button class="button button-primary" type="button" @click="toggleShowMessage()">Toggle Message</button>
    <h1 v-for="item in items" :key="item.id" >{{ item.name }}</h1>
    <input class="msg-input" v-model="message" type="text" placeHolder="Add Items">
    <button class="button button-primary" type="button" @click="addItems()">Add Item</button>
  </div>
</template>
<script>
export default {
  name: 'DirectivePage',
  data() {
    return {
      showMessage: true,
      message: "",
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };
  },
  methods: {
    toggleShowMessage() {
      this.showMessage = !this.showMessage
    },
    addItems() {
      if(this.items.length === 0) {
        this.items.push({
          id: 1,
          name: this.message
        })
      } else {
        this.items.push({
          id: this.items[this.items.length-1].id + 1,
          name: this.message
        })
      }
      this.message = ""
    }
  }
}
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
.msg-input {
  height: 30px;
  width: 400px;
  padding: 12px;
  font-size: 26px;
  margin-right: 12px;
}
</style>