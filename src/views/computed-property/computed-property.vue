<template>
  <div>
    <h1>{{ fullName }}</h1>
    <h1>{{ fullnameMethod }}</h1>
    <h1>{{ evenItems }}</h1>
    <h1>{{ doubledItems }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullnameMethod: "", 
      firstName: 'Susanto',
      lastName: 'Mandal',
      items: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    evenItems() {
      return this.items.filter(item => item % 2 === 0)
    },
    doubledItems() {
      return this.items.map(item => item * 2)
    }
  },
  method: {
    fullNameFucntion() {
        this.fullNameFucntion = this.firstName + ' ' + this.lastName
    }
  }
};
</script>
<style scoped>
</style>
