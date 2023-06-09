<template>
  <Toolbar>
    <template #start>
      <H1>Belgian Merit Program</H1>      
    </template>
    <template #center>
      <TabMenu :model="items" />
    </template>
  </Toolbar>

  <router-view />

</template>



<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Results',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: 'Add Results',
    icon: 'pi pi-fw pi-plus-circle',
    to: '/addview'
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog',
    to: '/test'
  }
]);

</script>
