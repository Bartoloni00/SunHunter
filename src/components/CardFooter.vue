<script setup>
import {computed} from 'vue'
const props = defineProps({
    color: {
      type: String,
      default: "primary",
    }
})
const bgColors = computed(()=> {
      switch (props.color) {
        case "primary":
          return "shadow-primary-200";
          break;
        case "gray":
          return "shadow-bg-300";
          break;
        default:
          return "shadow-primary-200";
        break;
    }
  })
</script>
<template>
    <footer :class="`flex justify-between items-center shadow-inner ${bgColors} p-2 max-w-md m-auto`">
            <img src="../assets/img/mate.svg" alt="mate icon" class="w-8 mx-2"/>
            <p  class="text-text-100"><slot>Hermoso para tomar mate.</slot></p>
       </footer>
</template>