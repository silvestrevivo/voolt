<script lang="ts">
  import { Button } from '$lib';
  import { ChevronLeft } from '$icons/index';

  export let disabled: boolean;
</script>

<div class="flex justify-between">
  <Button text="Back" color="secondary" {disabled}>
    <ChevronLeft />
  </Button>
  <Button text="Continue" {disabled} />
</div>
