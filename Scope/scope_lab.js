// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    let var1 = "let hello";
    const var2 = "const hello";
    var var3 = "var hello";

    var1 = "new hello";
    //var2 = "new hello";
    var3 = "new hello";
}

var1 = "let new hello 2.0";
//var2 = "new hello 2.0";
var3 = "var new hello 2.0";

console.log(var1);
//console.log(var2);
console.log(var3);
