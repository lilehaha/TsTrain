
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K]
};

interface Person {
  name: string;
  address: {
    city: string;
  };
}

type ReadonlyPerson = DeepReadonly<Person>;
let person: ReadonlyPerson = new Person();
// person.name = "xxx";
// person.address.street = "xxxx";