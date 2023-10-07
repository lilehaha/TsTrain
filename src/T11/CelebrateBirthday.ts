class Person1 {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

(Person1.prototype as any).celebrateBirthday = function () {
    this.age++;
    console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`);
};

const a = new Person1("John", 30) as any;
a.celebrateBirthday(); 