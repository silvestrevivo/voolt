<script lang="ts">
  import { getContext } from 'svelte';
  import { Error } from '$blocks/search/index';
  import { Search, ChevronDown } from '$icons/index';
  import { selectedElementStore } from '$stores/selectedElement';
  import type { Industry } from '$types/index';

  const industries: Industry[] = getContext('industries');

  export let isElementSelected = false;
  export let value = '';

  let filteredIndustries: Industry[] = [];
  let selectVisible = false;
  let noResults = false;

  function toggleSelect() {
    if (selectVisible) {
      filteredIndustries = [];
      selectVisible = false;
      noResults = false;
    } else {
      filteredIndustries = industries;
      selectVisible = true;
    }
  }

  function selectElement(name: string) {
    value = name;
    selectVisible = false;
    filteredIndustries = [];
    isElementSelected = true;
    selectedElementStore.select(name, industries);
  }

  function searchIndustry(searchTerm: string) {
    isElementSelected = false;
    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();

      const filter = industries.filter(obj => {
        const nameMatches = obj.name.toLowerCase().includes(searchTerm);
        const synonymsMatches = obj.synonyms.some(synonym =>
          synonym.toLowerCase().includes(searchTerm),
        );
        const serviceNamesMatches = obj.services.some(service =>
          service.name.toLowerCase().includes(searchTerm),
        );

        return nameMatches || synonymsMatches || serviceNamesMatches;
      });
      // use cases
      filteredIndustries = filter;
      if (filter.length === 0) {
        noResults = true;
      } else {
        noResults = false;
      }
    } else {
      filteredIndustries = [];
    }
  }
</script>

<div class="relative">
  <div class="relative mt-2 rounded-md shadow-sm">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <Search />
    </div>
    <input
      type="email"
      name="email"
      id="email"
      on:keydown={() => searchIndustry(value)}
      bind:value
      class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Search for your industry"
    />

    {#if filteredIndustries.length > 0 || selectVisible}
      <ul
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        {#each filteredIndustries as { name }}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class="text-gray-900 relative select-none py-2 pl-3 pr-9 cursor-pointer"
            on:click={() => selectElement(name)}
          >
            <span class="font-normal block truncate hover:font-semibold"
              >{name}</span
            >
          </li>
        {/each}
      </ul>
    {/if}
    <button
      on:click={toggleSelect}
      class="absolute inset-y-0 right-0 flex items-center px-1 cursor-pointer"
    >
      <ChevronDown />
    </button>
  </div>
  {#if noResults}
    <Error />
  {/if}
</div>
