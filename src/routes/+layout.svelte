<script lang="ts">
  import { selectedElementStore } from '$stores/selectedElement';

  $: console.log('Selected Element', $selectedElementStore);

  import '../app.postcss';
</script>

<slot />
