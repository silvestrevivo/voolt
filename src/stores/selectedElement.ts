import { writable } from 'svelte/store';
import type { Industry } from '$types/index';

type SelectedElementStore = Industry | null;

function declareSelectedElementStore() {
  const { subscribe, update } = writable<SelectedElementStore>(null);

  return {
    subscribe,
    select: (element: string, industries: Industry[]) => {
      const industry = industries.find(industry => industry.name === element);
      if (industry) {
        update(() => industry);
      }
    },
  };
}

export const selectedElementStore = declareSelectedElementStore();
