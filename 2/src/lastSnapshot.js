import {writable} from 'svelte/store';

const initialValue = {
  input: '',
  data: {},
};

export const lastSnapshot = createStore(initialValue);

function createStore(data) {
  const {subscribe, set} = writable(data);

  return {
    subscribe,
    fetchSnapshot(targetUrl) {
      const url = `https://archive.org/wayback/available?url=${targetUrl}`;
      const data = fetch(url).then(response => response.json()).catch(error => {
        throw new Error(error);
      });
      set({
        input: url,
        data,
      });
    },
    reset() {
      set(data);
    },
  };
}
