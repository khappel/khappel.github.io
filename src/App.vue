<template>
  <card>
    <template #title> Belgian Merit Program </template>
    
    <template #content>
      <TabMenu :model="items" />
    <router-view />   
      </template>
   
  </card>
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
