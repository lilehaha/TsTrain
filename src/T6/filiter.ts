// 遍历
type Filter_1<T, U> = { [K in keyof T]: T[K] extends U ? T[K] : never};

// 递归
type Filter_2<T, U> = T extends U
    ? T
    : T extends object
    ? { [K in keyof T]: Filter_2<T[K], U> }
    : never;

type Fruit = 'apple' | 'banana' | 'orange';
type Fruits = ['apple', 'banana', 'orange', 'cherry'];
type OnlyFruits = Filter_1<Fruits, Fruit>; // ['apple', 'banana', 'orange']
type OnlyFruits1 = Filter_2<Fruits, Fruit>; // ['apple', 'banana', 'orange']