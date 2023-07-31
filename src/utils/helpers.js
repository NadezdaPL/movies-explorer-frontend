import {
  MOVIE_ADD_THREE,
  MOVIE_ADD_TWO,
  MOVIE_SCREEN_EIGHT,
  MOVIE_SCREEN_FIVE,
  MOVIE_SCREEN_LARGE,
  MOVIE_SCREEN_MEDIUM,
  MOVIE_SCREEN_MOBILE,
  MOVIE_SCREEN_TWELVE,
} from './constants';

export function converter(item) {
  const minute = item % 60;
  const hour = (item - minute) / 60;
  if (hour === 0) {
    return `${minute}m`;
  } else if (minute === 0) {
    return `${hour}ч`;
  } else {
    return `${hour}ч ${minute}m`;
  }
}

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const getFromLocalStorage = (key) => {
  const isJson = isJsonString(localStorage.getItem(key));
  if (isJson) {
    return JSON.parse(localStorage.getItem(key));
  }
  return localStorage.getItem(key);
};

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

export function qtyCards() {
  const innerWidth = window.innerWidth;
  if (innerWidth <= MOVIE_SCREEN_MOBILE) {
    return MOVIE_SCREEN_FIVE;
  } else if (innerWidth <= MOVIE_SCREEN_MEDIUM) {
    return MOVIE_SCREEN_EIGHT;
  } else if (innerWidth <= MOVIE_SCREEN_LARGE) {
    return MOVIE_SCREEN_TWELVE;
  } else if (innerWidth > MOVIE_SCREEN_LARGE) {
    return MOVIE_SCREEN_TWELVE;
  }
}

export function qtyAddCards() {
  const innerWidth = window.innerWidth;
  if (innerWidth <= MOVIE_SCREEN_MOBILE) {
    return MOVIE_ADD_TWO;
  } else if (innerWidth <= MOVIE_SCREEN_MEDIUM) {
    return MOVIE_ADD_TWO;
  } else if (innerWidth <= MOVIE_SCREEN_LARGE) {
    return MOVIE_ADD_TWO;
  } else {
    return MOVIE_ADD_THREE;
  }
}
