import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', () => {
  const mode = ref<string>('');

  const setMode = async (value: string) => {
    mode.value = value;
  };

  return { mode, setMode };
});
