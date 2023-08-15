<script lang="ts">
  export let text = '',
    href = '',
    type: 'button' | 'submit' = 'button',
    color: 'primary' | 'secondary' = 'primary',
    disabled = false;

  let klass = '';
  export { klass as class };

  $: style = `inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    color === 'primary'
      ? 'text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600'
      : 'text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-inset ring-gray-300'
  } ${klass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
</script>

{#if href}
  <a {href} data-sveltekit-preload-data="hover">
    <button type="button" class={style}>
      <slot />
      {text}
    </button>
  </a>
{:else}
  <button {type} class={style} {disabled} on:click>
    <slot />
    {text}
  </button>
{/if}
