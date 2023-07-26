function CatchError() {
  return function (targetClass: any) {
      // 获取类的所有属性名称（包括继承的）
      const propertyNames = Object.getOwnPropertyNames(targetClass.prototype);

      propertyNames.forEach((propertyName) => {
          if (propertyName === 'constructor') return;
          const originalMethod = targetClass.prototype[propertyName];
          // 检测它是否为函数
          if (typeof originalMethod !== 'function')  return;

          targetClass.prototype[propertyName] = function (...args: any[]) {
                try {
                    // 尝试执行原方法
                    return originalMethod.apply(this, args);
                } catch (error) {
                    // 在这里处理错误
                    console.error(`func (${propertyName}) `+ error);
                }
          }
      });
  };
}

@CatchError()
class Calculator {
    public add(a: any, b: any): number {
      if(typeof a !== "number" || typeof b !== "number")
      {
          throw new Error("Parameters must be numbers");
      }
      return a + b;
    }
}
  
const calculator = new Calculator();
console.log(calculator.add(1, 2)); // 3
console.log(calculator.add(null, 2)); // error

