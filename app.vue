<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNavStore } from '~/stores/nav';

const {mode} = storeToRefs(useNavStore());
const onBtnClick = computed(() => {
  if(mode.value) {
    useNavStore.setMode('');
  } else {
    useNavStore.setMode('lorem');
  }
});
</script>

<template>
  <div>
    <NavBar />

    <button style="margin: 16px 0;" @click="onBtnClick">Toggle mode</button>
  </div>
</template>
