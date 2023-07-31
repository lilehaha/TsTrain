import 'reflect-metadata'

type typeParam = 'string' | 'number';

function hasWithTypes(obj:any,key:string,type:typeParam)
{
    if(Reflect.has(obj,key)) return typeof obj[key] === type;
    return false;
}

class Example {
    public name: string = "";
}
  
const example = new Example();
  
console.debug(hasWithTypes(example, "name",  'string')); // true
console.debug(hasWithTypes(example, "name", 'number')); // false
console.debug(hasWithTypes(example, "age", 'number')); // false