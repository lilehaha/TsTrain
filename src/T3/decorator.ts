interface Person {
    name: string
    age: string
}

// 普通装饰器
function defaultInit(target: any) {
  target.prototype.name = "sb";
  target.prototype.age = "18";
}

// 装饰器工厂
function initName(name: string) {
  return function initName(target: any) {
    target.prototype.name = name;
  };
}

// 属性装饰器
function setWeight(target: any, propertyKey: string) {
  console.log(`property name: ${propertyKey}`);
}

// 方法装饰器
function setNameArg(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Method ${propertyKey} is called with arguments: ${JSON.stringify(args)}`
    );
    return originalMethod.apply(this, args);
  };
}

// 参数装饰器
function paramLog(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`paramLog called on: `, target, propertyKey, parameterIndex);
}

//@defaultInit
@initName("dsb")
class Person {
  @setWeight
  weight: number;
  constructor() {
    this.weight = 50;
  }

  @setNameArg
  setName(@paramLog name: string) {
    this.name = name;
  }
}

let p = new Person();
console.log(p.name);
console.log(p.weight);
p.weight = 20;
console.log(p.weight);
p.setName("nnn");
