function deepCopy<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const copiedArr = obj.map((item) => deepCopy(item)) as unknown as T;
      return copiedArr;
    }
  
    if (obj instanceof Map) {
      const copiedMap = new Map();
      obj.forEach((value, key) => {
        copiedMap.set(deepCopy(key), deepCopy(value));
      });
      return copiedMap as unknown as T;
    }
  
    const copiedObj = {} as T;
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copiedObj[key] = deepCopy(obj[key]);
      }
    }
  
    return copiedObj;
}
  
  
// 普通对象
const obj1 = { a: 1, b: { c: 2 } };
const cloned1 = deepCopy(obj1);
console.log(obj1 === cloned1); // false
console.log(obj1.b === cloned1.b); // false

// 数组对象
const obj2 = [1, [2, { a: 3 }]];
const cloned2 = deepCopy(obj2);
console.log(obj2 === cloned2); // false
console.log(obj2[1] === cloned2[1]); // false
console.log((obj2[1] as any)[1] === (cloned2[1] as any)[1]); // false

// Map 对象
const key = { a: 1 };
const obj5 = new Map([[key, { b: 2 }]]);
const cloned5 = deepCopy(obj5);
console.log(obj5 === cloned5); // false
console.log(obj5.get(key) === cloned5.get(key)); // false