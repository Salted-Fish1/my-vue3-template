<script setup lang="ts">
import { useCounterStore } from '@/stores/index'
const store = useCounterStore()
</script>

<template>
	<div>{{ store.count }}</div>
</template>

<style lang="less">
</style>
