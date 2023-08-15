<script lang="ts">
  import { Input } from '$lib';
  import { Popular } from '$blocks/search';

  export let disabled: boolean;

  let isElementSelected = false;
  let value = '';

  $: if (isElementSelected) {
    disabled = false;
  } else {
    disabled = true;
  }

  function selectPopular(event: CustomEvent) {
    isElementSelected = true;
    value = event.detail;
  }
</script>

<div class="space-y-16">
  <p class="text-4xl w-2/3">What type of business is the website for?</p>
  <Input bind:value bind:isElementSelected />
  <Popular on:selectPopular={selectPopular} />
</div>
