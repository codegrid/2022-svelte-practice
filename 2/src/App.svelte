<script>
import SearchBox from './components/SearchBox.svelte';
import SearchResult from './components/SearchResult.svelte';
</script>

<div class="app">
  <h1 class="heading">Wayback Machineアーカイブチェック</h1>
  <div class="body">
    <SearchBox/>
    <SearchResult/>
  </div>
</div>

<style>
:global(body) {
  margin: 10px;
  background-color: ivory;
  font-family: sans-serif;
}

.app {
  margin-inline: auto;
  max-width: 600px;
}

.heading {
  margin-block: 1em;
  font-size: 1.5rem;
  text-align: center;
}
</style>
