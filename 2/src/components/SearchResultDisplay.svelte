<script>
export let data = {
  archived_snapshots: {},
  url: '',
};

function parseTimestamp(timestamp) {
  const chars = [4, 2, 2, 2, 2, 2];
  const initial = {
    params: [],
    accumulator: 0,
  };
  const formatBase = chars.reduce((result, count, index) => {
    const param = timestamp.slice(result.accumulator, result.accumulator + count);
    const number = parseInt(param);
    const paramNumber = index === 1 ? number - 1 : number;
    result.params.push(paramNumber);
    result.accumulator = result.accumulator + count;
    return result;
  }, initial);
  return new Date(Date.UTC(...formatBase.params));
}

function formatDate(timestamp) {
  const options = {
    dateStyle: 'medium',
    timeStyle: 'long',
  };
  const date = parseTimestamp(timestamp);
  return new Intl.DateTimeFormat('ja-JP', options).format(date);
}

$: available = data.archived_snapshots.hasOwnProperty('closest');
$: snapshot = available ? data.archived_snapshots.closest : null;
</script>

<h2>
  {#if available}
    スナップショットが見つかりました！
  {:else}
    スナップショットが見つかりませんでした
  {/if}
</h2>
<dl>
  <dt>対象URL</dt>
  <dd>
    <a
      href="{data.url}"
      target="_blank"
      rel="noopener"
    >{data.url}</a>
  </dd>
  {#if available}
    <dt>最新スナップショット日時</dt>
    <dd>{formatDate(snapshot.timestamp)}</dd>
    <dt>最新スナップショットURL</dt>
    <dd>
      <a
        href="{snapshot.url}"
        target="_blank"
        rel="noopener"
      >{snapshot.url}</a>
    </dd>
  {/if}
</dl>
{#if !available}
  <p>違うURLを試してみてください。</p>
{/if}

<style>
dt:nth-child(n+2) {
  margin-top: 0.5em;
}

dd {
  overflow-wrap: anywhere;
}
</style>
