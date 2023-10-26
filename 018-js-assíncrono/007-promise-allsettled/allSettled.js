const promise1 = new Promise((resolver, reject) => {
  setTimeout(() => {
    return resolver("promise 1");
  }, 3000);
});

const promise2 = new Promise((resolver, reject) => {
  setTimeout(() => {
    return resolver("promise 2");
  }, 4000);
});

const promise3 = new Promise((resolver, reject) => {
  setTimeout(() => {
    return resolver("promise 3");
  }, 1000);
});
