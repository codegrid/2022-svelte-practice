<script>
import SearchResultDisplay from './SearchResultDisplay.svelte';
import {lastSnapshot} from '../lastSnapshot';
</script>

{#if $lastSnapshot.input}
  {#await $lastSnapshot.data}
    <p>データ取得中……</p>
  {:then data}
    <SearchResultDisplay {data} />
  {:catch error}
    <h2>エラーが発生しました。</h2>
    <p>{error}</p>
  {/await}
{:else}
  <p>フォームにURLを入力してください。</p>
{/if}
