function createArray<T, U>(arr1: T[], arr2: U[]): (T | U)[];
function createArray<T, U, W>(value1: T, value2: U, value3: W): (num: number) => (T | U | W)[];

function createArray(...args: any[]){
    if (args.length === 3) {
        return function(num: number) {
            let newArr = new Array();
            for (let index = 0; index < num; ++index) {
                newArr = newArr.concat(...args);
            }
            return newArr;
        }
    }

    return args[0].concat(args[1]);
}



const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];

const newArr1 = createArray(arr1, arr2);
console.log(newArr1); // 输出 [1, 2, 3, "a", "b", "c"]

const newArr2 = createArray(1, 'a', true)(3);
console.log(newArr2); // 输出 [1, "a", true, 1, "a", true, 1, "a", true]