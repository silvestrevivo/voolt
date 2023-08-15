<script lang="ts">
  import { Footer, Logo } from '$lib';
  import { Search } from '$lib/blocks/search/index';

  let disabled = true;
</script>

<div class="flex-1 py-16 px-28 flex flex-col justify-between">
  <Logo />
  <Search bind:disabled />
  <Footer {disabled} />
</div>
