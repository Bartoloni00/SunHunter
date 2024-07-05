<script setup>
const props = defineProps({
    title:{
        required: true,
        type: String,
    }
})
</script>
<template>
    <span class="text-bold text-xl px-1" :title="title" >
        <slot>data</slot>
        </span>
</template>