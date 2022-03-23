<script>
export let data;

let activeIndex = 0;
let focusedIndex;
const tabsLastIndex = $data.length - 1;
const tabs = [];

function onClickTab(index) {
  if (activeIndex === index) {
    return;
  }
  activeIndex = index;
}

function onFocusTab(index) {
  focusedIndex = index;
}

function onKeydownTab(event) {
  const key = event.key;
  switch (key) {
    case 'ArrowRight':
    case 'Right':
      focusNextTab();
      break;
    case 'ArrowLeft':
    case 'Left':
      focusPreviousTab();
      break;
    case 'Home':
      focusTab(0);
      break;
    case 'End':
      focusTab(tabsLastIndex);
      break;
  }
}

function focusTab(index) {
  tabs[index].focus();
}

function focusNextTab() {
  let nextIndex = focusedIndex + 1;
  if (nextIndex > tabsLastIndex) {
    nextIndex = 0;
  }
  focusTab(nextIndex);
}

function focusPreviousTab() {
  let nextIndex = focusedIndex - 1;
  if (nextIndex < 0) {
    nextIndex = tabsLastIndex;
  }
  focusTab(nextIndex);
}
</script>

<div class="TabUI">
  <ul class="TabUI-tablist"
      role="tablist"
      aria-label="おすすめ記事リンク"
  >
    {#each $data as {id, title}, i}
      {@const currentActive = activeIndex === i}
      {@const onClick = () => onClickTab(i)}
      {@const onFocus = () => onFocusTab(i)}
      <li class="TabUI-item"
          role="presentation"
      >
        <button type="button"
                class="TabUI-tab"
                id="tab-{id}"
                role="tab"
                aria-controls="panel-{id}"
                aria-selected={currentActive ? 'true' : 'false'}
                tabindex={currentActive ? 0 : -1}
                bind:this={tabs[i]}
                on:click={onClick}
                on:focus={onFocus}
                on:keydown={onKeydownTab}
        >
          {title}
        </button>
      </li>
    {/each}
  </ul>
  <div class="TabUI-body">
    {#each $data as {id, title, content}, i}
      {@const currentActive = activeIndex === i}
      <div class="TabUI-tabpanel"
           id="panel-{id}"
           role="tabpanel"
           aria-labelledby="tab-{id}"
           aria-hidden={currentActive ? 'false' : 'true'}
           tabindex="0"
      >
        <ol class="ArticleList">
          {#each content as {url, title}}
            <li class="ArticleList-item">
              <a href={url} class="ArticleList-link">{title}</a>
            </li>
          {/each}
        </ol>
      </div>
    {/each}
  </div>
</div>

<style>
.TabUI {
  width: 300px;
}

.TabUI-tablist {
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

.TabUI-item {
  border-width: 1px 1px 0 1px;
  border-style: solid;
  border-color: silver;
  margin-bottom: -1px;
}

.TabUI-item:nth-child(n+2) {
  margin-left: 5px;
}

.TabUI-tab {
  display: block;
  position: relative;
  margin: 0;
  border-width: 0 0 1px 0;
  border-style: solid;
  padding: 0.25em 0.5em;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
}

.TabUI-tab[aria-selected="true"] {
  border-bottom-color: white;
  background-color: white;
  color: black;
}

.TabUI-tab[aria-selected="false"] {
  border-color: silver;
  background-color: whitesmoke;
  color: dimgray;
}

.TabUI-tab[aria-selected="false"]:focus {
  color: black;
}

.TabUI-body {
  border-width: 1px;
  border-style: solid;
  border-color: silver;
  background-color: white;
}

.TabUI-tabpanel {
  padding: 1em 0.5em;
}

.TabUI-tabpanel[aria-hidden="true"] {
  display: none;
}

.ArticleList {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
