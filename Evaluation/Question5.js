function mergeObjects(obj1, obj2) {
  let finalOutput = { ...obj1, ...obj2 };
  return finalOutput;
}

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

const result = mergeObjects(obj1, obj2);
console.log(result);
// Output: { name: "John", age: 40, city: "New York" }
