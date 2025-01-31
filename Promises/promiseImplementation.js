const promise = new Promise((resolve, reject) => {
  let age = 30;
  if (age > 18) {
    resolve("your age is " + age + " you are eligible to give vote");
  } else {
    reject("your age is " + age + " you are not eligible to give vote");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
