const course = [
  {
    name: "c++ course",
    price: 3.9,
  },
  {
    name: "react course",
    price: 4.2,
  },
  {
    name: "java course",
    price: 3.6,
  },
  {
    name: "python course",
    price: 3.1,
  },
];

function courseList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  course.forEach((c) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(c.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode(c.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

window.addEventListener("load", courseList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  course.sort((a, b) => a.price - b.price);
  courseList();
});

const button1 = document.querySelector(".sort-btn-2");

button1.addEventListener("click", () => {
  course.sort((a, b) => b.price - a.price);
  courseList();
});
