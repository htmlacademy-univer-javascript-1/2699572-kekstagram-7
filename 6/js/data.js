import {getRandomInteger, getRandomArrayElement} from './util.js';

const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_COUNT_MIN = 0;
const COMMENT_COUNT_MAX = 30;
const AVATAR_COUNT_MIN = 1;
const AVATAR_COUNT_MAX = 6;

const NAMES = [
  'Иван',
  'Петр',
  'Мария',
  'Алексей',
  'Ольга',
  'Дмитрий',
  'Елена',
  'Сергей',
  'Анна',
  'Александра'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Красивый закат',
  'Любимый кот',
  'Вечерняя прогулка',
  'Вкусный завтрак',
  'Осеннее утро'
];

let commentId = 1;

export const createComment = () => {
  let message = getRandomArrayElement(COMMENTS);
  if (getRandomInteger(0, 1) === 1) {
    message = `${message} ${getRandomArrayElement(COMMENTS)}`;
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInteger(AVATAR_COUNT_MIN, AVATAR_COUNT_MAX)}.svg`,
    message: message,
    name: getRandomArrayElement(NAMES)
  };
};

export const createPhoto = (id) => {
  const commentsCount = getRandomInteger(COMMENT_COUNT_MIN, COMMENT_COUNT_MAX);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
    comments: comments
  };
};
