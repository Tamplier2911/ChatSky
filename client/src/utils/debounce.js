const debounce = (fn, wait) => {
  let timeout = null;
  return (...args) => {
    const next = () => fn(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};

export default debounce;
