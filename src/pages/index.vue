<template>
  <div class="flex flex-col gap-4">
    <Avatar
      label="T"
      class="mr-2"
      size="xlarge"
    />
    <div class="flex flex-row items-center gap-2">
      <Button
        label="Increment and double"
        class="p-button-outlined w-fit"
        @click="increment"
      />
      <div>{{ count }} {{ doubleCount }}</div>
    </div>
    <div class="flex flex-row items-center gap-3">
      <Button
        icon="pi pi-home"
        aria-label="Save"
      />
      Home
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/use-counter-store'

const { increment } = useCounterStore()
const { count, doubleCount } = storeToRefs(useCounterStore())
</script>
