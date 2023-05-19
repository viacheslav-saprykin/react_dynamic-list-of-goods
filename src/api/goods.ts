import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.slice(0, 5));
};

export const getRed = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter(item => item.color === 'red'));
};
