<script>
import {topArticles} from './topArticles';
import TabUI from './components/TabUI.svelte';
</script>

<TabUI data={topArticles}/>

<style>
:global(body) {
  margin: 10px;
  background-color: ivory;
  font-family: sans-serif;
}
</style>
