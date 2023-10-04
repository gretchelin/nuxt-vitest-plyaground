import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
  // any custom vitest config you require
  test: {
    environment: 'nuxt',
    globals: true,
    clearMocks: true,
    restoreMocks: true,
    passWithNoTests: true,
    setupFiles: './test/setup-test.ts',
  },
});
