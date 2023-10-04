<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNavStore } from '~/stores/nav';

const {mode} = storeToRefs(useNavStore());
const isShown = computed(() => {
  return !!mode.value;
});
</script>

<template>
  <div style="background: #0a0a0a; color: white">
    This is A Navbar
    
    <span data-qa="mode-value">{{ mode }}</span>

    <div v-if="isShown" style="margin: 16px 0">
      This is only shown if mode value is valid;
    </div>
  </div>
</template>
