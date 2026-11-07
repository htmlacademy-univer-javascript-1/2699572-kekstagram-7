import {createPhoto} from './data.js';

const PHOTO_COUNT = 25;

const photos = [];

for (let i = 1; i <= PHOTO_COUNT; i++) {
  photos.push(createPhoto(i));
}
