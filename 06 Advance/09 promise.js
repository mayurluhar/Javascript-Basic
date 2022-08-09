const uno = () => {
  return "I am One";
};

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Event Loop");
    }, 3000);
  });
};

const tres = () => {
  return "I am Three";
};

const myValue = async () => {
  const valueOne = uno();
  console.log(valueOne);

  const valueTwo = await dos();
  console.log(valueTwo);

  const valueThree = tres();
  console.log(valueThree);
};

myValue();
