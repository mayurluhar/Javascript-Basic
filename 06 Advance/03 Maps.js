var map = new Map();

map.set(1, "Surat");
map.set(2, "Pune");
map.set(3, "Banglore");

console.log(map);

// for (let a of map.keys()) {
//   console.log(`Key is ${a}`);
// }

for (let [key, value] of map) {
  console.log(`Key is ${key} Value is ${value}`);
}

// map.forEach((m, k) => {
//   console.log(m, k);
// });
