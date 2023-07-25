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

export const BEATFILM = 'https://api.nomoreparties.co';

export const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;