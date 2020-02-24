<template>
  <div>
      <h1>Detaljer</h1>
      <h2>{{employee.name}} </h2>
      <h3>{{employee.title}} </h3>
      <h3>Email: {{employee.email}}</h3>
      <h3>Tel: 
          <input type="text">{{employee.phoneNumber}}
          </h3>
      <router-link v-bind:to="'/staff/' + employee.id">
      
      <button>Save</button>
      </router-link>
  </div>
</template>

<script>
export default {
    computed: {
        employee(){
          return this.$root.$data.staff[this.$route.params.id]
        }
    }
}
</script>

<style>

</style>