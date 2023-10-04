import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', () => {
  const mode = ref<string>('');

  const setMode = (value: string) => {
    mode.value = value;
  };

  return { mode, setMode };
});
