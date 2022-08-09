const titleStatus = [
  {
    title: "Hello",
    status: true,
  },
  {
    title: "Hello1",
    status: true,
  },
  {
    title: "Hello2",
    status: false,
  },
  {
    title: "Hello3",
    status: false,
  },
];

const result = titleStatus.filter((notDone) => {
  if (notDone.status === true) {
    console.log(notDone.title);
  }
});

console.log(result);
