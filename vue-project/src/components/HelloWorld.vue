<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineProps<{
  msg: string
}>()

import { useCounterStore } from "@/stores/counter"
import {useControlModes} from '@/composables/useControleModes'

const { controlModes }=useControlModes()

const counterStore = useCounterStore()


const count = computed(() => counterStore.count)
const increment = counterStore.increment

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))

onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>
  <div class="greetings">
    <h2>Mouse position is at: {{ x }}, {{ y }}</h2>
    <h1 class="green">{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <button @click="increment"> increment</button>

    <div>
      <h2>Control Modes</h2>
      <select v-model="controlModes.contingency.defaultMode">
        <option value="AGC">AGC</option>
        <option value="MANUAL">Manual</option>
        <option value="GOVERNOR">Governor</option>
      </select>


    </div>

  </div>
</template>