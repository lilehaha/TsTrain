
function convert(v:unknown):unknown
{
    if(typeof v === 'number') return v * 2;
    if(typeof v === 'string') return v.toUpperCase() + "!";

    throw new  Error("Unable to convert!");
}



console.log(convert(10)); // 输出 20
console.log(convert('hello')); // 输出 HELLO!