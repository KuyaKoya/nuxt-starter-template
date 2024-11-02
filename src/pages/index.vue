<template>
  <div class="flex flex-col gap-4">
    <Avatar
      label="P"
      class="mr-2"
      size="xlarge"
    />
    <Button
      label="Login"
      class="p-button-outlined w-fit"
      @click="increment"
    />
    <Button
      icon="pi pi-home"
      aria-label="Save"
    />
    <div>{{ count }} {{ doubleCount }}</div>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from '../stores/use-counter-store'

const { count, doubleCount, increment } = useCounterStore()

const st5 = 'hello'
if (st5 === 'hello') {
  console.log('hello')
}
</script>
