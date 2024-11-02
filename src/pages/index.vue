<template>
  <div class="flex flex-col gap-4">
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
    <div class="flex flex-col gap-3">
      <div
        v-for="user in data"
        :key="user.id"
      >
        <Avatar
          :label="user.name?.slice(0, 2) ?? 'A'"
          class="mr-2"
          size="xlarge"
          shape="circle"
        />
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/use-counter-store'

const { increment } = useCounterStore()
const { count, doubleCount } = storeToRefs(useCounterStore())

// sample api call
const { data } = await useFetch('/api/users', {
  method: 'GET',
})
</script>
