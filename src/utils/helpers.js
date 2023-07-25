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

