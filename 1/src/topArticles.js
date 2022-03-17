import {readable} from 'svelte/store';

const contents = [
  {
    id: 'news',
    title: 'ニュース',
    content: [
      {
        url: '#lorem',
        title: 'lorem',
      },
      {
        url: '#ipsum',
        title: 'ipsum',
      },
      {
        url: '#dolor',
        title: 'dolor',
      },
      {
        url: '#sit',
        title: 'sit',
      },
      {
        url: '#amet',
        title: 'amet',
      },
    ],
  },
  {
    id: 'popular',
    title: '人気記事',
    content: [
      {
        url: '#consectetur',
        title: 'consectetur',
      },
      {
        url: '#adipiscing',
        title: 'adipiscing',
      },
      {
        url: '#elit',
        title: 'elit',
      },
      {
        url: '#sed',
        title: 'sed',
      },
      {
        url: '#do',
        title: 'do',
      },
    ],
  },
  {
    id: 'feature',
    title: '特集記事',
    content: [
      {
        url: '#eiusmod',
        title: 'eiusmod',
      },
      {
        url: '#tempor',
        title: 'tempor',
      },
      {
        url: '#incididunt',
        title: 'incididunt',
      },
    ],
  },
];

const topArticles = readable(contents);

export {topArticles};
