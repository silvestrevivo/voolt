import '@poppanator/sveltekit-svg/dist/svg';

declare module '*.svg' {
  import { SvelteComponent } from 'svelte';
  const content: SvelteComponent;
  export default content;
}

declare module '*.svg?component' {
  const content: string;
  export default content;
}

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
