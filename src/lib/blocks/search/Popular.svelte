<script lang="ts">
  import { getContext, createEventDispatcher } from 'svelte';
  import { Badge } from '$lib';
  import { selectedElementStore } from '$stores/selectedElement';
  import type { Industry } from '$types/index';

  const dispatch = createEventDispatcher();
  const industries: Industry[] = getContext('industries');
  const popularIndustries = industries.filter(industry => industry.isPopular);

  function selectPopular(name: string) {
    dispatch('selectPopular', name);
    selectedElementStore.select(name, industries);
  }
</script>

<div class="gap-2 flex flex-wrap">
  {#each popularIndustries as { name }}
    <Badge text={name} on:click={() => selectPopular(name)} />
  {/each}
</div>
