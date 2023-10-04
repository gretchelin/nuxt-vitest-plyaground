import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderSuspended } from 'nuxt-vitest/utils';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';
import TestedComponent from './NavBar.vue';
import { useNavStore } from '~/stores/nav';

describe('NavBar.vue', () => {
  const pinia = createTestingPinia();

  const mountFunction = (options: Record<string, any> = {}) => {
    vi.mock('~/stores/nav.ts', async (originalImport) => {
      const mod: any = await originalImport();
      return {
        ...mod,
        useNavStore: () => {
          return mod?.useNavStore(pinia);
        },
      };
    });

    return renderSuspended(TestedComponent, {
      ...options,
      // global: {
      //   plugins: [pinia, ...(options?.plugins || [])],
      // },
    });
  };

  beforeEach(() => {
    // tell vitest we use mocked time
    // vi.useFakeTimers();
  });

  afterEach(() => {
    // vi.resetAllMocks();
    // vi.useRealTimers();
  });

  it('should render nothing on default', async () => {
    const { queryByTestId } = await mountFunction({
      props: {
        'data-qa': 'navbar',
      },
    });

    const navbar = queryByTestId('navbar');
    expect(navbar).toBeTruthy();

    const modeValue = queryByTestId('mode-value');
    expect(modeValue).toBeFalsy();

    const nav = queryByTestId('nav');
    expect(nav).toBeFalsy();
  });

  it('should render if mode is valid', async () => {
    const { queryByTestId } = await mountFunction({
      props: {
        'data-qa': 'navbar',
      },
    });

    useNavStore().setMode('loremipsum');

    const navbar = queryByTestId('navbar');
    expect(navbar).toBeTruthy();

    const modeValue = queryByTestId('mode-value');
    expect(modeValue).toBe('loremipsum');

    const nav = queryByTestId('nav');
    expect(nav).toBeFalsy();
  });
});
