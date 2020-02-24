<template>
<div class="root">

  <div class="staff">
    <h1>Anställda</h1>
      <ul 
        v-for="employee of staff"
        :key="employee.id"> 
        <router-link 
          v-bind:to="'/staff/' + employee.id "
          >
          {{employee.name}} 
        </router-link>
      </ul>
  </div>

  <div class="employee">
    <router-view/>
  </div>
</div>

</template>
<script>

export default {
  computed: {
    staff: function () {
      return this.$root.$data.staff
    }
    
  }
  
}
</script>

<style lang="scss">
.root {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
}
.staff {
  grid-column: 1/2;
}
.employee {
  grid-column: 2/3;
}
a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
    &:hover {
      color: #2c3e50a2;
    }
    &.router-link-exact-active {
      color: #668eb6;
    }
}
</style>
