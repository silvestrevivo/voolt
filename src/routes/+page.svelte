<script lang="ts">
  import { setContext } from 'svelte';
  import { Left, Right } from '$lib/layout';

  export let data;

  setContext('industries', data.industries);
</script>

<main class="h-screen flex">
  <Left />
  <Right />
</main>
