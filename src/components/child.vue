<template>
  <div>
    <h1>Name: {{ name }}</h1>
    <h1>Age: {{ age.age1 }}</h1>
    <input class="msg-input" type="text" v-model="newName" @keyup.enter="changeName" placeholder="Enter new name">
  </div>
</template>

<script>
export default {
  name: "ChildrenComponent",
  props: ['name', 'age'],
  data() {
    return {
      newName: ''
    }
  },
  methods: {
    changeName() {
      this.$emit('name-changed', this.newName)
      this.newName = ''
    }
  }
};
</script>
<style scoped>
  .msg-input {
    height: 30px;
    width: 400px;
    padding: 12px;
    font-size: 26px;
  }
</style>
