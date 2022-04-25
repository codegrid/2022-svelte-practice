<script>
import {lastSnapshot} from '../lastSnapshot';

let inputValue = '';

function onSubmit() {
  const url = inputValue.trim();
  if (!url) {
    lastSnapshot.reset();
    return;
  }
  lastSnapshot.fetchSnapshot(url);
}
</script>

<form
  on:submit|preventDefault={onSubmit}
>
  <input
    type="url"
    placeholder="https://example.com"
    bind:value={inputValue}
  >
  <button>
    アーカイブを検索
  </button>
</form>

<style>
input {
  margin-block-end: 0.5em;
  border: 1px solid steelblue;
  padding: 0.25em;
  width: 100%;
  font-size: 1rem;
}

button {
  padding: 0.25em;
  font-size: 1rem;
}
</style>
