<template>
  <div>
    <ChildrenComponent :name="name" :age="age" @name-changed="updateName"/>
  </div>
</template>

<script>
import ChildrenComponent from "../../components/child.vue";
export default {
  components: {
    ChildrenComponent
  },
  data() {
    return {
      name: 'Susanto Mandal',
      age: {
        age1: 20,
        age2: 22
      }
    }
  },
  methods: {
    updateName(newAge) {
      this.age.age1 = newAge
      // this.name = newName
    }
  }
};
</script>
<style scoped>
</style>
